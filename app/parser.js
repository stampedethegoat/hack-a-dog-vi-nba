require('dotenv').config()
const datadog = require("dogapi");
const fs      = require('fs');

datadog.initialize({
  api_key : process.env.API_KEY,
  app_key : process.env.APP_KEY,
});

fs.readFile('../data/all-teams.json', (err, data) => {
  if (err) throw err;
  let parsedTeams = JSON.parse(data);
  parsedTeams.forEach((item, index) => {
    if (index === 1) console.log(`item`, item);
    let team = item['team']['team_id'];
    datadog.metric.send(`nba.total_wins`         , item['won']                , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_lost`         , item['lost']               , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_games_played` , item['games_played']       , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_points`       , item['stats']['points']    , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_assists`      , item['stats']['assists']   , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_rebounds`     , item['stats']['rebounds']  , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_blocks`       , item['stats']['blocks']    , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_steals`       , item['stats']['steals']    , {tags: [`team:${team}`]});
    datadog.metric.send(`nba.total_turnovers`    , item['stats']['turnovers'] , {tags: [`team:${team}`]});
  });
});

