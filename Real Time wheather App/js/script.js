document.addEventListener('DOMContentLoaded',  () => {

    const API_KEY = '623929e36b65470e7e980ad8e23328a9';
    let clockInterval = null;
    
    const animationContainer = document.getElementById('animation-container');
    const loadingOverlay = document.getElementById('loading-overlay');
    const errorHandler = document.getElementById('error-handler');
    const errorMessage = document.getElementById('error-message');
    const closeBtn = document.getElementById('close-btn');
    const weatherContent = document.getElementById('weather-content');
    const searchCityForm = document.getElementById('search-city-form');
    const cityInput = document.getElementById('cityInput');
    const currentLocationBtn = document.getElementById('current-location-btn');
    const suggestionBox = document.getElementById('suggestion-box');
    const city = document.getElementById('city');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');
    const weatherIcon = document.getElementById("weather-icon");
    const forecastContainer = document.getElementById('forecast-container');
    const sunriseElement = document.getElementById('sunrise-time');
    const sunsetElement = document.getElementById('sunset-time');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind-speed');
    const pressureElement = document.getElementById('pressure');
    const feelLikeElement = document.getElementById('feel-like');
    const visibilityElement = document.getElementById('visibility');
    const airQualityElement = document.getElementById('air-quality');
    const healthRecommendationElement = document.getElementById('health-recomandation');
        
    const backgroundDayImges = {
    clear: ["linear-gradient(to top, #4c95b3 10%, #87d6e0 90%)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/mostly-clear-day.svg"],
    clouds: ["linear-gradient(to bottom, #757F9A, #D7DDE8)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/overcast.svg"],
    rain: ["linear-gradient(to bottom, #373B44, #4286f4)","https://cdn.meteocons.com/3.0.0-next.10/svg/fill/extreme-rain.svg"],
    drizzle: ["linear-gradient(to bottom, #606c88, #3f4c6b)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/overcast-drizzle.svg"],
    thunderstorm: ["linear-gradient(to bottom, #141E30, #243B55)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/thunderstorms-extreme.svg"],
    snow: ["linear-gradient(to bottom, #E6DADA, #274046)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/snow.svg"],
    mist: ["linear-gradient(to bottom, #757F9A, #C9D6FF)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/mostly-clear-day-fog.svg"]
};

const backgroundNightImges = {
    clear: ["linear-gradient(to bottom, #050816 0%, #070f27 35%, #191638 70%, #150a25 100%)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/mostly-clear-night.svg"],
    clouds: ["linear-gradient(to bottom, #232526, #414345)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/extreme-night.svg"],
    rain: ["linear-gradient(to bottom, #141E30, #243B55)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/extreme-night-rain.svg"],
    drizzle: ["linear-gradient(to bottom, #283048, #859398)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/overcast-night-drizzle.svg"],
    thunderstorm: ["linear-gradient(to bottom, #000000, #434343)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/thunderstorms-extreme-night.svg"],
    snow: ["linear-gradient(to bottom, #2C3E50, #4CA1AF)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/overcast-night-snow.svg"],
    mist: ["linear-gradient(to bottom, #232526, #414345)", "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/overcast-night-fog.svg"]
};

    const fetchWeather = async ({lat, lon, city}) => {
        showLoading();

        if (clockInterval) {
            clearInterval(clockInterval);
        }

        try {
            if (!API_KEY) {
                throw new Error('API key is missing. Please provide a valid API key.');
            }
            
            let latitude = lat, longitude = lon;

            if (city) {
                const geocodeResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
                if (!geocodeResponse.ok) {
                    throw new Error(`Failed to fetch geocode data. Please check the city name "${city}".`);
                
                }
                const geocodeData = await geocodeResponse.json();   

                if (geocodeData.length === 0) {
                    throw new Error('City not found. Please enter a valid city name.');
                
                }

                latitude = geocodeData[0].lat;
                longitude = geocodeData[0].lon;

            }

            const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            const forcastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            const currentAqiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

            const [weatherResponse, forcastRsponse, aqiResponse] = await Promise.all
            ([
                fetch(currentWeatherURL),
                fetch(forcastURL),
                fetch(currentAqiUrl)
            ]);

            if ([weatherResponse, forcastRsponse, aqiResponse].some(res => !res.ok)) {
                throw new Error("Failed to fetch data");
            }

            const currentWeather = await weatherResponse.json();
            const weatherForcast = await forcastRsponse.json();
            const currentAQI = await aqiResponse.json();

            updateUI(currentWeather, weatherForcast, currentAQI);
            

        } catch (error) {
            console.error('Error fetching weather data:', error);
            showError(error.message || 'An error occurred while fetching weather data.'); 
        
        } finally {
            hideLoading();

        }
    }

    const updateUI = (weather, forcast, aqi) => {
        
        let weatherConditionForBg = weather.weather[0].main;
        if (weatherConditionForBg === "Clouds" && weather.clouds.all < 20) {
            weatherConditionForBg = "Clear";
        }
        updateClock(weather.timezone);
        clockInterval = setInterval(() => updateClock(weather.timezone), 1000);

        const currentTimeUTC = weather.dt;
        const sunriseUTC = weather.sys.sunrise;
        const sunsetUTC = weather.sys.sunset;
        const isNight = (currentTimeUTC < sunriseUTC || currentTimeUTC > sunsetUTC);

        const backgroundSet = isNight ? backgroundNightImges : backgroundDayImges;
        const weatherTheme = backgroundSet[weatherConditionForBg] || backgroundSet.clear;
        document.body.style.background = weatherTheme[0];
        weatherIcon.src = weatherTheme[1];


        city.textContent = `${weather.name}, ${weather.sys.country}`;
        const localDate = new Date((weather.dt + weather.timezone) * 1000);
        date.textContent = localDate.toLocaleDateString("en-US",{weekday:"long", month:"long", day:"numeric", timeZone:"UTC"});
        temperature.textContent = `${Math.round(weather.main.temp)}°C`;
        weatherDescription.textContent = weather.weather[0].description;
        
        const formatTime = (timestamp) => new Date(timestamp * 1000).toLocaleTimeString("en-US", {hour:"2-digit", minute:"2-digit", hour12:true, timeZone:"UTC"});

        // Sunrise and Sunset
        sunriseElement.textContent = formatTime(weather.sys.sunrise + weather.timezone);
        sunsetElement.textContent = formatTime(weather.sys.sunset + weather.timezone);

        // Other Weather Details like Humidity, Wind Speed, Pressure, Feel Like, Visibility
        humidityElement.textContent = `${weather.main.humidity}%`;
        windElement.textContent = `${(weather.wind.speed * 3.6).toFixed(1)} km/h`; // Convert m/s to km/h
        pressureElement.textContent = `${weather.main.pressure} hPa`;
        feelLikeElement.textContent = `${Math.round(weather.main.feels_like)}°C`;
        visibilityElement.textContent = `${(weather.visibility / 1000).toFixed(1)} km`;

        // Air Quality Index
        const aqiValue = aqi.list[0].main.aqi;
        const aqiDescriptions = getAQIDescriptions(aqiValue);
        airQualityElement.textContent = `${aqiDescriptions.level}`;
        airQualityElement.className = `font-bold px-3 py-1 rounded-full text-sm ${aqiDescriptions.color}`;

        // Health Recommendation based on AQI
        healthRecommendationElement.innerHTML = `<p class="text-gray-300 text-sm">${aqiDescriptions.recommendation}</p>`;
    
        const dailyForecast = processForecastData(forcast.list);

        forecastContainer.innerHTML = "";

        dailyForecast.forEach(day => {

            const card = document.createElement('div');
            
            card.className = `p-4 rounded-2xl text-center card backdrop-blur-xl`;

            const forecastCondition = day.weather[0].main.toLowerCase();
            const forecastTheme = isNight ? backgroundNightImges : backgroundDayImges;
            const forecastIcon = forecastTheme[forecastCondition]?.[1] || forecastTheme.clear[1];

            card.innerHTML = `
                <p class="font-bold text-lg">
                  ${new Date(day.dt_txt).toLocaleDateString("en-US", {weekday:"short"})}
                </p>

                <img src="${forecastIcon}" alt="${day.weather[0].description}" class="mx-auto w-16 h-16">

                <p class="font-semibold">
                    ${Math.round(day.main.temp_max)}&#176; / ${Math.round(day.main.temp_min)}&#176;
                </p>
            `;

            forecastContainer.appendChild(card);
        });

        const currentDay = document.querySelector("#forecast-container div:first-child");
        currentDay.classList.add("activeCurrentDay");

        updateNightMode(isNight, weatherConditionForBg);
    }

    const updateNightMode = (isNight, condition) => {
        if (!isNight) {
            console.log("Day mode: No animations for day time.");
            return;
        }

        // condition ko lowercase mein convert kar ke check karein taake spelling/case ka masla na ho
        const currentCondition = condition ? condition.toLowerCase() : "";

        if (currentCondition === "clear") {
            const star = document.createElement('div');
            star.className = 'stars';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 2 + 1}px`;
            star.style.height = star.style.width;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            animationContainer.appendChild(star);
        } else if (currentCondition === "rain" || currentCondition === "drizzle") {
            for (let i = 0; i < 50; i++) {
                const raindrop = document.createElement('div');
                raindrop.className = 'raindrop';
                raindrop.style.left = `${Math.random() * 100}%`;
                raindrop.style.animationDelay = `${Math.random() * 2}s`;
                raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
                animationContainer.appendChild(raindrop);
            }
        } else if (currentCondition === "snow") {
            for (let i = 0; i < 30; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.style.left = `${Math.random() * 100}%`;
                snowflake.style.animationDelay = `${Math.random() * 10}s`;
                snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
                snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`;
                animationContainer.appendChild(snowflake);
            }
        }
    }

    const getAQIDescriptions = (aqiValue) => {

        if (aqiValue <= 1) {
            return {
                level: "Good",
                color: "bg-green-500 text-white",
                recommendation: "Air quality is considered satisfactory and no risk. Enjoy outdoor activities."
            }
        } else if (aqiValue <= 2) {
            return {
                level: "Fair",
                color: "bg-yellow-500 text-black",
                recommendation: "Air quality is acceptable. Some pollutants may be a concern for sensitive individuals."
            }
        } else if (aqiValue <= 3) {
            return {
                level: "Moderate",
                color: "bg-orange-500 text-white",
                recommendation: "Members of sensitive groups may experience health effects. Limit prolonged outdoor exertion."
            }
        } else if (aqiValue <= 4) {
            return {
                level: "Poor",
                color: "bg-red-400 text-white",
                recommendation: "Everyone may begin to experience health effects. Limit outdoor activities."
            }
        } else if (aqiValue <= 5) {
            return {
                level: "Unhealthy",
                color: "bg-purple-900 text-white",
                recommendation: "Health alert: everyone may experience more serious health effects. Avoid outdoor activities if possible."
            }
        } else {
            return {
                level: "Hazardous",
                color: "bg-maroon-500 text-white",
                recommendation: "Health warnings of emergency conditions. Avoid outdoor activities."
            }
        }
    }

    const processForecastData = (forecastData) => {
        const forecastByDay = {};
        forecastData.forEach(item => {
            const date = item.dt_txt.split(' ')[0];
            if (!forecastByDay[date]) {
                forecastByDay[date] = {temp_max: [], temp_min: [], icons: {}, item: null};
            }
            
            forecastByDay[date].temp_max.push(item.main.temp_max);
            forecastByDay[date].temp_min.push(item.main.temp_min);
            const icon = item.weather[0].icon;
            forecastByDay[date].icons[icon] = (forecastByDay[date].icons[icon] || 0) + 1;
            
            if (!forecastByDay[date].item || item.dt_txt.includes("12:00:00")) {
                forecastByDay[date].item = item;
            }
        });

        const processedForecast = [];
        for (const date in forecastByDay) {
            const dayData = forecastByDay[date];
            const mostCommonIcon = Object.entries(dayData.icons).reduce((a, b) => b[1] > a[1] ? b : a)[0];
            dayData.item.weather[0].icon = mostCommonIcon;
            dayData.item.main.temp_max = Math.max(...dayData.temp_max);
            dayData.item.main.temp_min = Math.min(...dayData.temp_min);
            processedForecast.push(dayData.item);
        } 

        return processedForecast.slice(0, 5); // Return only the next 5 days
    }

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        }
    }

    const handleCityInput = async (event) => {
        const query = event.target.value.trim();
        
        if (query.length < 2) {
            suggestionBox.classList.add('hidden');
            return;
        }

        try {

            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`);
            if (!response.ok) {
                return;
            }
            const cities = await response.json();

            suggestionBox.innerHTML = "";
            if (cities.length > 0 ){

                suggestionBox.classList.remove("hidden");
                cities.forEach( city => {
                    const div = document.createElement("div");
                    div.className = 'p-3 hover:bg-white/10 cursor-pointer';
                    div.textContent = `${city.name}, ${city.state ? city.state + ', ' : ' ' }${city.country}`;
                    div.onclick = () => {
                        cityInput.value = city.name;
                        suggestionBox.classList.add("hidden");
                        
                        fetchWeather({lat:city.lat, lon:city.lon})
                    };
                    suggestionBox.appendChild(div);
                })

            } else {
                
                suggestionBox.classList.add("hidden");
            }

        } catch (error) {
            console.error('Error fetching city suggestions:', error);
        }
    }

    const updateClock = (timezoneOffset) => {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const localTime = new Date(utc + timezoneOffset * 1000);
        time.textContent = localTime.toLocaleTimeString("en-US", {hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:true});
    }

    const showLoading = () => {
        loadingOverlay.classList.remove('hidden');
        loadingOverlay.classList.add('visible');
    }

    const hideLoading = () => {
        loadingOverlay.classList.add('hidden');
        loadingOverlay.classList.remove('flex');
        weatherContent.classList.remove('opacity-0');
    }

    const showError = (message) => {
        errorMessage.textContent = message;
        errorHandler.classList.remove('hidden');
        errorHandler.classList.add('visible');
    }

    searchCityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather({city});
        }
        suggestionBox.classList.add('hidden');
        cityInput.value = '';
    })

    cityInput.addEventListener('input', debounce(handleCityInput, 300))

    document.addEventListener("click", (e) => {
        if (!searchCityForm.contains(e.target)) {

            suggestionBox.classList.add("hidden"); 
        }
    });

    currentLocationBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => fetchWeather({lat:position.coords.latitude, lon:position.coords.longitude}),

                () => {
                    console.log("Current loction failed");
                    fetchWeather({city:"karachi, PK"});
                },

                {
                    enableHighAccuracy:true, timeout:30000, maximumAge:0
                }
            );
        } else {
            console.log("Loction not supported");
            fetchWeather({city:"karachi, PK"});
        }
    });

    closeBtn.addEventListener("click", () => errorHandler.classList.add("hidden"));

    fetchWeather({lat: 24.8607, lon: 67.0011});

})
