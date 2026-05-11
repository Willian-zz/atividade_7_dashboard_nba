const mvpRace = [
    [{name: "N. Jokic"}, //Player Name
        {Points: 20, Assists: 7, Rebounds: 13}, //Game 1
        {Points: 25, Assists: 12, Rebounds: 14}, //Game 2
        {Points: 32, Assists: 7, Rebounds: 15}, //Game 3
        {Points: 22, Assists: 8, Rebounds: 11}, //Game 4
        {Points: 28, Assists: 9, Rebounds: 9}], //Game 5

    [{name: "S. Gilgeous-Alexander"},
        {Points: 20, Assists: 5, Rebounds: 5},
        {Points: 33, Assists: 2, Rebounds: 6},
        {Points: 32, Assists: 7, Rebounds: 4},
        {Points: 30, Assists: 8, Rebounds: 3},
        {Points: 28, Assists: 6, Rebounds: 5}],

    [{name: "L. James"},
        {Points: 33, Assists: 11, Rebounds: 10},
        {Points: 38, Assists: 12, Rebounds: 12},
        {Points: 32, Assists: 10, Rebounds: 8},
        {Points: 35, Assists: 14, Rebounds: 7},
        {Points: 28, Assists: 9, Rebounds: 12}]
]

const mvps = document.querySelectorAll(".mvp");

mvps.forEach(mvp => {
    const video = mvp.querySelector(".player-highlight");

    mvp.addEventListener("mouseenter", () => {
        video.play();
    });

    mvp.addEventListener("mouseleave", () => {
        video.pause();
    });
});

function lastFiveGames(playerName) {
    mvps.forEach(mvp => {
        const name = mvp.querySelector(".player-name")
        const ppg = mvp.querySelector(".ppg")
        const apg = mvp.querySelector(".apg")
        const rpg = mvp.querySelector(".rpg")
        if (name.textContent == playerName) {
            ppg.textContent = average(playerName).PPG;
            apg.textContent = average(playerName).APG;
            rpg.textContent = average(playerName).RPG;
        }
    })
}

function average(playerName) {
    let averagePTS = 0;
    let averageAST = 0;
    let averageREB = 0;

    for (let i = 0; i < 3; i++) {
        if (mvpRace[i][0].name != playerName) {
            continue;
        } else {
            for (let y = 1; y < 6; y++) {
                averagePTS += mvpRace[i][y].Points;
                averageAST += mvpRace[i][y].Assists;
                averageREB += mvpRace[i][y].Rebounds;
            }
        }
    }

    const PPG = averagePTS / 5;
    const APG = averageAST / 5;
    const RPG = averageREB / 5;

    const averageStats = {PPG: averagePTS / 5,
    APG: averageAST / 5,
    RPG: averageREB / 5};

    return averageStats;
}

lastFiveGames("N. Jokic");
lastFiveGames("S. Gilgeous-Alexander");
lastFiveGames("L. James");
