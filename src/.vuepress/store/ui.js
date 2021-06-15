const DEVICES = require('../constants/devices');

export default {
    namespaced: true,
    state: {
        deviceType: null,
    },
    getters: {
        isMobile(state) {
            return state.deviceType === DEVICES.MOBILE;
        },
        isTablet(state) {
            return state.deviceType === DEVICES.TABLET;
        },
        isDesktop(state) {
            return state.deviceType === DEVICES.DESKTOP;
        },
    },
    mutations: {
        SET_DEVICE_TYPE(state, deviceType) {
            if (!Object.values(DEVICES).includes(deviceType)) {
                console.error('Wrong device type');
                return;
            }
            
            state.deviceType = deviceType;
        }
    },
    actions: {},
}