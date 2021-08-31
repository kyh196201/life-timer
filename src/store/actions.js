export default {
  clearOptions({commit}) {
    commit('setEndMinutes', '');
    commit('setEndTime', '');
    commit('setMode', 'minute');
  },
};
