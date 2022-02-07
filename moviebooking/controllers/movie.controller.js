var Artist = require('../models/movie');

exports.movieid = function(req, res) {
    res.send('NOT IMPLEMENTED: movie id');
};

exports.title = function(req, res) {
    res.send('NOT IMPLEMENTED:  title');
};

exports.published = function(req, res) {
    res.send('NOT IMPLEMENTED:  published');
};

exports.released = function(req, res) {
    res.send('NOT IMPLEMENTED:  released');
};

exports.profile_url = function(req, res) {
    res.send('NOT IMPLEMENTED:  profile_url');
};

exports.release_date = function(req, res) {
    res.send('NOT IMPLEMENTED:  release_date');
};

exports.publish_date = function(req, res) {
    res.send('NOT IMPLEMENTED:  publish_date');
};

exports.trailer_url = function(req, res) {
    res.send('NOT IMPLEMENTED:  trailer_url');
};

exports.wiki_url = function(req, res) {
    res.send('NOT IMPLEMENTED:  wiki_url');
};

import express from 'express'
            const router=express.Router()
            import { findAllMovies, findOne, findShows } from '../../controllers/movies.js'

            router.get('/search',findShows)
            router.get('/all',findAllMovies)
            router.get('/:id',findOne)

            export default router