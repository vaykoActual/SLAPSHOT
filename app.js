const getData = async () => {
  try {
    // const getInfo = document.querySelector("input").value
    const URL = `https://cors-anywhere.herokuapp.com/https://records.nhl.com/site/api/record-detail`
    const response = await axios.get(URL)
    // console.log(response.data)
    const axiosData = response.data
    console.log(axiosData)
  }
  catch {
    (error)
    console.log(error)
  }
}
    getData()

    const searchButton = document.querySelector("#search")
searchButton.addEventListener("click", getData)
    
async function renderList(data) {
  data.forEach((team) => {
    let teamName = document.createElement('h2')
    teamName.innerText = team.Title
    document.querySelector('.team-list').append(teamName)
    
  })
}
renderList()





