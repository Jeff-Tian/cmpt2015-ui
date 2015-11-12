module.exports = function(express) {
    return express.static(__dirname + '/public', {
        dotfiles: 'ignore',
        etag: true,
        extensions: false,
        index: 'index.html',
        lastModified: true,
        maxAge: 1000 * 3600 * 24 * 30,
        redirect: true,
        setHeaders: function(res, path) {
            res.setHeader('Access-Control-Allow-Origin', '*');
        }
    });
};