const express = require("express"); // 导入express
const cookieParser = require("cookie-parser");
const app = express(); // 创建一个web服务器
const path = require("path");

const secret = "duyi"
app.use(cookieParser(secret))
app.use(require("./middleware/LoginUser"))
app.use(require("./middleware/Permission"))

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

// 搭建一个静态资源服务器
app.use(express.static(path.resolve(__dirname, "public")));

// Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// Content-Type: application/json
app.use(express.json());

// 路由中间件
app.use("/api/user", require("./routes/user"));
app.use("/api/news", require("./routes/news"));

app.listen(9527, function () {
  // 监听端口
  console.log("server listening on 9527");
});
