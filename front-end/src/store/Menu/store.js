import getters from "./getters";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

export default {
  state: () => state,
  getters,
  actions,
  mutations,
};
