// copyright year for the footer
function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=y;
}

// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function myFunction() {
    var x = document.getElementById("hamnavlinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

// Funtion to validate the information submitted to the mailing form
function validate() {
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const commentInput = document.getElementById('commentInput');
  const numberInput = document.getElementById('numberInput');
  const zipInput = document.getElementById('zipInput');
  

  if (!nameInput.checkValidity() || !emailInput.checkValidity() || !commentInput.checkValidity() || !numberInput.checkValidity() || !zipInput.checkValidity()) {
    document.getElementById("error").innerHTML="Make sure to enter all the required information to be apart of our mailing list!";
  } 
  else {
    document.getElementById("error").innerHTML="";
    document.getElementById("mailingform").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  }
}

// Function to change slideshow photos automatically (every 2 seconds)
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
        console.error("No elements with the class 'mySlides' found.");
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block"; 
    } else {
        console.error(`Element at index ${slideIndex - 1} is undefined.`);
    }

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// weather API from https://home.openweathermap.org/api_keys
const apiKey='15f33ce8d8d84ee1c4278189c3d761b3';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            document.getElementById('weatherInfo').innerHTML = 'City not found';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').innerHTML = 'Error fetching weather data';
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}
