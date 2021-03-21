
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


// Setting
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
// app.use(require('./routes/usuario.routes'));
// app.use(require('./routes/login.routes'));
// app.use(require('./routes/rop.routes'));

module.exports = app;