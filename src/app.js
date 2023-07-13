import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import googleStrategy from './middleware/googleAuth';
import root from './routes/root';
import auth from './routes/auth';
import passport from 'passport';

const app = express()

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: config.clientOrigins[config.nodeEnv]
}))
app.use(helmet())
app.use(morgan('tiny'))

// Google auth
passport.use(googleStrategy)

// Apply routes before error handling
app.use('/', root)
app.use('/auth', auth)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

export default app