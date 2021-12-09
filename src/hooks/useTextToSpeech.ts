import {useState} from "react";
import {TextToSpeechHelper} from "../utils/speaker/TextToSpeechHelper";

export const useTextToSpeech = (lang:string) => {
    const [isStopped, setIsStopped] = useState(true);

    const Speak = async (text: string) => {
        setIsStopped(false)
        await TextToSpeechHelper.speak(text, lang)
        setIsStopped(true)
    }

    const Stop = async () => {
        await TextToSpeechHelper.stop();
        setIsStopped(false)
    }

    return {
        isStopped,
        Speak,
        Stop
    }
}