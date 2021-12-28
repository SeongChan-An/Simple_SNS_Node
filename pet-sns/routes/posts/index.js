const express = require("express");
const router = express.Router();
const upload = require("../../module/multer");
const postCtr = require("../../controller/postCtr");

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.get("/:id", postCtr.detail);

router.get("/update/:id", postCtr.updateLayout);

router.post("/", upload.single("image"), postCtr.upload);

// put 아닌 post인 이유.. ejs 에서 form 형태로 데이터를 전송함
router.post("/update/:id", postCtr.update);

router.post("/delete/:id", postCtr.delete)

module.exports = router;