import Vue from "vue";
import Vuex from "vuex";

import menus from "../store/Menu/store";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    menus,
  },
});
