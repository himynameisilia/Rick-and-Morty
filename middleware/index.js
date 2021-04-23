const config = (app) => {

  const express = require("express");
  const morgan = require("morgan");

  const cookieParser = require("cookie-parser");
  const session = require("express-session");
  const FileStore = require("session-file-store")(session);
  const dbConnection = require("./db-connect");
  const path = require("path");
  const hbs = require("hbs");

  // Подключаем статику
  app.use(express.static(path.join(__dirname, '..', "public")));

  // Подключаем views(hbs)
  app.set("views", path.join(__dirname, "..", "views"));
  app.set("view engine", "hbs");

  // Регестрируем hbs nav и footer
  hbs.registerPartials(path.join(__dirname, "..", "/views/partials"));

  app.use(morgan("dev"));

  // Body POST запросов.
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(cookieParser());

  app.use(
    session({
      store: new FileStore(),
      key: "user_sid",
      secret: 'toxic',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 6000000,
      },
    })
  );
}

// export
module.exports = config
