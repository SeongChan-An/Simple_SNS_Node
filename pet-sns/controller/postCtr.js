const Post = require("../model/post");

const formatDate = (_date) => {
  let date = new Date(_date);
  let month = ("" + (date.getMonth() + 1)).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let year = date.getFullYear();

  return [year, month, day].join("-");  
}
const postCtr = {
  upload: async (req, res) => {
    const { title, content } = req.body;
    // console.log(req.file);
    const image = req.file.location;
    const publishedDate = formatDate(new Date());
    const post = new Post({
      title: title,
      content: content,
      image: image,
      publishedDate: publishedDate,
    });

    try {
      await post.save();
      res.redirect("/");
    } catch (error) {
      res.status(500).send("upload error!!");
    }
  },
  list : async (req, res) => {
    const posts = await Post.find({});
    res.render("index", { postList: posts });
  },
  // /posts/:id 형태로 값을 index.ejs에서 넘김 
  detail: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("detail", { post : post });
  },
  updateLayout: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("update", { post : post });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      await Post.findByIdAndUpdate(
        id,
        { title: title, content: content },
        { new : true }
      );
      res.redirect("/");
    } catch (error) {
      res.status(500).send("update error !");
    }    
  },
  delete : async (req, res) => {
    const { id } = req.params;
    try {
      await Post.findByIdAndDelete(id)
      res.redirect("/")
    } catch (error) {
      res.status(500).send("delete error")
    }
  }
};

module.exports = postCtr;