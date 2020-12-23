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

//searchButton
// const searchButton = document.querySelector(".search")
// searchButton.addEventListener("click", getData)  


//renderList
function renderSelect(teams) {
  const select = document.createElement('select')
  select.addEventListener("change", () => {
    console.log(select.value)
    getTeamData(select.value)

  })
  // console.log(select.value)
  teams.forEach((team) => {
    let teamOption = document.createElement('option')
    teamOption.innerHTML = `
    <h2>${team.name}</h2>
    `
    teamOption.value = team.id
    // const teamName = document.createElement('h3')
    // teamName.innerHTML = `${team.name}`
    select.append(teamOption)
  })
  teamSelectSection.append(select)
}
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
function renderteamData(data) {
  let teamData = document.querySelector(".render-team-data")
  console.log(data.teams[0])
  teamData.innerText = data.teams[0].name
}
 
  
  //binarySearch

// const binarySearch = (teams, target, min, max) => {
//   const m = Math.floor((min + max) / 2);
//   if (target == teams[mid].data) return teams[mid];
//   if (max — 1 === min) return Math.abs(teams[min].name — target) > Math.abs(teams[max].name — t) ? teams[max] : teams[min]; 
//   if (target > teams[mid].names) return binarySearch(teams,target,mmid,max);
//   if (target < teams[mid].names) return binarySearch(teams,target,mmid,max);
// }
// let closestPoint = binarySearch(data,target, 0, data.length-1)


//   let min = 0
//   let max = -1
//   while (min <= max) {
//     let mid = Math.floor((min + max) / 2)
//     if (target === nums[mid]) min = mid + 1
//     else max = mid -1
//   }
//   return -1
// }
  










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