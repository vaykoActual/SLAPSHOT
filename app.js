///###SLAPSHOT###


const DOMAIN = `http://statsapi.web.nhl.com/api/v1/teams`
const teamSelectSection = document.querySelector(".team-select-section")


//tryCatch the form is getting a response from the API and calling renderSelect. 

const getData = async () => {
  try {
    const getInfo = document.querySelector("form").value
    const response = await axios.get(`${DOMAIN}`)
    renderSelect(response.data.teams)
  }
  catch (error) {
  }
}
getData()

//getting the results from the 2nd API call for renderteamData function.

async function getTeamData(id) {
  try {
    const response = await axios.get(`${DOMAIN}/${id}`)
    renderteamData(response.data)
    }
  catch (error) {
  } 
}

//renderSelect the dropdown is created and populated with a dummy name awaiting user input, while the API information is appended to the dropdown with the response from getTeamData. This function is called in getData.

function renderSelect(teams) {
  const select = document.createElement('select')
  select.addEventListener("change", () => {
    getTeamData(select.value)
  })

  //The dummy name for the dropdown using an id out of range.

  const selectTeam = [{ name: 'Select a Team', id: 222 }, ...teams]
  
  //populating the dropdown, team names are appended to the list

  selectTeam.forEach((team) => {
    let teamOption = document.createElement('option')
    teamOption.innerHTML = `
    <h2>${team.name}</h2>`
    teamOption.value = team.id
    select.append(teamOption)
  })
  teamSelectSection.append(select)
}

//adding to the results to the DOM with string interpolation, this function is called in getTeamData

function renderteamData(data, players) {
  let teamData = document.querySelector(".render-team-data")
  teamData.innerHTML = `
  <h1>${data.teams[0].name}</h1>
  <h2>${data.teams[0].venue.name}</h2>
  <h3>${data.teams[0].conference.name} Confernece</h3>
  <h3>EST. ${data.teams[0].firstYearOfPlay}</h3>
  <a href=${data.teams[0].officialSiteUrl} target='_blank'>${data.teams[0].officialSiteUrl}</a>
  `
}





  




