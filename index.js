const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const path = require('path')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const auth = require("./routes/auth-routes");

require("./models/User.js");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["somesecretsauce"]
  })
);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://vishal:qwerty12@merncluster-vfsb5.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://vishal:qwerty12@merncluster-vfsb5.mongodb.net/test?retryWrites=true&w=majority");



// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./config/passport");


require("./routes/auth-routes.js")(app);


// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${port}`));

