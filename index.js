const express = require("express");
const app = express();
const port = 5000;
const { User } = require("./.vscode/models/User");
const bodyParser = require("body-parser");
const config = require("./config/key");

//application/x-www-form-urlencode 형태의 데이터 받고 분석
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 형태의 데이터 받고 분석
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongo DB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World! 난 이광민, gㅇㅁㄴk"));

app.post("/register", (req, res) => {
  //회원가입용 필요 정보를 client에서 가져오면
  //데이터베이스에 넣어주기

  const user = new User(req.body);

  //json형태의 유저정보를 받아 에러 판별
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      succenss: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
