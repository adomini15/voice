import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from "@awesome-cordova-plugins/speech-recognition";
import { Capacitor } from "@capacitor/core";

export class SpeechToTextHelper {
    private static androidOptions:SpeechRecognitionListeningOptionsAndroid = {
        showPopup: true,
        language: 'es-ES',
        prompt: 'Say something'
    }
    private static iosOptions: SpeechRecognitionListeningOptionsIOS = {
        language: 'es-ES',
    }

    private constructor() {
    }

    static listenForSpeech(language:string, prompt?:string) {
        try {

            let options = {};

            // detect platform to determine options chose
            switch (Capacitor.getPlatform()) {
                case 'ios':
                    options = { language, prompt, ...this.androidOptions}
                    break;
                case 'android':
                    options = { language, ...this.iosOptions }
                    break;
                default:
                    options = { language, prompt, showPopup: true }
                    break;
            }

            return SpeechRecognition.startListening(options)
        } catch (error) {
            throw error;
        }
    }

    static async stopListening() {
        try {
            await SpeechRecognition.stopListening();
        } catch (error) {
            throw error;
        }
    }

    static async isSpeechSupported () {
        try {
            return await SpeechRecognition.isRecognitionAvailable();
        } catch (error) {
            throw error;
        }
    }

    static async getPermission () {
        try {
            await SpeechRecognition.requestPermission();
        } catch (error) {
            throw error
        }
   }

    static async hasPermission () {
       try {
           return await SpeechRecognition.hasPermission();
       } catch (error) {
           throw error
       }
   }

    static async getSupportedLanguages() {
        try {
            return await SpeechRecognition.getSupportedLanguages();
        } catch (error) {
            throw error
        }
   }
}