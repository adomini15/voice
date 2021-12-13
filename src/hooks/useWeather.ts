import {useState} from "react";
import {Weather} from "../types/Weather";
import {Coordinates} from "../types/Coordinates";
import {WeatherHelper} from "../utils/weather/WeatherHelper";

export const useWeather = () => {
    const [weather, setWeather] = useState<Weather>();

    const takeWeather = async (coordinates: Coordinates) => {
        try {
            const weather = await WeatherHelper.getAllWeatherInfo(coordinates);
            setWeather(weather);
        } catch (error) {
            throw error;
        }
    }

    return {
        weather,
        takeWeather
    }
}