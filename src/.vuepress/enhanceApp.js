import Vuex from 'vuex'
import 'vue-js-modal/dist/styles.css'
import store from './store';
import { appScreens } from './constants/screens';

let VModal;

if (typeof window !== 'undefined') {
  VModal = require('vue-js-modal/dist/index.nocss.js').default;
} else {
  VModal = require('vue-js-modal/dist/ssr.nocss').default;
}

import 'vue-js-modal/dist/styles.css';

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
                  setTimeout(() => {
                    store.commit('ui/SET_DEVICE_TYPE', deviceType);
                  })
              }
          });
      });
    }
    
    Vue.use(VModal);
    Vue.use(Vuex);
    Vue.mixin({
      store,
    });
  };
