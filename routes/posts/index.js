const express = require('express');
const router = express.Router();

const postController = require('../../controller/postController');

router.post('/', postController.createPost);

router.get('/',postController.readPosts);


module.exports = router;