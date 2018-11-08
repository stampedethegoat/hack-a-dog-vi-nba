require('dotenv').config()
const axios   = require('axios');
const express = require('express');

axios.defaults.headers.common = {'Authorization': "bearer " + process.env.ERIKSBERG_API_KEY}

axios.get(
  'https://erikberg.com/nba/boxscore/20120621-oklahoma-city-thunder-at-miami-heat.json'
).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
});
