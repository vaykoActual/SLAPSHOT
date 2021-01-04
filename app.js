///###SLAPSHOT###


const DOMAIN = `http://statsapi.web.nhl.com/api/v1/teams`
const teamSelectSection = document.querySelector(".team-select-section")

//tryCatch
const getData = async () => {
  try {
    const getInfo = document.querySelector("form").value
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
    // console.log(select.value)
    getTeamData(select.value)
  })
  teams.forEach((team) => {
    let teamOption = document.createElement('option')
    teamOption.innerHTML = `<h2>${team.name}</h2>`
    teamOption.value = team.id
    select.append(teamOption)
  })
  teamSelectSection.append(select)
}

//getting the results
async function getTeamData(id) {
  // console.log(id)
  try {
    const response = await axios.get(`http://statsapi.web.nhl.com/api/v1/teams/${id}/`)
    const response1 = await axios.get(`http://statsapi.web.nhl.com/api/v1/teams/${id}/roster/`)
    console.log(response1.data.roster)
    renderteamData(response.data)
    renderRoster(response.data.roster)
  }
  catch (error) {
  } 

}

//adding to the dom
function renderteamData(data) {
  let teamData = document.querySelector(".render-team-data")
  // console.log(data.teams[0])
  teamData.innerHTML = `
  <h1>${data.teams[0].name}</h1>
  <h2>${data.teams[0].venue.name}</h2>
  <h3>${data.teams[0].conference.name} Confernece</h3>
  <h3>EST. ${data.teams[0].firstYearOfPlay}</h3>
  <a>${data.teams[0].officialSiteUrl}</a>
  `
  
}
function playerSelect(players) {
  const choice = document.createElement('choice')
  choice.addEventListener("change", () => {
    getTeamData(choice.value)
  })
  players.forEach((player) => {
    let playerOption = document.createElement('option')
    playerOption.innerHTML = `<h2>${person.name}</h2>`
    playerOption.value = person.id
    choice.append(teamOption)
  })
  teamSelectSection.append(select)
}



  




