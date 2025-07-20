const express = require('express');
const router = express.Router();
const postController = require ('../controllers/post.controller');

router.get('/', postController.getAllPost); //enpoint =  http://localhost:3000/post

router.get('/:id', postController.getPostById); //enpoint =  http://localhost:3000/post/:id = http://localhost:3000/post/1

router.post('/', postController.createPost); //enpoint =  http://localhost:3000/post/

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;

