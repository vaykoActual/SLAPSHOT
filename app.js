///###SLAPSHOT###


// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

const DOMAIN = `http://statsapi.web.nhl.com/api/v1/teams`
const DOMAIN1 = `http://statsapi.web.nhl.com/api/v1/people/{id}`
// const DOMAIN2 = `http://statsapi.web.nhl.com/api/v1/teams/{id}roster/`
const teamSelectSection = document.querySelector(".team-select-section")

document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/jDPxsyY.jpg')";

//tryCatch
const getData = async () => {
  try {
    const getInfo = document.querySelector("form").value
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
  teamData.innerHTML = `
  <h1>${data.teams[0].name}</h1>
  <h2>${data.teams[0].venue.name}</h2>
  <h3>${data.teams[0].conference.name}</h3>
  <h3>EST. ${data.teams[0].firstYearOfPlay}</h3>
  <a href=${data.teams[0].officialSiteUrl}</a>
  `
  }

