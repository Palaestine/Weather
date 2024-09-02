
const apiKey = "5e0e744dc7dd86aebb0f599adf37cc16",
      apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


      const searchBox = document.querySelector(".search input"),
            searchIcon = document.querySelector(".search .icon"),
            weatherIcon = document.querySelector(".weather-icon"),
            weather = document.querySelector(".weather"),
            error = document.querySelector(".error");



      async function checkWeather( city ){

        const response = await fetch( apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404)
        {
            error.style.display = "block";
            weather.style.display = "none";
        }
        else
        {
            let data = await response.json();


            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    
    
            if(data.weather[0].main ==  "Clouds")
            {
                weatherIcon.src = "./images/clouds.png"
            }
            else if(data.weather[0].main ==  "Clear")
            {
                weatherIcon.src = "./images/clear.png"
            }
            else if(data.weather[0].main ==  "Drizzle")
            {
                weatherIcon.src = "./images/drizzle.png"
            }
            else if(data.weather[0].main ==  "Mist")
            {
                weatherIcon.src = "./images/mist.png"
            }
            else if(data.weather[0].main ==  "Rain")
            {
                weatherIcon.src = "./images/rain.png"
            }
            else if(data.weather[0].main ==  "Snow")
            {
                weatherIcon.src = "./images/snow.png"
            }
    
            weather.style.display = "block";
            error.style.display = "none";


        }
   

      }


      searchIcon.addEventListener("click" , ()=>{
        checkWeather(searchBox.value);

          
      })
      
