const { index, show, create, update, delete: _delete } = require('../controllers/ShowsController');

module.exports = router => {

  router.get('/shows', index);
  router.get('/shows/:id', show);
  router.post('/shows', create);
  router.post('/shows/update', update);
  router.post('/shows/delete', _delete);
};