"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostSchema = new _mongoose.Schema({
    title: String,
    text: String
}, {
    timestamps: true
});

var Post = _mongoose2.default.model('Post', PostSchema);
exports.default = Post;