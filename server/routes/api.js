const express = require("express");
const urllib = require("urllib");
const router = express.Router();

const dreamTeam = []
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756",
    "pistons": "1610612765",
    "bucks": "1610612749",
    "rockets": "1610612745",
    "hawks": "1610612737",
    "celtics": "1610612738",
    "nets": "1610612751",
    "hornets": "1610612766",
    "bulls": "1610612741",
    "cavaliers": "1610612739",
    "mavericks": "1610612742",
    "nuggets": "1610612743",
    "pacers": "1610612754",
    "clippers": "1610612746",
    "grizzlies": "1610612763",
    "timberwolves": "1610612750",
    "pelicans": "1610612740",
    "knicks": "1610612752",
    "thunder": "1610612760",
    "magic": "1610612753",
    "76ers": "1610612755",
    "trail blazers": "1610612757",
    "kings": "1610612758",
    "spurs": "1610612759",
    "raptors": "1610612761",
    "jazz": "1610612762",
    "wizards": "1610612764"
}


router.get("/teams/:teamName", (req, res) => {
    const players = [];
    const teamId = teamToIDs[req.params.teamName];
    urllib.request("http://data.nba.net/10s/prod/v1/2018/players.json", (error, response) => {
        const data = (JSON.parse(response.toString()))
        data.league.standard.forEach(player => {
            if (player.teamId === teamId) {
                if (player.isActive) {
                    players.push({ firstName: player.firstName, lastName: player.lastName, pos: player.pos, jersey: player.jersey });
                }
            }
        });
        res.send(players);
    });
});

router.get("/playerStats/:player", (req, res) => {
    const fullName = req.params.player.split(' ')
    const lastName = fullName.pop();
    const firstName = fullName.pop();
    urllib.request(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`, (error, response) => {
        const data = (JSON.parse(response.toString()))
        res.send(data);
    });
});

router.put("/team", (req, res) => {
    const teams = req.body;
    Object.assign(teamToIDs, teams);
});

router.get("/dreamTeam", (req, res) => {
    res.send(dreamTeam)
});

router.post("/roster", (req, res) => {
    if (dreamTeam.length < 5) {
        const player = req.body;
        dreamTeam.push(player);
    }
    res.end();
});

module.exports = router;