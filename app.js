///###SLAPSHOT###



// const API_KEY = `d2e85759`
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

const DOMAIN = `http://statsapi.web.nhl.com/api/v1/teams/`
const teamSection = document.querySelector(".team-list")

//tryCatch
const getData = async () => {
  try {
    const getInfo = document.querySelector("input").value
    // const URL = `https://cors-anywhere.herokuapp.com/https://statsapi.web.nhl.com/api/v1/${getInfo}/`
    const response = await axios.get(`${DOMAIN}`)
    console.log(response.data)
    renderList(response.data.searchButton)
  }
  catch (error) {
  }
}
getData()

//searchButton
const searchButton = document.querySelector("#search")
searchButton.addEventListener("click", getData)  


//renderList
function renderList(teams) {
  teams.forEach((team) => {
    let teamDiv = document.createElement('div')
    teamDiv.innerHTML = `
    <h2>${team.name}</h2>
    `
    const teamVenue = document.createElement('h3')
    teamVenue.innerHTML = `${venue.name}`
    teamSection.append(teamDiv) 
    })
  }
 
  
  //binarySearch

const binarySearch = (nums, target) => {
  let min = 0
  let max = -1
  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (target === nums[mid]) min = mid + 1
    else max = mid -1
  }
  return -1
}
  










  //search algo from https://code.tutsplus.com/tutorials/the-binary-search-algorithm-in-javascript--cms-30003

//   function binarySearch(value, list) {
//     let first = 0;    //left endpoint
//     let last = list.length - 1;   //right endpoint
//     let position = -1;
//     let found = false;
//     let middle;
 
//     while (found === false && first <= last) {
//         middle = Math.floor((first + last)/2);
//         if (list[middle] == value) {
//             found = true;
//             position = middle;
//         } else if (list[middle] > value) {  //if in lower half
//             last = middle - 1;
//         } else {  //in in upper half
//             first = middle + 1;
//         }
//     }
//     return position;
// }




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