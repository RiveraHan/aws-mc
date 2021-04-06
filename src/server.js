
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();


// Setting
app.set('port', process.env.PORT || 4000);

// load routes
import usuario from './api/routes/userMedical.routes';

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

// Route
app.use('/api', usuario);
// app.use(require('./routes/login.routes'));
// app.use(require('./routes/rop.routes'));

export default app;