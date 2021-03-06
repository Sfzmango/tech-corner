// dependencies
const router = require('express').Router();
const { User } = require('../../models');

// create new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        // searches db for the username
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        // if username is not found, return incorrect input
        if (!dbUserData) {
            res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
            return;
        }

        // checks if password is equal to hashed password in db
        const passwordCheck = await dbUserData.checkPassword(req.body.password);
        if (!passwordCheck) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        // sets session as user logged in
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;