import axios from "axios";

const state = {
  modules: null,
};
const getters = {
  hasModule: (state) => !!state.modules,
  getModulesCount: (state) => state.modules.length,
  getModules: (state) => state.modules,
};
const actions = {
  addModule({ dispatch }, module) {
    axios({
      method: "post",
      url: "modules/add",
      data: {
        mac_address: module.mac_address,
        owner: module.owner,
        name: module.name,
      },
    }).then(() => {
      dispatch("getAllModules");
    });
  },
  getAllModules({ commit }, userId) {
    axios({
      method: "post",
      url: "modules/get",
      data: {
        owner: userId,
      },
    }).then((res) => {
      commit("setModule", res.data.modules);
    });
  },
};
const mutations = {
  setModules(state, modules) {
    state.modules = modules;
  },
  deleteModules(state) {
    state.modules = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
