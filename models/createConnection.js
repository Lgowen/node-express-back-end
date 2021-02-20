// 创建连接

const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true); // 新版本对索引的处理方式有所变化，无此代码会有警告
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true, // 新版本对连接字符串的解析有更好的支持，无此代码会有警告
  useUnifiedTopology: true, // 新版本对数据库的监事引擎有更好的支持，无此代码会有警告
});

mongoose.connection.on("open", function () {
  console.log("连接已打开");
});
