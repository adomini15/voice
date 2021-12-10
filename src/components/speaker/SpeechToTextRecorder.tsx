// external
import {Subscription} from "rxjs";

// internal
import {useSpeechToText} from "../../hooks/useSpeechToText";
import {useEffect, useState} from "react";


// icons
import { mic, micOff } from 'ionicons/icons';

import exportOnlyNativePlatform from "../../utils/rendering/exportOnlyNativePlatform";
import {IonIcon} from "@ionic/react";

const SpeechToTextRecorder: React.FC<{
    onChange: Function
}> = ({onChange}) => {
    // creating a new subscription
    let speechToTextSub:Subscription;

    // manage states
    const { isSpeechSupported, hasPermission, permissionStatus, listenForSpeech, takePermission, stopListening } = useSpeechToText('es-ES', 'Titule el Evento');

    // when component be mounted and unmounted
    useEffect(() => {


        return () => {
            speechToTextSub?.unsubscribe();
            stopListening().then();
        };
    }, []);

    // handlers
    const onRecord = async () => {
        speechToTextSub = listenForSpeech().subscribe((results) => {
            onChange(results)
         });
    }

   //disabled={ !hasPermission! && !permissionStatus }

    return <div>
        {
            isSpeechSupported && (hasPermission ?
                <IonIcon onClick={onRecord}
                         icon={mic}
                />
                :
                <IonIcon  onClick={ takePermission }
                          icon={micOff}
                          color={ permissionStatus == 'DENIED' ? 'danger' : 'dark' }
                />
            )
        }

    </div>
}

export default exportOnlyNativePlatform(SpeechToTextRecorder);