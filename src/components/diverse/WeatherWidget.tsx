import {Weather} from "../../types/Weather";
import {IonBadge, IonItem} from "@ionic/react";
import "./WeatherWidget.css";

const WeatherWidget: React.FC<{
    weather: Weather
}> = ({ weather }) => {

    return <div className="WeatherWidget">
        <header>
            <img src={ weather.icon } className="weather-icon" />
            <p className="description" >{ weather.description }</p>
        </header>
        <section>
            <div className="tags" >
                <IonBadge color="primary" className="tag">
                    { weather.state }
                </IonBadge>
                <IonBadge color="primary" className="tag">
                    { weather.country }
                </IonBadge>
            </div>
            <div>
                <p><b>Temperatura:</b> <span> { weather.temperature } </span> </p>
                <p><b>Humedad:</b> <span> { weather.humidity } </span> </p>
                <p><b>Presión:</b> <span> { weather.pressure } </span> </p>
            </div>
        </section>
    </div>
}

export default WeatherWidget;