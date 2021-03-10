const { index, show, create, update, delete: _delete } = require('../controllers/VideosController');

module.exports = router => {

  router.get('/videos', index);
  router.get('/videos/:id', show);
  router.post('/videos', create);
  router.post('/videos/update', update);
  router.post('/videos/delete', _delete);
};