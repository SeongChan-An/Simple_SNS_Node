var express = require("express");
var router = express.Router();
const authRouter = require("./auth");
const postsRouter = require("./posts");

router.get("/", (req, res) => {
  res.render("index", { postList: [] });
})

router.use("/auth", authRouter);
router.use("/posts", postsRouter);

module.exports = router;
