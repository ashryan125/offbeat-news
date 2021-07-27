const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'aleksandrovsk',
    email: 'shanel.balistreri@rempel.com',
    password: 'password123'
  },
  {
    username: 'yong',
    email: 'johns.frankie@murazik.com',
    password: 'password1234'
  },
  {
    username: 'pinwork',
    email: 'valentin.satterfield@gmail.com',
    password: 'password'
  },
  {
    username: 'lowboy',
    email: 'darlene69@howe.com',
    password: 'password12345'
  },
  {
    username: 'crauxrd',
    email: 'weichmann@mclaughlin.com',
    password: 'password55'
  },
  {
    username: 'sherrylsherurd',
    email: 'makenna15@gmail.com',
    password: 'password1111'
  },
  {
    username: 'vamyar',
    email: 'elissa28@simonis.info',
    password: 'passworddude'
  }

];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
