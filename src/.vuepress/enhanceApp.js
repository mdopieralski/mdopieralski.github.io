import Vuex from 'vuex'
import 'vue-js-modal/dist/styles.css'
import store from './store';
import { appScreens } from './constants/screens';

export default ({
    Vue, 
  }) => {
    if (typeof window !== 'undefined') {
      Object.keys(appScreens)
      .forEach(deviceType => {
          const match = window.matchMedia(appScreens[deviceType])

          if (match.matches) {
              store.commit('ui/SET_DEVICE_TYPE', deviceType);
          }

          match.addListener((event) => {
              if (event.matches) {
                  store.commit('ui/SET_DEVICE_TYPE', deviceType);
              }
          });
      });
    }
    
    Vue.use(Vuex);
    Vue.mixin({
      store,
    });
  };
