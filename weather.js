

const apikey="b12dd680590b772560a408819f06273a";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');
const weathericon=document.querySelector('.Weather-Icon')

async function cheakweather(city){
    const response = await fetch(apiurl + city+ `&appid=${apikey}`);
if(response.status==404){
    document.querySelector('.error').style.display = "block"
    document.querySelector('.weather').style.display = "none"
}
else{
    let data =await response.json();

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector('.humidity').innerHTML=data.main.humidity+` %`;
    document.querySelector('.Wind').innerHTML= data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";

    }else if(data.weather[0].main=="Clear"){
        weathericon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
            weathericon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
            weathericon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="images/snow.png";
}
    weather.style.display='block';
    document.querySelector('.error').style.display = "none"
}
  
}
let weather= document.getElementById('weatherrr')

    searchbtn.addEventListener("click",()=>{
        
        cheakweather(searchbox.value);
        
    })

