import { LANG_CODES } from '../constants/languages';

export default function getCurrentLanguage() {
    if (typeof window === 'undefined'){
        return LANG_CODES.PL;
    }
    
    const currentHref = window.location.href;

    if (currentHref.includes('/de/')) {
        return LANG_CODES.DE;;
    }
    
    if (currentHref.includes('/en/')) {
        return LANG_CODES.EN;
    }

    return LANG_CODES.PL;
}