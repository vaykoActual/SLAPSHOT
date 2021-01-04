// const getData = async () => {
//   try {
//     const headers = {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//     }
//     const URL = 'https://records.nhl.com/site/api/record-detail/'
//     const response = await axios.get(URL, headers)
//     console.log(response.data)
//     // const axiosData = response.data
//     // console.log(axiosData)
  
//   } catch {}
// }
// getData()


//     const searchButton = document.querySelector("#search")
// searchButton.addEventListener("click", getData)
    


// // const queenInfo = (queens) => {
// //   queens.forEach((queen) => {
// //     const queenName = document.createElement('h3')
// //     queenName.innerHTML = queen.name
// //     const queenQuote = document.createElement('h5')
// //     queenQuote.innerHTML = `Quote: "${queen.quote}"`
// //     const queenImg = document.createElement('img')
// //     queenImg.setAttribute('src', queen.image_url)
// //     document.body.append(queenImg)
// //     document.body.append(queenName)
// //     document.body.append(queenQuote)
// //   })
// // }

{/* <ul>${data.roster[0].person.fullName}${data.roster[0].person.jerseyNumber}</ul>
  <a href=${data.teams[0].officialSiteUrl}</a></a> */}


// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`



 // const URL = `https://cors-anywhere.herokuapp.com/https://statsapi.web.nhl.com/api/v1/${getInfo}/`
// document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/jDPxsyY.jpg')";

//

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