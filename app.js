///###SLAPSHOT###


const DOMAIN = `http://statsapi.web.nhl.com/api/v1/teams`
const teamSelectSection = document.querySelector(".team-select-section")
const playerSelectSection = document.querySelector(".player-select-section")



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
    const response = await axios.get(`${DOMAIN}/${id}`)
    const response1 = await axios.get(`http://statsapi.web.nhl.com/api/v1/teams/${id}/roster/`)
    
    console.log(response1.data.roster[0].person.fullName)
    renderteamData(response.data)
    
    renderRoster(response1.data.roster)
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
  <a href=${data.teams[0].officialSiteUrl} target='_blank'>${data.teams[0].officialSiteUrl}</a>

  `
  
}

function renderRoster() {
  const select1 = document.createElement('select')
  select1.addEventListener("change", () => {
    console.log(select1.value)
    getTeamData(select1.value)
  })
  players.forEach((player) => {
    let playerOption = document.createElement('option')
    playerOption.innerHTML = `<h2>${team.name}</h2>`
    playerOption.value = team.id
    select1.append(playerOption)
  })
  playerSelectSection.append(select1)
}


  




