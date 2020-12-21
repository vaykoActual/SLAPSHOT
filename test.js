// const getData = async () => {
//   try {
//     const headers = {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//     }
//     const URL = 'http://www.nokeynoshade.party/api/queens/all'
//     const response = await axios.get(URL, headers)
//     console.log(response)
//     const axiosData = response.data
//     console.log(axiosData)
//     queenInfo(axiosData)
//   } catch {}
// }
// getData()
// const queenInfo = (queens) => {
//   queens.forEach((queen) => {
//     const queenName = document.createElement('h3')
//     queenName.innerHTML = queen.name
//     const queenQuote = document.createElement('h5')
//     queenQuote.innerHTML = `Quote: "${queen.quote}"`
//     const queenImg = document.createElement('img')
//     queenImg.setAttribute('src', queen.image_url)
//     document.body.append(queenImg)
//     document.body.append(queenName)
//     document.body.append(queenQuote)
//   })
// }