if (process.env.NODE_ENV !== 'production') {
  import('dotenv/config');
}
import app from './server';

import('./db/database');
// Server is listenning
const init = async () => {
  try {
    await app.listen(app.get('port'), () => {
      console.info(
        '##############################\n\tOk, Server on port',
        app.get('port'),
        ':)\n##############################\n'
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

init();