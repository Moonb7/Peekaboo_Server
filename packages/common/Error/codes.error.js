// 서버에서 사용할 에러 코드들 정의
const errorCodesMap = {
  SOCKET_ERROR: {
    code: 10000,
    message: '소켓 에러 발생',
  },
  CLIENT_VERSION_MISMATCH: {
    code: 10001,
    message: '클라이언트 버전 불일치',
  },
  UNKNOWN_HANDLER_ID: {
    code: 10002,
    message: '알 수 없는 핸들러 ID',
  },
  PACKET_DECODE_ERROR: {
    code: 10003,
    message: '패킷 디코딩 오류',
  },
  PACKET_STRUCTURE_MISMATCH: {
    code: 10004,
    message: '패킷 구조 불일치',
  },
  MISSING_FIELDS: {
    code: 10005,
    message: '필드 누락',
  },
  USER_NOT_FOUND: {
    code: 10006,
    message: '사용자를 찾을 수 없음',
  },
  INVALID_PACKET: {
    code: 10007,
    message: '유효하지 않은 패킷',
  },
  INVALID_SEQUENCE: {
    code: 10008,
    message: '유효하지 않은 시퀀스',
  },
  GAME_NOT_FOUND: {
    code: 10009,
    message: '게임을 찾을 수 없음',
  },
  UNKNOWN_PROTOTYPE_NAME: {
    code: 10010,
    message: '알 수 없는 프로토타입 이름',
  },
  DUPLICATED_USER: {
    code: 10011,
    message: '중복된 사용자 오류',
  },
  DB_QUERY_ERROR: {
    code: 10012,
    message: 'DB 쿼리 오류',
  },
  HANDLER_ERROR: {
    code: 10013,
    message: '핸들러 오류',
  },
  PROTOBUF_LOAD_ERROR: {
    code: 10014,
    message: '프로토콜 버퍼 로드 오류',
  },
  AUTHENTICATION_ERROR: {
    code: 10015,
    message: '유저 검증 오류',
  },
  GHOST_NOT_FOUND: {
    code: 10016,
    message: '귀신 검증 오류',
  },
  ITEM_NOT_FOUND: {
    code: 10017,
    message: '아이템 검증 오류',
  },
  ITEM_DETERIORATION: {
    code: 10018,
    message: '아이템 검증 오류',
  },
  UNKNOWN_JOB_TYPE: {
    code: 10019,
    message: '알 수 없는 큐 타입',
  },
  DOOR_NOT_FOUND: {
    code: 10020,
    message: '문 검증 오류',
  },
  INVALID_REQUEST: {
    code: 10021,
    message: '유효하지 않은 요청',
  },
  GAME_IS_STARTED: {
    code: 10022,
    message: '이미 시작된 게임입니다.',
  },
  GAME_IS_FULLED: {
    code: 10023,
    message: '게임에 모든 인원이 찼습니다.',
  },
};

export default errorCodesMap;
