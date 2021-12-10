// external
import {useEffect, useState} from "react";
import { Capacitor } from  "@capacitor/core"

// internal
import {SpeechToTextHelper} from "../utils/speaker/SpeechToTextHelper";

export const useSpeechToText = ( language:string, prompt?:string) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [permissionStatus, setPermissionStatus ] = useState<'ACCEPTED' | 'DENIED' | null>(null);
    const [isSpeechSupported, setIsSpeechSupported] = useState<boolean | null>(null)

    // when element be mounted
    useEffect(() => {
            (async function() {
                try {
                    setIsSpeechSupported(await SpeechToTextHelper.isSpeechSupported());
                    setHasPermission(await SpeechToTextHelper.hasPermission())
                } catch (error) {
                    throw error;
                }
            })();
    }, []);

    const listenForSpeech = () => {
        try {
            return SpeechToTextHelper.listenForSpeech(language, prompt)
        } catch (error) {
            throw error;
        }
    }

    const stopListening = async () => {
        try {
            await SpeechToTextHelper.stopListening();
        } catch (error) {
            throw error;
        }
    }

    const takePermission = async () => {
        try {
            await SpeechToTextHelper.getPermission()
            setHasPermission(await SpeechToTextHelper.hasPermission())
            setPermissionStatus('ACCEPTED')
        } catch (error) {
            setPermissionStatus('DENIED')
        }
    }

    return {
        hasPermission,
        permissionStatus,
        isSpeechSupported,
        takePermission,
        listenForSpeech,
        stopListening,
    }
}