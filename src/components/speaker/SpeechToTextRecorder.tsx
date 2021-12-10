import {useSpeechToText} from "../../hooks/useSpeechToText";

const SpeechToText: React.FC = () => {
    const { isSpeechSupported } = useSpeechToText('es-ES', 'Titule el Evento')
    console.log(isSpeechSupported);

    return <div>
    </div>
}

export default SpeechToText;