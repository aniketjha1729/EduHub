const Notice = require("../../models/notice/noticeModel");
const User = require("../../models/user/userModel");
const AdminUser = require("../../models/admin/adminUserModel");
const Post = require("../../models/post/postModel");
const path = require("path");


/*<===============================================================================================>*/

exports.currentProfile = async (req, res) => {
  try {
    let user = await AdminUser.findById(req.user.id).select("-password");
    if (!user) {
      return res.json({ errors: [{ msg: "Invalid token" }] });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

exports.verifyUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.userId });
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "No user found" }] });
    }
    const { verify } = req.body;
    user.isVerified = verify;
    await user.save().then((updateduser) => {
      return res.status(200).json(updateduser);
    });
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "No user found" }] });
    }
    await user.remove().then(() => {
      Post.find({ postedBy: req.params.userId })
        .then((post) => {
          post.map((post) => post.remove());
        })
        .then(() => {
          return res.status(200).json({ message: "Success" });
        });
    });
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

(exports.createNotice = async (req, res) => {
  try {
    const { content, heading } = req.body;
    const { path, mimetype } = req.file;
    const notice = new Notice({
      postedBy: "admin",
      isVerified: true,
      content,
      heading,
      file_path: path,
      file_mimetype: mimetype,
    });
    await notice.save();
    res.send("file uploaded successfully.");
  } catch (error) {
    res.status(400).send("Error while uploading file. Try again later.");
  }
}),
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  };

exports.verifyNotice = async (req, res) => {
  try {
    const notice = await Notice.findById({ _id: req.params.noticeId });
    if (!notice) {
      return res.status(404).json({ errors: [{ msg: "No notice found" }] });
    }
    const { verify } = req.body;
    notice.isVerified = verify;
    await notice.save().then((updatedNotice) => {
      return res.status(200).json(updatedNotice);
    });
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findOne({ _id: req.params.noticeId });
    if (!notice) {
      return res.status(404).json({ errors: [{ msg: "No notice found" }] });
    }
    await notice
      .remove()
      .then(() => res.status(200).json({ message: "Success" }));
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

exports.getAllNotices = async (req, res) => {
  try {
    const files = await Notice.find({});
    res.send(files);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
};

exports.downloadNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.noticeId);
    res.set({
      "Content-Type": notice.file_mimetype,
    });
    res.sendFile(path.join(__dirname, "../../", notice.file_path));
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
};
