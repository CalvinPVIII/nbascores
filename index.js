const axios = require("axios");
const cheerio = require("cheerio");

const getData = (link) => {
  try {
    axios.get(link).then((response) => {
      const $ = cheerio.load(response.data);
      const data = $("#__NEXT_DATA__").html();
      const boxScore = JSON.parse(data).props.pageProps.game;
      let blazers;
      if (boxScore.homeTeam.teamName === "Trail Blazers") {
        blazers = boxScore.homeTeam;
      } else {
        blazers = boxScore.awayTeam;
      }

      return blazers.players;
    });
  } catch {
    console.log("error");
  }
};

getData("https://www.nba.com/game/por-vs-gsw-0012200051/box-score");
