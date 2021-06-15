import { ROUTES } from '../constants/routes';

export default function getCurrentRouteName() {
    if (typeof window === 'undefined'){
        return 'HOME'
    }

    const isGithub = typeof window === 'undefined'
        ? false
        : window.location.href.includes('github');
    const currentHref = isGithub 
        ? window.location.pathname.replace('/neatual.com/', '')
        : window.location.pathname;
        

    return Object.keys(ROUTES)
        .reduce((acc, routeKey) => {
            const route = ROUTES[routeKey];
            const currentRoute = Object.keys(route)
                .find(langCode => {
                    const langUrl = route[langCode];
                    return langUrl === currentHref;
                })
            
            if (currentRoute) {
                acc = routeKey;
            }

            return acc;
        }, HOME);
}