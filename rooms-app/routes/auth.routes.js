const User = require('../models/User.model');
const mongoose = require('mongoose');

const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

router.get('/signup', (req, res, next) => {
	res.render('auth/signup');
});

router.post('/signup', async (req, res, next) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		if (!firstName || !lastName || !email || !password) {
			res.render('auth/signup', {
				errorMessage:
					'All fields are mandatory. Please provide your username, email and password.',
			});
			return;
		}

		let salt = await bcryptjs.genSalt(saltRounds);
		let passwordHash = await bcryptjs.hash(password, salt);
		let newUser = await User.create({ firstName, lastName, email, password: passwordHash });
		console.log('New User:', newUser);
		res.redirect('/');
	} catch (error) {
		console.log('Error in POST SIGNUP route');
		next(error);
	}
});

module.exports = router;
