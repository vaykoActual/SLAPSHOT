const DOMAIN = 'https://statsapi.web.nhl.com/api/v1/teams';
const API_KEY = `d2e85759`
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

const getTeam = async () => {
  try {


  
    const getInfo = document.querySelector("input").value
    // console.log(getInfo)
    const response = await axios.get(`${BASE_URL}s=${getInfo}`)
    console.log(response.data.Search)
    renderList(response.data.Search)
    return response
  } catch (error) {
    // console.log()
  }
}
const searchButton = document.querySelector("#search")
searchButton.addEventListener("click", getTeam)


async function renderList(teams) {
  teams.forEach((team) => {
    let teamName = document.createElement ('h2')
    teamName.innerText = team.Name
    document.querySelector('.team-list').append(teamName)
    let img = document.createElement('img')
    img.src = team.Poster
    document.querySelector('.team-list').append(img)
  })
  
  
  // console.log(renderList)
}
// [...renderList].forEach(renderList => {
