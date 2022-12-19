"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _Sort = require("./utillies/Sort");
var app = (0, _express["default"])();
var hostname = "localhost";
var port = 8989;
app.get('/', function (req, res) {
  res.end('<h1>Create to SERVER SUCCESS sssssss2s</h1>');
});
app.listen(port, hostname, function () {
  console.log("hello nguyen kien dev ".concat(hostname));
}, 8989);