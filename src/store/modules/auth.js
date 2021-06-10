import axios from "axios";

const state = {
  user: null,
  admin: null,
  jwt: null,
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  isAdmin: (state) => state.admin,
  getUser: (state) => state.user,
  getId: (state) => state.user.id,
  getUsername: (state) => state.user.name,
  getEmail: (state) => state.user.email,
  getJwt: (state) => state.jwt,
};
const actions = {
  async Register({ dispatch }, form) {
    await axios.post("register", form);
    await dispatch("LogIn", form);
  },
  async LogIn({ commit }, data) {
    commit("setUser", data.user);
    commit("setAdmin", data.user.is_admin);
    commit("setJwt", data.token);
  },
  async LogOut({ commit }) {
    commit("logout", null);
  },
};
const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  logout(state) {
    state.user = null;
    state.admin = null;
    state.jwt = null;
  },
  setAdmin(state, bool) {
    state.admin = bool;
  },
  setJwt(state, jwt) {
    state.jwt = jwt;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
