document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("weather-description");
  const errorDisplay = document.getElementById("error-message");

  const API_KEY = "d4c935fba59444e4a51125055252909"; //env variables
  const API_KEY2 = "2aaeb13a0b5e547a311ec6338340b18a";
  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // It may throw an error
    // server/database is always in another continent
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });
  async function fetchWeatherData(city) {
    //get the data
    const url = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`;
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY2}`;
    const response = await fetch(url2);
    console.log(typeof response);
    console.log("Response", response);
    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json();
    // const { lat, lon } = data[0];
    // const url3 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY2}`;
    // const realResponse = await fetch(url3);
    // if (!realResponse.ok) {
    //   throw new Error("Error fetching data");
    // }
    // const realData = await realResponse.json();
    return data;
  }
  function displayWeatherData(weatherData) {
    //display
    console.log(weatherData);
    const {name,main,weather}=weatherData;
    cityNameDisplay.textContent = name;

    weatherInfo.classList.remove("hidden");
    errorDisplay.classList.add("hidden");
    temperatureDisplay.textContent =`Temperature : ${main.temp}°C `;
    descriptionDisplay.textContent=`Weather : ${weather[0].description}`
    
  }
  function showError() {
    weatherInfo.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
  }
});
