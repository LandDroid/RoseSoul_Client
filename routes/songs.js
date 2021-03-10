const { index, show, create, update, delete: _delete } = require('../controllers/SongsController');

module.exports = router => {

  router.get('/songs', index);
  router.get('/songs/:id', show);
  router.post('/songs', create);
  router.post('/songs/update', update);
  router.post('/songs/delete', _delete);
};