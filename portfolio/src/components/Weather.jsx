import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Div = styled.div`
display: flex;
justify-content: space-evenly;
font-family: 'Open Sans', sans-serif;
background-color: #000;
color: white;
text-shadow: 1px 2px 1px #333;
font-size: 1.2em;



`
const API_KEY = '3ec8de42bcc8a44738c4c555ced85ebe'
const geoCode_API_KEY = 'AIzaSyCUVZjVGcaXOpx_9L5qQ-3sGhDYVpQ7U4w'
//If geolocation is available fetch the users lat and lon.


const Weather = () => {

    const parseCoords = (lat, lon) => {
        axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${geoCode_API_KEY}`)
        .then(response => {
            let data = response.data
            console.log(data)

            setLocation({...location,city: [data.results[6].address_components[1].long_name], state: [data.results[6].address_components[3].long_name] })
        })
        .catch(err => {
            console.log(err);
        })
    }

    const getWeather = (lat, lon) => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)
        .then(weatherRes => {
            let data = weatherRes.data
            console.log(data)
            setWeather({...weather,currentTemp: [Math.floor(data.main.temp)], condition: [data.weather[0].main] })
        })
        .catch(err => {
            console.log(err)
        })
    }
    const [location, setLocation] = useState({
        city: '',
        state: '',

    })
//I could have put these in one piece of state but didnt see the benefit.
    const [weather, setWeather] = useState({
        currentTemp: 0,
        condition: '',
    })

    useEffect(() => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                parseCoords(lat, lon)
                getWeather(lat, lon)
            })
        }//geolocation if statement
    }, [])
    return (
        <Div>
            <p className="location">{location.city}, {location.state}</p>
    <p className="temp">{weather.currentTemp} &deg;</p>
    <p className="conditions">{weather.condition}</p>
        </Div>
    );
}

export default Weather;
