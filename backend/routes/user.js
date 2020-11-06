const router = require('express').Router();
let User = require('../models/user.model');

// get all User entries
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add a User entry
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    //const description = req.body.description;
    //const number = Number(req.body.number);
    const date = Date.parse(req.body.date); 

    const newUser = new User({
        username,
    //    description,
    //    number,
        date,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get User by Id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete User by Id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update User by Id
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.date = Date.parse(req.body.date);

            user.save()
            .then(()=>res.json('User updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;