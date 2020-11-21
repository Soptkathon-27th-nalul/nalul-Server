const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
    dest : 'upload/'
})

// upload.single('image') 는 미들웨어다.
router.post('/', upload.single('image'), async (req, res) => {
    const {
        classId : classId,
        questionId : questionId,
        contents : contents
    } = req.body;
    console.log(req.file);
    console.log(req.body);
    res.send({
      imageUrl: image,
      file: req.file,
      body: req.body
    });
});
 
module.exports = router;