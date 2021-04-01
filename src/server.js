
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();


// Setting
app.set('port', process.env.PORT || 4000);

// load routes
// import usuario from './api/routes/usuario.routes';

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

// Route
// app.use('/api'require('./routes/usuario.routes'));
// app.use(require('./routes/login.routes'));
// app.use(require('./routes/rop.routes'));

export default app;