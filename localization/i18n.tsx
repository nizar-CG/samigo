import i18n, { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, fr } from "./translations";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORE_LANGUAGE_KEY = "settings.lang";

interface LanguageDetectorPlugin extends Module {
    type: 'languageDetector';
    async: boolean;
    detect: (callback: (lang: string) => void) => void;
    cacheUserLanguage: (language: string) => void;
}

const languageDetectorPlugin: LanguageDetectorPlugin = {
    type: 'languageDetector',
    async: true,
    detect: async (callback: (lang: string) => void) => {
        try {
            const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
            if (language) {
                callback(language);
            } else {
                callback('fr');
            }
        } catch (error) {
            console.log('Error reading language', error);
        }
    },
    cacheUserLanguage: async (language: string) => {
        try {
            await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
        } catch (error) {
            console.log('Error storing language', error);
        }
    },
};

const resources = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
};

i18n.use(languageDetectorPlugin) 
.use(initReactI18next).init({
    resources,
    compatibilityJSON: 'v3',
    // fallback language is set to english
    fallbackLng: "fr",
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;