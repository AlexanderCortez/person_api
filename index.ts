import env from 'config/env';
import server from 'server';

server.listen(env.port, () => {
  console.info(`Listening on port ${env.port}`);
});