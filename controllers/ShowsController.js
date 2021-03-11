const Show = require("../models/show");
const User = require("../models/user");

const getUser = async (req) => {
  const { user: email } = req.session.passport;
  return await User.findOne({ email: email });
};

exports.index = async (req, res) => {
  try {
    const shows = await Show.find().populate().sort({ updatedAt: "desc" });

    res.status(200).json(shows);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in retrieving the shows.`,
      error,
    });
  }
};

exports.show = async (req, res) => {
  try {
    const user = await getUser(req);

    const show = await Show.findOne({
      user: user._id,
      _id: req.params.id,
    }).populate("user");

    if (!show) throw new Error("Show could not be found");

    res.status(200).json(show);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in retrieving the show.`,
      error,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await getUser(req);

    const show = await Show.create({ user: user._id, ...req.body });

    res.status(200).json(show);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in creating the show.`,
      error,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await getUser(req);
    let show = await Show.findOne({ user: user._id, _id: req.body.id });

    if (!show) throw new Error("Show could not be found");

    const attributes = { user: user._id, ...req.body };
    await Show.validate(attributes);

    await Show.updateOne({ _id: req.body.id, user: user._id }, { ...req.body });

    res.status(200).json(show);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in updating the show.`,
      error,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await getUser(req);
    let show = await Show.findOne({ user: user._id, _id: req.body.id });
    if (!show) throw new Error("Show could not be found");

    await Show.deleteOne({ _id: req.body.id, user: user._id });

    res.status(200).json({ message: "Show was deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failed",
      message: `There was an error in deleting the show.`,
      error,
    });
  }
};
