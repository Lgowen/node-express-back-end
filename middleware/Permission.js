// 权限验证中间件
const needLogin = ["/personal.html", "/news.html"];
module.exports = function (req, res, next) {
  if (req.user) {
    // 有权限
    next();
  } else {
    if (needLogin.includes(req.path)) {
      res.redirect("/login.html");
    } else {
      next();
    }
  }
};
