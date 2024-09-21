const playlistmp3 = {
    index: (req, res) => {
        res.render('home');
    },
    song: (req, res) => {
        res.render('song');
    },
    favorites: (req, res) => {
        res.render('favorites');
    },
    playlist: (req, res) => {
        res.render('playlist');
    },
    artist: (req, res) => {
        res.render('artist');
    }
};

module.exports = playlistmp3;