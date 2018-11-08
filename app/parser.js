require('dotenv').config()
const datadog = require("dogapi");
const fs      = require('fs');

datadog.initialize({
  api_key : process.env.API_KEY,
  app_key : process.env.APP_KEY,
});

fs.readFile('../data/all-teams.json', function (err, data) {
  if (err) throw err;
  let parsedTeams = JSON.parse(data);
  parsedTeams.forEach((item, index) => {
    if (item['team']['team_id'] === 'sacramento-kings'){
      datadog.metric.send("nba.kings.wins", item['won']);
      datadog.metric.send("nba.kings.lost", item['lost']);
      datadog.metric.send("nba.kings.games_played", item['games_played']);
      datadog.metric.send("nba.kings.points", item['stats']['points']);
      datadog.metric.send("nba.kings.assists", item['stats']['assists']);
      datadog.metric.send("nba.kings.rebounds", item['stats']['rebounds']);
      datadog.metric.send("nba.kings.blocks", item['stats']['blocks']);
      datadog.metric.send("nba.kings.steals", item['stats']['steals']);
      datadog.metric.send("nba.kings.turnovers", item['stats']['turnovers']);
    }
  });
});

