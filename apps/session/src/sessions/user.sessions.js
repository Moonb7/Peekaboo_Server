/**
 * 세션에 대한 정리
 *  전체 세션을 가지고 있는 타입 (user) => 없애고, 변경이 되도록 타입이
 * userSessions : {
 *  [clientKey] : {
 *      type: '...',    // 속해있는 세션 타입
 *      userId: '...'   // 유저의 UUID
 *  }
 * }
 */
import CustomError from '@peekaboo-ssr/error/CustomError';
import errorCodesMap from '@peekaboo-ssr/error/errorCodesMap';

// 특정 타입 세션에 참가 처리하는 함수
export const joinSessionByType = (userSessions, type, userData) => {
  // 만약 해당 유저의 세션이 없다면 등록해줌.
  if (!userSessions[userData.clientKey]) {
    // 유저 세션에 참여하는 경우 등록
    if (type === 'user') {
      userSessions[userData.clientKey] = {
        type,
        userId: userData.uuid,
      };
    } else {
      // 만약 타입이 user가 아닌 다른 경우 비정상 접속 요청
      throw new CustomError(errorCodesMap.INVALID_PACKET);
    }
  }
  // 존재한다면 해당 유저의 세션을 옮겨주는 작업
  else {
    // 만약 게임으로 이동한다면 로비 세션이었는지 확인
    if (type === 'game') {
      if (userSessions[userData.clientKey].type !== 'lobby') {
        throw new CustomError(errorCodesMap.INVALID_PACKET);
      }
    }
    userSessions[userData.clientKey].type = type;
  }
  console.log(`${userData.clientKey} 유저가 ${type} 세션에 참여하였습니다.`);
};

// 세션에 나가기 처리하는 함수
export const exitUserFromSession = (userSessions, clientKey) => {
  // 만약 해당 유저의 세션이 없다면 return
  if (!userSessions[clientKey]) {
    throw new CustomError(errorCodesMap.INVALID_PACKET);
  }
  delete userSessions[clientKey];
};

export const getSessionByType = (userSessions, type) => {
  return userSessions[type];
};

export const getUserByUUID = (userSessions, uuid) => {
  return userSessions.find((user) => user.uuid === uuid);
};

export const getUserByClientKey = (userSessions, clientKey) => {
  return userSessions.find((user) => user.clientKey === clientKey);
};
