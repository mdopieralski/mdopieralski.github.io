import { LANG_CODES } from './languages';

export const ROUTE_NAMES = {
    HOME: 'HOME',
    GALLERY: 'GALLERY',
    CONTACT: 'CONTACT'
};

export const ROUTES = {
    [ROUTE_NAMES.HOME]: {
        [LANG_CODES.PL]: '/',
        [LANG_CODES.EN]: '/en/',
        [LANG_CODES.DE]: '/de/',
    },
    [ROUTE_NAMES.GALLERY]: {
        [LANG_CODES.PL]: '/galeria/',
        [LANG_CODES.EN]: '/en/gallery/',
        [LANG_CODES.DE]: '/de/galerie/',
    },
    [ROUTE_NAMES.CONTACT]: {
        [LANG_CODES.PL]: '/kontakt/',
        [LANG_CODES.EN]: '/en/contact/',
        [LANG_CODES.DE]: '/de/kontakte/',
    },
};