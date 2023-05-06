const APIkey = '6a29530611e745ec4d55d8727aab5e4e';

const form = document.querySelector('form');
const weather = document.querySelector('#weather');
const search = document.querySelector('#search');

// const API = `https://api.openweathermap.org/data/2.5/weather?q={city}&APPID={APIkey}&units=metric;`;

// const IMGurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async (city) => {    // async and await use krna necessity h q ki yahan api call ho rha h => jb v api call hogi async await krna hi hoga nhi to bina response ka wait kiye agee k statements execute ho jayenge
    weather.innerHTML = '<h2>Loading....</h2>';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return showWeather(data);
}

const showWeather = (data) => {
    if (data.cod == '404') {
        weather.innerHTML = '<h2>City Not Found</h2>';
        return;
    }
    
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}

form.addEventListener(
    'submit',
    function (event) {
        // console.log(search.value);
        getWeather(search.value);
        event.preventDefault();     //will stop the default work of form, when submit button is pressed, i.e., to reload the page. Thus page will not be reloaded.
    }
)