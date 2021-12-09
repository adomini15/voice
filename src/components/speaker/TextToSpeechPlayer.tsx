// external
import {useEffect} from "react";

// internal
import {useTextToSpeech} from "../../hooks/useTextToSpeech";

// resources
import playing from "../../playing.gif";
import play from "../../play.png";
import "./TextToSpeechPlayer.css"

const TextToSpeechPlayer:React.FC<{
    text:string,
    lang: 'es-ES' | 'en-EN' | 'es-US',
    size: number
}> = ({ text, lang , size}) => {
    const styles = {
        width: `${size}px`,
        height: `${size}px`
    }

    const { Speak, Stop, isStopped } = useTextToSpeech('es-US');

    // when component be mounted and unmounted
    useEffect(() => {
        return () => {
            Stop().then();
        };
    }, []);

    return <div className="text-to-speech-player">
        <button color="light" className={`${ isStopped ? '' : 'active' }`} onClick={() => isStopped ? Speak(text) : Stop()}>
           <img src={ isStopped ? play : playing } style={styles} />
        </button>
    </div>
}

export default TextToSpeechPlayer;