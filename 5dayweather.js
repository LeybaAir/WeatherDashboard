const lat = 30.2920; // Austin, TX
const lon = 97.7118; // Austin, TX
const apiKey = "9de5bb909b0074a32fa0391ba33f2999"; 
const apiDataDiv = document.querySelector('#api-data');

const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.list[0].main.temp;
    console.log(temperature);
  })
  .catch(error => console.log(error));

  