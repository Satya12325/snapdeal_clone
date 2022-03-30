const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "512803252250-beprdg6clce6ekr0lv9e044glqn2k5o2.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:2345/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      // check if user exists
      // if not create one

      // callback with num and hte user object
      return done(null, "user");
    }
  )
);

module.exports = passport;
