var express = require("express");
var eventRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

eventRouter.route('/')
    .get(function(req, res) {
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db) {
            if (err) {
                res.send('mongodb.connect failed... Shoot SFM!');
            }
            var collection = db.collection('events');
            collection.find({}).toArray(function(err, results) {
                if (err) {
                    res.send('collection.find failed... Shoot SFM!');
                }
                res.render('events', {
                    list: ['first val', 'second val', 'third val'],
                    nav: [{
                        Link: 'Services',
                        Text: 'Services'
                    }, {
                        Link: 'Portfolio',
                        Text: 'Portfolio'
                    }, {
                        Link: 'About',
                        Text: 'About'
                    }, {
                        Link: 'Team',
                        Text: 'Team'
                    }, {
                        Link: 'Contact',
                        Text: 'Contact'
                    }, {
                        Link: 'Events',
                        Text: 'Events'
                    }],
                    events: results
                });
                db.close();
            });
        });
    });

eventRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db) {
            if (err) {
                res.send('mongodb.connect failed... Shoot SFM!');
            }
            var collection = db.collection('events');
            collection.find({}).toArray(function(err, results) {
                if (err) {
                    res.send('collection.find failed... Shoot SFM!');
                }
                res.render('events', {
                    list: ['first val', 'second val', 'third val'],
                    nav: [{
                        Link: 'Services',
                        Text: 'Services'
                    }, {
                        Link: 'Portfolio',
                        Text: 'Portfolio'
                    }, {
                        Link: 'About',
                        Text: 'About'
                    }, {
                        Link: 'Team',
                        Text: 'Team'
                    }, {
                        Link: 'Contact',
                        Text: 'Contact'
                    }, {
                        Link: 'Events',
                        Text: 'Events'
                    }],
                    events: results[id]
                });
                db.close();
            });
        });
    });

module.exports = eventRouter;
