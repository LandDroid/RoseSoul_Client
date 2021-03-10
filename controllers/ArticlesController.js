const Article = require('../models/article');
const User = require('../models/user');

const getUser = async req => {
  const { user: email } = req.session.passport;
  return await User.findOne({email: email});
}

exports.index = async (req, res) => {
  try {

    const articles = await Article
    .find()
    .populate()
      .sort({updatedAt: 'desc'});
    
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in retrieving the articles.`, error});
  }
};

exports.show = async (req, res) => {
  try {
    const user = await getUser(req);

    const article = await Article
      .findOne({user: user._id, _id: req.params.id})
      .populate('user');
      
    if (!article) throw new Error('Article could not be found');
    
    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in retrieving the article.`, error});
  }
};

exports.create = async (req, res) => {
  try {
    const user = await getUser(req);

    const article = await Article.create({user: user._id, ...req.body});

    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in creating the article.`, error});
  }
};

exports.update = async (req, res) => {
  try {
    const user = await getUser(req);
    let article = await Article
      .findOne({user: user._id, _id: req.body.id});
    
    if (!article) throw new Error('Article could not be found');
    
    const attributes = {user: user._id, ...req.body};
    await Article.validate(attributes);   

    await Article.updateOne({_id: req.body.id, user: user._id}, {...req.body});

    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in updating the article.`, error});
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await getUser(req);
    let article = await Article
      .findOne({user: user._id, _id: req.body.id});
      if (!article) throw new Error('Article could not be found');

    await Article.deleteOne({_id: req.body.id, user: user._id});

    res.status(200).json({message: 'Article was deleted successfully'});
  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'failed', message: `There was an error in deleting the article.`, error});
  }
};