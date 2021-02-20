// 定义用户的模型

const mongoose = require("mongoose");

// 定义一个结构
const userSchema = new mongoose.Schema({
  loginId: {
    type: String,
    required: true, // 必填
    unique: true, // 属性值唯一
    trim: true, // 写入数据时，会自动的去掉首尾空格
    minlength: 3, // 约束：字符串最小长度为3
    maxlength: 18, // 约束：字符串的最大长度为18
  },
  loginPwd: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 18,
    select: false, // 后续对用户进行查询的时候，默认情况下，不要查询密码
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 10,
  },
  age: {
    type: Number,
    required: true,
    min: 1, // 年龄的最小值为1
    max: 100, // 年龄的最大值为100
  },
  role: {
    type: String,
    required: true,
    trim: true,
    enum: ["管理员", "普通用户", "VIP"], // 用户角色是一个字符串，该字符串的取值必须是"管理员", "普通用户", "VIP"中的一个
  },
});

module.exports = mongoose.model("User", userSchema);
