const router = require('express').Router();
let Test = require('../models/test.model');

// get all Test entries
router.route('/').get((req, res) => {
    Test.find()
        .then(tests => res.json(tests))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add a Test entry
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const description = req.body.description;
    const number = Number(req.body.number);
    const date = Date.parse(req.body.date); 

    const newTest = new Test({
        username,
        description,
        number,
        date,
    });

    newTest.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;