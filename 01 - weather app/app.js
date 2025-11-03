const searchBtn = document.querySelector('.searchBtn');
const container = document.querySelector('.container');
const notfoundContainer = document.querySelector('.not-found');
const detailsContainer = document.querySelector('.weather-details');
const weatherBox = document.querySelector('.weather-box');

searchBtn.addEventListener('click', ()  => {
    const APIKey = 'e8f9e990f32ba2e4299274f9e4df4f22';
    const city = document.querySelector('.city').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response => Response.json()).then(json => {
        if (json.cod === '404') {
            container.style.height = '350px';
            notfoundContainer.style.display = 'flex';
            weatherBox.style.display = 'none';
            detailsContainer.style.display = 'none';
            return;
        }
        notfoundContainer.style.display = 'none';
        notfoundContainer.classList.remove = 'fadeIn';
        city.content = ''


        let image = document.querySelector('.weather-box img');
        const temprature = document.querySelector('.temperature');
        const desc = document.querySelector('.description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = './images/clear.png';
                break;

            case 'Rain':
                image.src = './images/rain.png';
                break;

            case 'Snow':
                image.src = './images/snow.png';
                break;

            case 'Clouds':
                image.src = './images/cloud.png';
                break;

            case 'Haze':
                image.src = './images/mist.png';
                break;

            default:
                image.src = '';
        }

        temprature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        desc.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = 'flex';
        detailsContainer.style.display = 'flex';
        weatherBox.classList.add = 'fadeIn';
        detailsContainer.classList.add = 'fadeIn';
        container.style.height = '590px';


    });
});