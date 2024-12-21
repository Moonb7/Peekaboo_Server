import { createPacketS2G } from '@peekaboo-ssr/utils/createPacket';
import config from '@peekaboo-ssr/config/game';

/**
 * 연결 종료한 유저를 접속 중인 다른 유저들에게 disconnectPlayerNotification로 알려주는 함수
 * @param {*} game
 * @param {*} disconnectUserId
 */
export const disconnectPlayerNotification = async (game, disconnectUserId) => {
  const payload = {
    userId: disconnectUserId,
  };

  game.users.forEach((user) => {
    if (user.id !== disconnectUserId) {
      const packet = createPacketS2G(
        config.clientPacket.dedicated.DisconnectPlayerNotification,
        user.clientKey,
        payload,
      );
      game.socket.write(packet);
    }
  });
};

export const blockInteractionNotification = (game) => {
  const payload = {};

  game.users.forEach((user) => {
    const packet = createPacketS2G(
      config.clientPacket.dedicated.BlockInteractionNotification,
      user.clientKey,
      payload,
    );

    game.socket.write(packet);
  });
};

export const remainingTimeNotification = (game) => {
  const payload = {
    remainingTime: game.remainingTime,
  };

  game.users.forEach((user) => {
    const packet = createPacketS2G(
      config.clientPacket.dedicated.RemainingTimeNotification,
      user.clientKey,
      payload,
    );

    game.socket.write(packet);
  });
};

export const stageEndNotification = async (game) => {
  const startPosition = {
    x: -13.17,
    y: 1,
    z: 22.5,
  };

  const payload = {
    remainingDay: game.day,
    startPosition,
    soulCredit: game.soulCredit,
  };

  game.users.forEach((user) => {
    const packet = createPacketS2G(
      config.clientPacket.dedicated.StageEndNotification,
      user.clientKey,
      payload,
    );
    game.socket.write(packet);
  });
};

export const submissionEndNotification = (game, result) => {
  const payload = {
    result,
    day: game.submissionDay,
    submissionValue: game.goalSoulCredit,
  };
  game.users.forEach((user) => {
    const packet = createPacketS2G(
      config.clientPacket.dedicated.SubmissionEndNotification,
      user.clientKey,
      payload,
    );

    game.socket.write(packet);
  });
};

export const selectDifficultyNotification = (game, difficultyId) => {
  const payload = {
    difficultyId,
  };
  game.users.forEach((user) => {
    const packet = createPacketS2G(
      config.clientPacket.dedicated.DifficultySelectNotification,
      user.clientKey,
      payload,
    );

    game.socket.write(packet);
  });
};
