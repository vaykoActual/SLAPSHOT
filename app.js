///###SLAPSHOT###



// const API_KEY = `d2e85759`
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

const DOMAIN = `http://statsapi.web.nhl.com/api/v1/teams/`
const teamSection = document.querySelector(".team-list")


const getData = async () => {
  try {
    const getInfo = document.querySelector("input").value
    // const URL = `https://cors-anywhere.herokuapp.com/https://statsapi.web.nhl.com/api/v1/${getInfo}/`
    const response = await axios.get(`${DOMAIN}`)
    console.log(response.data)
    // const axiosData = (response.forE)
    //console.log(axiosData)
    //renderList(response.data.search)
    renderList(response.data.Search)
  }
  catch (error) {
    //console.log(error)
  }
}
getData()


const searchButton = document.querySelector("#search")
searchButton.addEventListener("click", getData)  

function renderList(teams) {
  teams.forEach((team) => {
    let teamDiv = document.createElement('div')
    teamDiv.innerHTML = `
    <h2>${teams.Search}</h2>
    `
    teamSection.append(teamDiv)


      // let teamName = document.createElement('h2')
      // teamName.innerText = teams.Name
      // document.querySelector('.team-list').append(teamName)
      
    })
  }
  


        



// const DOMAIN = 'https://cors-anywhere.herokuapp.com/https://records.nhl.com/site/api/record-detail/'
// const API_KEY = `d2e85759`
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`


// const getData = async () => {
//   try {
//     // const headers = {
//     //   headers: {
//     //     'Access-Control-Allow-Origin': '*',
//     //   },
//     // }
//     const getInfo = document.querySelector("input").value
//     const response = await axios.get(`${BASE_URL}s=${getInfo}`)
//     console.log(response.data.search)
//     return response
//     // const axiosData = response.data
//     // console.log(axiosData)
//   } catch (error) {
//     //console.log(error)
//   }
// }
//     getData()

//     const searchButton = document.querySelector("#search")
// searchButton.addEventListener("click", getData)
    
// async function renderList(data) {
//   data.forEach((team) => {
//     console.log(data.info)
//     let teamName = document.createElement('h2')
//     teamName.innerText = team.Title
//     document.querySelector('.team-list').append(teamName)
    
//   })
// }
// renderList()


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