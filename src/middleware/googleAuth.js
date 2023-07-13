import Strategy from 'passport-google-oauth2';
import { getUserByGoogleId, createUserByGoogle } from '../queries/auth.js';

const googleStrategy = new Strategy({
  clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
  callbackURL: `${process.env.GOOGLE_AUTH_HOST}/auth/google/callback`,
  passReqToCallback: true
},
  async (request, accessToken, refreshToken, profile, done) => {
    try {
      let existingUser = await getUserByGoogleId(profile.id);

      if (existingUser) {
        console.log('Found user', existingUser);
        return done(null, existingUser);
      }

      console.log('Creating new user...');

      const newUser = await createUserByGoogle({
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
      });

      return done(null, newUser);
    } catch (error) {
      return done(error, false)
    }
  });

export default googleStrategy
