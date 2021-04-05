'use strict';

const base64 = require('base-64');
const Users = require('../models/user.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next('invalid login') }

  const basic = req.headers.authorization.split(' ').pop();
  const [username, password] = base64.decode(basic).split(':');
  try {
    req.user = await Users.authenticateBasic(username, password)
    next();
  } catch (e) {
    res.status(403).send('Invalid Login'+e.message);
  }

}