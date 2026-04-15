const footballTeam =
  {
    team: "Barcelone",
    year: 2026,
    headCoach: "Hansi Flick",
    players: [
      {
        name: "Robert Lewandoski",
        position: "forward",
        isCaptain: false,
      },
      {
        name: "Markus Rashford",
        position: "forward",
        isCaptain: false,
      },
      {
        name: "Lamine Yamal",
        position: "forward",
        isCaptain: false,
      },
      {
        name: "Raphinha",
        position: "forward",
        isCaptain: false,
      },
      {
        name: "Ferran Torres",
        position: "forward",
        isCaptain: false,
      },
      {
        name: "Frankie de Jong",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Gavi",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Dani Olmo",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Fermin Lopez",
        position: "midfielder",
        isCaptain: false,
      },
      {
        name: "Jule Kounde",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Ronald Araujo",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Eric Garcia",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Andreas Christensen",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Alejandro Balde",
        position: "defender",
        isCaptain: false,
      },
      {
        name: "Joan Garcia",
        position: "goalkeeper",
        isCaptain: false,
      },
      {
        name: "Mark-andre ter stegen",
        position: "goalkeeper",
        isCaptain: true,
      },
      {
        name: "Diego Kochen",
        position: "goalkeeper",
        isCaptain: false,
      },
    ]
  };

  const team = document.getElementById("team");
  const year = document.getElementById("year");
  const headCoach = document.getElementById("head-coach");
  const playerCards = document.getElementById("player-cards")
  const selectPlayer = document.getElementById("players")

  team.innerText = footballTeam["team"];

  year.innerText = footballTeam["year"];

  headCoach.innerText = footballTeam["headCoach"];

  function playerCard(positions) {
    const players = footballTeam["players"];
    let filteredPlayers =positions==="all"? players:  players.filter(({position}) => position === positions)
    

    return filteredPlayers.map(({name, position, isCaptain}) => {
      return `<div class="player-card"><h2>${name} ${isCaptain? "(Captain)": ""}</h2><p>Position: ${position}</p></div>`
    }).join("")
  }

  selectPlayer.addEventListener("change", () => {
   playerCards.innerHTML = playerCard(selectPlayer.value)
  })

  playerCards.innerHTML = playerCard("all")

