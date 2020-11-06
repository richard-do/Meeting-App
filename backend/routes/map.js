const router = require('express').Router();
let Map = require('../models/map.model');

// get all User entries
router.route('/').get((req, res) => {
    Map.find()
        .then(maps => res.json(maps))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;