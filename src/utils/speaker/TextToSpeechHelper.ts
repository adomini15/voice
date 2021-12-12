import {TextToSpeech} from "@capacitor-community/text-to-speech";

export class TextToSpeechHelper {
    private constructor() {}

    static async speak(text:string, lang: string) {
       try {
           await TextToSpeech.speak({
               text,
               lang,
               rate: 1,
               pitch: 1.0,
               volume: 1.0,
               category: 'ambient',
           });
       } catch (error) {
           throw error;
       }
    }

    static async stop() {
        try {
            await TextToSpeech.stop();
        } catch (error) {
            throw error;
        }
    }

    static async getSupportedLanguages () {
        try {
            return await TextToSpeech.getSupportedLanguages();
        } catch (error) {
            throw error;
        }
    }

    static async getSupportedVoices () {
        try {
            return await TextToSpeech.getSupportedVoices();
        } catch (error) {
            throw error;
        }
    }

    static async isLanguageSupported (lang: string) {
        try {
            return await TextToSpeech.isLanguageSupported({lang});
        } catch (error) {
            throw error;
        }
    }
}