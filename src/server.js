
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();


// Setting
app.set('port', process.env.PORT || 4000);

// load routes
import auth from './api/routes/auth.routes';
import userMedical from './api/routes/userMedical.routes';
import userPatient from './api/routes/userPatient.routes';
import qoute from './api/routes/quote.routes';

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

// Route
app.use('/api', auth);
app.use('/api', userMedical);
app.use('/api', userPatient);
app.use('/api', qoute);
export default app;