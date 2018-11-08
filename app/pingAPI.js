require('dotenv').config()
const axios   = require('axios');
const fs      = require('fs');

axios.defaults.headers.common = {'Authorization': "bearer " + process.env.ERIKSBERG_API_KEY}

let getTeamData = () => {
  axios.get('https://erikberg.com/nba/team-stats.json')
    .then((response) => {
    fs.writeFile('../data/all-teams.json', JSON.stringify(response.data.team_stats, null, 2), function(err, data){
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
  }).catch((error) => {
      console.log(error)
  });
}

module.exports = { getTeamData };
