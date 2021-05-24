const DEVICES = require('./devices');

const unit = 'px';

const mobileMin = 320;
const tabletMin = 768;
const desktopMin = 1366;

module.exports = {
    tailwindScreens: {
        [DEVICES.MOBILE]: `${mobileMin}${unit}`,
        [DEVICES.TABLET]: `${tabletMin}${unit}`,
        [DEVICES.DESKTOP]: `${desktopMin}${unit}`,
    },
    appScreens: {
        [DEVICES.MOBILE]: `(min-width: ${mobileMin}${unit}) and (max-width: ${tabletMin - 1}${unit})`,
        [DEVICES.TABLET]: `(min-width: ${tabletMin}${unit}) and (max-width: ${desktopMin - 1}${unit})`,
        [DEVICES.DESKTOP]: `(min-width: ${desktopMin}${unit})`,
    }
}

