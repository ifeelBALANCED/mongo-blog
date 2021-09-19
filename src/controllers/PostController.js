import PostModel from "../models/Post";

export default class PostController {
    index(req, res) {
        PostModel.find().then((err, posts) => {
            if (err) res.send(err)
            res.json(posts)
        })
    }

    create(req, res) {
        const { title, text } = req.params;

        const post = new PostModel({
            title,
            text,
        })

        post.save().then(() => {
            res.send({ status: "ok" })
        })
    }

    read(req, res) {
        PostModel.findOne({ _id: req.params.id }).then(post => {
            if (!post) res.send({ err: 'not found' })
            res.json(post)
        })
    }

    update(req, res) {
        PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
            if (err) res.send(err)
            res.json({ status: 'updated' })
        })
    }

    delete(req, res) {
        PostModel.remove({
            _id: req.params.id,
        }).then(post => {
            res.json({ status: post ? 'deleted' : 'error' })
        })
    }
}
