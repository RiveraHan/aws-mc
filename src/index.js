
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const app = require('./server');

require('../src/db/database');

// Server is listenning
app.listen(app.get('port'), () => {
    console.info('##############################\n\tOk, Server on port', app.get('port'), ':)\n##############################\n');

});