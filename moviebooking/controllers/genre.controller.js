var Artist = require('../models/genre');

exports.genreid = function(req, res) {
    res.send('NOT IMPLEMENTED: genre id');
};

exports.genre = function(req, res) {
    res.send('NOT IMPLEMENTED:  genre');
};

import express from 'express'
            const router=express.Router()
            import { findAllGenres } from '../../controllers/genre.js'

            router.get('/all',findAllGenres)

            export default router