"use strict";

var _PostController = require("./controllers/PostController");

var _PostController2 = _interopRequireDefault(_PostController);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var Post = new _PostController2.default();
var PORT = process.env.PORT || 4000;
_mongoose2.default.connect('mongodb://localhost/blog');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

app.listen(PORT, function () {
  return console.log("Listening on port " + PORT);
});