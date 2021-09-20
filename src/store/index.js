import { createStore } from "vuex";
import { state } from "./State";
import { mutations } from "./Mutations";
import { actions } from "./Actions";
import { getters } from "./Getters";

const modules = {};

export default createStore({
  state,
  mutations,
  actions,
  modules,
  getters,
});
