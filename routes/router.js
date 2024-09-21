const express = require('express');

const router = express.Router();
const playlistmp3 = require("../controller/playlistmp3");

router.get('/', playlistmp3.index);
router.get('/song', playlistmp3.song);
router.get('/favorites', playlistmp3.favorites);
router.get('/playlist', playlistmp3.playlist);
router.get('/artist', playlistmp3.artist);

module.exports = router;