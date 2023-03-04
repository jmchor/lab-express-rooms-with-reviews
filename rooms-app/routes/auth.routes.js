const User = require('../models/User.model');
const mongoose = require('mongoose');

const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

module.exports = router;
