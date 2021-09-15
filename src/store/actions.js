export default {
  clearOptions({commit}) {
    commit('setEndMinutes', '');
    commit('setEndTime', '');
  },
};
