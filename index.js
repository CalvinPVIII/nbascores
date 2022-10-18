const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getData = (link) => {
  try {
    JSDOM.fromURL(link).then((dom) => {
      const boxScore = JSON.parse(
        dom.window.document.querySelector("#__NEXT_DATA__").innerHTML
      ).props.pageProps.game;
      let blazers;
      if (boxScore.homeTeam.teamName === "Trail Blazers") {
        blazers = boxScore.homeTeam;
      } else {
        blazers = boxScore.awayTeam;
      }
      const players = blazers.players;
      console.log(players);
    });
  } catch {
    console.log("error");
  }
};

getData("https://www.nba.com/game/mra-vs-por-0012200027/box-score#box-score");
