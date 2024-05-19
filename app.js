const path = require("path");

const express = require("express");



// util에 있는 함수들을 사용할 수 있음
const defaultRoutes = require('./routes/default')
const restaurantRoutes = require('./routes/restaurants')

const exp = require("constants");
const { writeFileSync } = require("fs");

const app = express();

app.set("views", path.join(__dirname, "views")); // views 폴더
app.set("view engine", "ejs");
// view engine -> views 파일을 보는 엔진

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes); // get 대신 use
// app.use('/', defaultRoutes);

app.use('/', restaurantRoutes)





// 미들웨어로 standard error 페이지 생성
app.use(function (req, res) {
  res.status(404).render("404");
});

// 서버사이드 error
app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000); // 3000 포트 리슨
