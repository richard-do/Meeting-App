const router = require('express').Router();
let Marker = require('../models/marker.model');

// get all Marker entries
router.route('/').get((req, res) => {
    Marker.find()
        .then(markers => res.json(markers))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add a Marker entry
router.route('/add').post((req, res) =>{
    const description = req.body.description;
    const event = req.body.event;
    const date = Date.parse(req.body.date); 
    const time = req.body.time;
    const address = req.body.address;

    const newMarker = new Marker({
        address,
        date,
        event,
        description,
        time
    });

    newMarker.save()
        .then(() => res.json('Marker added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Marker by Id
router.route('/:id').get((req, res) => {
    Marker.findById(req.params.id)
        .then(marker => res.json(marker))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Marker by Id
router.route('/:id').delete((req, res) => {
    Marker.findByIdAndDelete(req.params.id)
        .then(marker => res.json('Marker deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update Marker by Id
router.route('/update/:id').post((req, res) => {
    Marker.findById(req.params.id)
        .then(marker => {
            marker.address = req.body.address;
            marker.date = Date.parse(req.body.date);
            marker.event = req.body.event;
            marker.time = req.body.time;
            marker.description = req.body.description;

            marker.save()
            .then(()=>res.json('Marker updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;