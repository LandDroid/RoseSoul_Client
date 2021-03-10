const Video = require('../models/video');
const User = require('../models/user');

const getUser = async req => {
  const { user: email } = req.session.passport;
  return await User.findOne({email: email});
}

exports.index = async (req, res) => {
  try {
   
    const videos = await Video
    .find()
    .populate()
      .sort({updatedAt: 'desc'});
    
    res.status(200).json(videos);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in retrieving the videos.`, error});
  }
};

exports.show = async (req, res) => {
  try {
    const user = await getUser(req);

    const video = await Video
      .findOne({user: user._id, _id: req.params.id})
      .populate('user');
      
    if (!video) throw new Error('Video could not be found');
    
    res.status(200).json(video);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in retrieving the video.`, error});
  }
};

exports.create = async (req, res) => {
  try {
    const user = await getUser(req);

    const video = await Video.create({user: user._id, ...req.body});

    res.status(200).json(video);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in creating the video.`, error});
  }
};

exports.update = async (req, res) => {
  try {
    const user = await getUser(req);
    let video = await Video
      .findOne({user: user._id, _id: req.body.id});
    
    if (!video) throw new Error('Video could not be found');
    
    const attributes = {user: user._id, ...req.body};
    await Video.validate(attributes);   

    await Video.updateOne({_id: req.body.id, user: user._id}, {...req.body});

    res.status(200).json(video);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in updating the video.`, error});
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await getUser(req);
    let video = await Video
      .findOne({user: user._id, _id: req.body.id});
      if (!video) throw new Error('Video could not be found');

    await Video.deleteOne({_id: req.body.id, user: user._id});

    res.status(200).json({message: 'Video was deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in deleting the video.`, error});
  }
};