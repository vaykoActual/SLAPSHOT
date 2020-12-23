///###SLAPSHOT###



// const API_KEY = `d2e85759`
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

const DOMAIN = `http://statsapi.web.nhl.com/api/v1/teams/`
const teamSelectSection = document.querySelector(".team-select-section")

//tryCatch
const getData = async () => {
  try {
    const getInfo = document.querySelector("input").value
    // const URL = `https://cors-anywhere.herokuapp.com/https://statsapi.web.nhl.com/api/v1/${getInfo}/`
    const response = await axios.get(`${DOMAIN}`)
    console.log(response.data)
    renderSelect(response.data.teams)
  }
  catch (error) {
  }
}
getData()

//renderList
function renderSelect(teams) {
  const select = document.createElement('select')
  select.addEventListener("change", () => {
    console.log(select.value)
    getTeamData(select.value)
  })
  teams.forEach((team) => {
    let teamOption = document.createElement('option')
    teamOption.innerHTML = `<h2>${team.name}</h2>`
    // teamOption.innerHTML = `<h3>${venue.city}</h3>`
    teamOption.value = team.id
    select.append(teamOption)
  })
  teamSelectSection.append(select)
}

//getting the results
async function getTeamData(id) {
  try {
    // const getInfo = document.querySelector("input").value
    const response = await axios.get(`${DOMAIN}/${id}`)
    renderteamData(response.data)
    console.log(response.data)
    // renderSelect(response.data.teams)
  }
  catch (error) {
  } 

}

//adding to the dom
function renderteamData(data) {
  let teamData = document.querySelector(".render-team-data")
  console.log(data.teams[0])
  (teamData.textContent = data.teams[0].name)
  
}
 
  








//RESOURCES




// https://cors-anywhere.herokuapp.com/


// conferences => https://statsapi.web.nhl.com/api/v1/conferences
// dates => https://statsapi.web.nhl.com/api/v1/schedule?season=20172018
// divisions => https://statsapi.web.nhl.com/api/v1/divisions
// franchises => https://statsapi.web.nhl.com/api/v1/franchises
// games => https://statsapi.web.nhl.com/api/v1/schedule?season=20172018
// game_status => https://statsapi.web.nhl.com/api/v1/gameStatus
// game_types => https://statsapi.web.nhl.com/api/v1/gameTypes
// game_results => https://statsapi.web.nhl.com/api/v1/playTypes
// game_events, game_events_players => https://statsapi.web.nhl.com/api/v1/game/2017020395/feed/live
// game_shifts => https://api.nhle.com/stats/rest/en/shiftcharts?cayenneExp=gameId=2019030212
// player => https://statsapi.web.nhl.com/api/v1/people/8471214
// player_regular_season_stats - https://statsapi.web.nhl.com/api/v1/people/8471214?expand=person.stats&stats=yearByYear&expand=stats.team&site=en_nhl
// player_playoffs_stats - https://statsapi.web.nhl.com/api/v1/people/8471214?expand=person.stats&stats=yearByYearPlayoffs&expand=stats.team&site=en_nhl
// player_game_logs - https://statsapi.web.nhl.com/api/v1/people/8471214?expand=person.stats&stats=gameLog&expand=stats.team&site=en_nhl&season=20182019
// play_types => https://statsapi.web.nhl.com/api/v1/playTypes
// positions - https://statsapi.web.nhl.com/api/v1/positions
// schedules => https://statsapi.web.nhl.com/api/v1/schedule?season=20172018
// seasons => https://statsapi.web.nhl.com/api/v1/seasons
// standings => https://statsapi.web.nhl.com/api/v1/standings/byLeague?season=20182019 , https://statsapi.web.nhl.com/api/v1/standings/byConference?season=20182019, https://statsapi.web.nhl.com/api/v1/standings/byDivision?season=20182019
// standing_types => https://statsapi.web.nhl.com/api/v1/standingsTypes
// team => https://statsapi.web.nhl.com/api/v1/teams/8
// team_stats => http://statsapi.web.nhl.com/api/v1/teams/14?expand=team.stats&season=20192020
// team_player(roster) => https://statsapi.web.nhl.com/api/v1/teams/8/roster