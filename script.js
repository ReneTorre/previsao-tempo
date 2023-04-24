

const key = "016f44e2ca0fd5cb92a6630599274151"

function dataScreen(data){
  console.log(data)
  document.querySelector(".city").innerHTML = "Tempo em " + data.name
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
  document.querySelector(".forecast-text").innerHTML = data.weather[0].description
  document.querySelector(".moisture").innerHTML = "Umidade: " + data.main.humidity + "%"
  document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){
  
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
  
  dataScreen(data)
}

function clickedBotton (){
  const city = document.querySelector(".input-city").value

  searchCity(city)
}