const express = require("express");
const router = express.Router();
const upload = require("../../module/multer");
const postCtr = require("../../controller/postCtr");
const checkUser = require("../../module/checkUser");

router.get("/upload", checkUser, (req, res) => {
  res.render("upload");
});

router.get("/:id", postCtr.detail);

router.get("/update/:id", checkUser, postCtr.updateLayout);

router.post("/", checkUser, upload.single("image"), postCtr.upload);

// put 아닌 post인 이유.. ejs 에서 form 형태로 데이터를 전송함
router.post("/update/:id", checkUser, postCtr.update);

router.post("/delete/:id", checkUser, postCtr.delete)

router.post("/like/:id", checkUser, postCtr.liked)

router.post("/comment/:id", checkUser, postCtr.comment)

module.exports = router;