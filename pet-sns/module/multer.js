const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const projectNameInfo = require("../config/s3bucket.json");

// console.log(__dirname + "/../config/s3Info.json");
aws.config.loadFromPath(__dirname + "/../config/s3Info.json");

const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket : projectNameInfo.bucketName,
    acl: "public-read-write",
    key: (req, file, callback) => {
      callback(null, Date.now()+ "." + file.originalname.split(".").pop())
    }
  }),
});

module.exports = upload;