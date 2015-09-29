var express = require('express');

module.exports = express.Router()
    .use(express.static(__dirname + '/../public', {
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
    }))
    .use('/healthcheck', function(req, res, next) {
        res.json({
            everything: 'is ok',
            time: new Date()
        });
    })
    /*
        .get('/config.js', function(req, res, next) {
            res.setHeader("Content-Type", "text/javascript; charset=utf-8");
            res.send({
                gameCdn: config.cdn.normal;
                gameBuildDate: config.buildDate;
            });
        })
    */
    .get('/member', function(req, res, next) {
        res.send({
            "isSuccess": true,
            "result": {
                "avatar": "//img.hcdlearning.com/FljmGyTPfltIym1q9ANyyH0LqNh7",
                "gender": "F",
                "mail": "robbin@59124.com",
                "mobile": "18061993746",
                "name": null,
                "real_name": "Hi",
                "nick_name": "Robbin.Zhu",
                "birthday": "1983-09-01T00:00:00.000Z"
            }
        });
    });