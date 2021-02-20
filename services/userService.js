const User = require("../models").User;

// 注册一个用户
// userObj：用户对象
// 返回：新注册的用户对象
exports.reg = async function (userObj) {
  const result = await User.create(userObj);
  return result;
};

// 登录
// loginId: 账号
// loginPwd: 密码
// 返回：登录成功返回用户对象，登录失败返回null
exports.login = async function (loginId, loginPwd) {
  const result = await User.find({
    loginId: loginId,
    loginPwd: loginPwd,
  });
  if (result.length === 0) {
    return null;
  }
  return result[0];
};

// 查找用户
// id: 用户的唯一编号
// 返回：用户对象，用户不存在返回null
exports.getUser = async function (id) {
  const u = await User.findById(id);
  return u;
};
