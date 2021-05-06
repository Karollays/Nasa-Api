//criar botao de pesquisa
let searchBotton = document.querySelector("#search")
var data2 = document.querySelector("#searchTerm")

//criar um evento para ele, quando clicar execura funçao api
searchBotton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
    
})

//envia a solicitacao para NASA API
async function sendApiRequest() {
    let API_KEY = "sF0hUpnja0n7HDGXkipHnGpv7cWSH4ulEx7acTn2"
    console.log(data2)
    let response = await fetch("https://api.nasa.gov/planetary/apod?api_key="+API_KEY+"&date=" + data2.value);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)          
} 
    
function useApiData(data) {
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
} 


