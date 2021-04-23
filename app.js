const express = require('express');
const app = express();

// mid
const middleware = require('./middleware/index');

// routes
const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const sendRouter = require('./routes/send');
const profileRouter = require('./routes/profile');

middleware(app);

// Создаем локальные переменные для использования в nav
app.use((req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.email = req.session.user.email
    res.locals.name = req.session.user.name
  }
  next()
});

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/send', sendRouter);
app.use('/profile', profileRouter);

module.exports = app;
