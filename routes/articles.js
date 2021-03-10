const { index, show, create, update, delete: _delete } = require('../controllers/ArticlesController');

module.exports = router => {

  router.get('/articles', index);
  router.get('/articles/:id', show);
  router.post('/articles', create);
  router.post('/articles/update', update);
  router.post('/articles/delete', _delete);
};