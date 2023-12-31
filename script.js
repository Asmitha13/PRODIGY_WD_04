document.getElementById("getWeather").addEventListener("click", function () {
    const location = document.getElementById("location").value;
    const weatherDiv = document.getElementById("weather");
  
    const apiKey = 'b8975408a2f20ce67b57d10266fa93f3';
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        const temperature = data.main.temp + "°C";
        const description = data.weather[0].description;
  
        weatherDiv.innerHTML = `
          <h2>${location}</h2>
          <p>Temperature: ${temperature}</p>
          <p>Description: ${description}</p>
        `;
      })
      .catch((error) => {
        weatherDiv.innerHTML = "Error fetching weather data.";
      });
  });