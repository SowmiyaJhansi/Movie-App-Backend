var Artist = require('../models/artist');

exports.artistid = function(req, res) {
    res.send('NOT IMPLEMENTED: Artist id');
};

exports.first_name = function(req, res) {
    res.send('NOT IMPLEMENTED:  first_name');
};

exports.last_name = function(req, res) {
    res.send('NOT IMPLEMENTED:  last_name');
};

exports.wiki_url = function(req, res) {
    res.send('NOT IMPLEMENTED:  wiki_url');
};

exports.profile_url = function(req, res) {
    res.send('NOT IMPLEMENTED:  profile_url');
};

import express from 'express'
            const router=express.Router()
            import { findAllArtists } from '../../controllers/artist.js'

            router.get('/all',findAllArtists)

            export default router