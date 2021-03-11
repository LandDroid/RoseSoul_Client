const Song = require("../models/song");
const User = require("../models/user");

const getUser = async (req) => {
  const { user: email } = req.session.passport;
  return await User.findOne({ email: email });
};

exports.index = async (req, res) => {
  try {
    const songs = await Song.find().populate().sort({ updatedAt: "desc" });

    res.status(200).json(songs);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in retrieving the songs.`,
      error,
    });
  }
};

exports.show = async (req, res) => {
  try {
    const user = await getUser(req);

    const song = await Song.findOne({
      user: user._id,
      _id: req.params.id,
    }).populate("user");

    if (!song) throw new Error("Song could not be found");

    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in retrieving the song.`,
      error,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await getUser(req);

    const song = await Song.create({ user: user._id, ...req.body });

    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in creating the song.`,
      error,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await getUser(req);
    let song = await Song.findOne({ user: user._id, _id: req.body.id });

    if (!song) throw new Error("Song could not be found");

    const attributes = { user: user._id, ...req.body };
    await Song.validate(attributes);

    await Song.updateOne({ _id: req.body.id, user: user._id }, { ...req.body });

    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in updating the song.`,
      error,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await getUser(req);
    let song = await Song.findOne({ user: user._id, _id: req.body.id });
    if (!song) throw new Error("Song could not be found");

    await Song.deleteOne({ _id: req.body.id, user: user._id });

    res.status(200).json({ message: "Song was deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in deleting the song.`,
      error,
    });
  }
};
