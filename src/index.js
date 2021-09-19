import PostController from "./controllers/PostController"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";

const app = express()
const Post = new PostController()
const PORT = process.env.PORT || 4000
mongoose.connect('mongodb://localhost/blog')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/posts', Post.index)
app.post('/posts', Post.create)
app.get('/posts/:id', Post.read)
app.delete('/posts/:id', Post.delete)
app.put('/posts/:id', Post.update)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
