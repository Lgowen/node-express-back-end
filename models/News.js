const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  pubDate: {
    type: Date,
    required: true,
    default: Date.now, // 默认值，可以是一个值，也可以一个函数(函数的返回值作为默认值)
  },
  channel: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("News", newsSchema);
