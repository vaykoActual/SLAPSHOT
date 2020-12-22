///###SLAPSHOT###


const DOMAIN = `https://statsapi.web.nhl.com/api/v1/teams/`
const teamSection = document.querySelector(".team-list")
// const API_KEY = `d2e85759`
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`


const getData = async () => {
  try {
    // const getInfo = document.querySelector("input").value
    // const URL = `https://cors-anywhere.herokuapp.com/https://statsapi.web.nhl.com/api/v1/teams/`
    const response = await axios.get(`${DOMAIN}`)
    // console.log(response.data)
    // const axiosData = (response.forE)
    // console.log(axiosData)
    //renderList(response.data.search)
    renderList(response.data.teams)
  }
  catch (error) {
    //console.log(error)
  }
}
getData()


// const searchButton = document.querySelector("#search")
// searchButton.addEventListener("click", getData)  

function renderList(teams) {
  teams.forEach((team) => {
    let teamDiv = document.createElement('div')
    teamDiv.innerHTML = `
    <h2>${team.name}</h2>
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


