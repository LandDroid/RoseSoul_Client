const router = require('express').Router();

// Our resource routes
(require('./routes/users'))(router);
(require('./routes/sessions'))(router);
(require('./routes/shows'))(router);
(require('./routes/articles'))(router);
(require('./routes/videos'))(router);
(require('./routes/songs'))(router);

module.exports = router;