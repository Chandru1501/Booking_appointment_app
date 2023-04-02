const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('./utils/database');
const User = require('./model/user');
var cors = require('cors');

const adminRoutes = require('./routes/admin');

app.use(cors());

app.use(bodyparser.json({ extended: false }));

app.use('/admin',adminRoutes);

User.sync()
.then((result)=>{
  //console.log(result);
  app.listen(1000);
})
.catch(err => console.log(err));
