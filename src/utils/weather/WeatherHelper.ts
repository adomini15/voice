import {openWeatherConfig} from "../../.openWeatherConfig";
import {Coordinates} from "../../types/Coordinates";
import {Weather} from "../../types/Weather";

const weather = require('openweather-apis');
weather.setLang('es')
weather.setAPPID(openWeatherConfig.API_KEY)

export class WeatherHelper {
    private constructor() {}

    static getAllWeatherInfo(coordinates: Coordinates) : Promise<Weather> {
        try {
            weather.setCoordinate(coordinates.latitude, coordinates.longitude)

            return new Promise((resolve, reject) => {
                weather.getAllWeather( (err:any, result:any) => {
                    if(err) reject(err);

                    resolve({
                        description: result.weather[0].description,
                        icon: `http://openweathermap.org/img/w/${result.weather[0].icon}.png`,
                        state: result.name,
                        country: result.sys.country,
                        temperature: result.main.temp,
                        humidity: result.main.humidity,
                        pressure: result.main.pressure
                    })
                })
            })
        } catch (error) {
            throw error
        }
    }
}