// 获取登录的用户信息的中间件
const services = require("../services");
module.exports = async function (req, res, next) {
  // 如果能通过cookie得到用户，将用户保存到 req.user 中
  // 否则，req.user 保存null
  const userid = req.signedCookies.token;
  if (!userid) {
    // 没有登录过，或登录已过期
    req.user = null;
  } else {
    // 登录过了
    const user = await services.userService.getUser(userid);
    req.user = user;
  }
  next();
};
