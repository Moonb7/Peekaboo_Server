import { sendInfo } from '../../notifications/connection.notification.js';
import { serviceMap } from '../../source/connection.source.js';
/**
 * 연결된 서비스를 serviceMap에 등록하는 함수입니다.
 */
export const connectServiceHandler = async (socket, payload) => {
  const { host, port, name } = payload;
  const key = host + ':' + port;

  try {
    if (name === 'dedicated') {
      serviceMap.dedicates[key] = {
        socket: socket,
        info: payload,
      };
    } else {
      serviceMap.microservices[key] = {
        socket: socket,
        info: payload,
      };
    }
  } catch (err) {
    console.error('Error registering service:', err);
    socket.end();
  }
  sendInfo();
};
