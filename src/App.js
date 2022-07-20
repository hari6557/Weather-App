import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Titles from "./Components/Titles";
import Weather from "./Components/Weather";
import axios from "axios";
import Charts from "./Components/Chart";
import Error from "./Components/Error";

function App() {
  const [temperature, setTemperature] = useState();
  const [maxtemperature, setMaxTemperature] = useState();
  const [mintemperature, setMinTemperature] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [humidity, setHumidity] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [labels, setLabels] = useState([]);
  const [tempmax, setTempmax] = useState([]);
  const [tempmin, setTempmin] = useState([]);
  const [hum, setHum] = useState([]);
  const [Windspeed, setWindspeed] = useState([]);

  const getWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=d388cc9c41e5c0d4bf75a2ab328a574f&units=metric`
      );
      var data = response.data;
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    setLoaded(true);

    if (city && country) {
      if (!data.list) {
        setTemperature();
        setMaxTemperature();
        setMinTemperature();
        setCity();
        setCountry();
        setHumidity();
        setDescription();
        setError(
          "Unable to get weather info!... Please check the values entered..."
        );
      } else {
        console.log(data);
        let labels = [];
        let temp_max = [];
        let temp_min = [];
        let hum = [];
        let wind_speed = [];
        let dt;
        for (let i = 0; i < data.list.length; i++) {
          dt = data.list[i];
          let date_ = dt.dt_txt.split(" ")[0];

          if (
            !labels.includes(date_) &&
            dt.dt_txt.split(" ")[1] === "12:00:00"
          ) {
            // console.log(dt.dt_txt.split(' ')[1]);
            labels.push(date_);
            temp_max.push(dt.main["temp_max"]);
            temp_min.push(dt.main["temp_min"])
            hum.push(dt.main["humidity"]);
            wind_speed.push(dt.wind["speed"]);
          }
        }
        if (labels.length !== temp_max.length) {
          labels.shift();
        }
        console.log(labels);
        console.log(temp_max);
        console.log(temp_min);
        console.log(hum);
        console.log(wind_speed);

        setTemperature(data.list[0].main.temp)
        setMaxTemperature(data.list[0].main.temp_max);
        setMinTemperature(data.list[0].main.temp_min);
        setCity(data.city["name"]);
        setCountry(data.city["country"]);
        setHumidity(data.list[0].main.humidity);
        setDescription(data.list[0].weather[0].description);
        setError("");
        setLabels(labels);
        setTempmax(temp_max);
        setTempmin(temp_min);
        setHum(hum);
        setWindspeed(wind_speed);
      }
    }
    else{
      setMaxTemperature();
      setMinTemperature();
      setTemperature();
      setCity();
      setCountry();
      setHumidity();
      setDescription();
      setError(
        "Please enter the details..."
      );
    }
  };

  useEffect(() => {
    getWeather();
  }, []);


  return (
    <div className="wrapper">
      <Titles />
      <div className="col-md-10 pt-1 mx-auto">
        <div className="jumbotron col-lg-10 mx-auto pt-4 ">
          <Form getWeather={getWeather} />
          <Weather/>
          {loading ? (
            <div className="container text-center pt-5 pb-5 mt-5 mb-5">
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          ) : error ? (
            <Error error = {error}/>
          ) : loaded ? (
            <>
              <Weather temperature={temperature} mintemperature={mintemperature}  maxtemperature={maxtemperature} city={city} country={country} humidity={humidity} description={description} error={error}/>
              <Charts labels={labels} tempmax={tempmax} tempmin={tempmin} hum={hum} windspeed={Windspeed}/>
            </>
          ) : " "}
        </div>
      </div>
    </div>
  );
}

export default App;
