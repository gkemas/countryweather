const search = document.querySelector("button");
const cityInput = document.querySelector("input");
const container = document.querySelector(".container");

const getWeatherInfo = async () => {
  if (
    container.innerHTML
      .toLowerCase()
      .includes(cityInput.value.toLocaleLowerCase())
  ) {
    alert(cityInput.value + "is already exists");
  } else {
    const key = `4fccf41c711776170ecb2f21bc47ea5c`;
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${key} `;

    try {
      const response = await fetch(url);
      const weatherinfo = await response.json();
      console.log(weatherinfo);
      const { main, weather, name } = weatherinfo;
      container.innerHTML += ` 
  
  
<div class="card" style="width: 18rem;">
  <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="card-img-top" alt="ıcon">
  <div class="card-body">
    <h5 class="card-title">CİTY</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${name}</li>
    <li class="list-group-item">${main.temp}</li>
    <li class="list-group-item">${weather[0].description}</li>
  </ul>
  
</div>
  `;
    } catch (error) {
      console.log("err");
    }
  }
  cityInput.value =""
  cityInput.focus();

};
window.onload=cityInput.focus();
search.addEventListener("click", getWeatherInfo)


/* container.innerHTML += `${main.temp} <br> ${weather[0].description} <br> <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="ıcon">  `; */
