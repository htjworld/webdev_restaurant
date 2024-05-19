const express = require('express')

const router = express.Router();
// app 대신 router로 넣음


router.get("/", function (req, res) {
    res.render("index"); //ejs를 뷰 엔진으로 사용하기 때문에 확장자 ejs를 생략해도 됨
    //   const htmlFilePath = path.join(__dirname, "views", "index.html");
    //   //__dirname으로 현재 스크립트의 절대 경로로 들어감
    //   res.sendFile(htmlFilePath);
  });

router.get("/about", function (req, res) {
res.render("about");
});

module.exports = router;