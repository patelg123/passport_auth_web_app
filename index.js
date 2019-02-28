const express = require('express');
const app = express();
const passport = require('passport');


app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.sendFile('auth.html', { root : __dirname}));
app.get('/success', (req, res) => res.send("You have successfully logged in"));
app.get('/error', (req, res) => res.send("error logging in"));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));
