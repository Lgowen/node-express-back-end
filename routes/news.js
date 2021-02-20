// 针对新闻的请求
const express = require("express");
const router = express.Router();
const services = require("../services");
router.get("/", async function (req, res) {
  const page = +req.query.page || 1; // 如果没有传递page，默认1
  const limit = +req.query.limit || 10; //如果没有传递limit，默认10
  const result = await services.newsService.getNews(page, limit, "");
  res.send(result);
});

module.exports = router;
