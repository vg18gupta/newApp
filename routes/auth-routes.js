const passport = require("passport");
const User = require("../models/User");

module.exports = (app) => {
    app.get("/auth/test", (req, res) => {
        res.send("Auth Working properly");
      });

    app.get('/auth/google', passport.authenticate('google', {
        scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    }))

    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
          res.redirect("/user");
        }
      );
    
      app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
      });
    
      app.get("/api/current_user", (req, res) => {
        res.send(req.user);
      });
    };