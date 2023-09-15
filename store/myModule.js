// store/myModule.js

export default {
  state: {
    myVariable: 'valeur initiale',
  },
  mutations: {
    modifierVariable(state, nouvelleValeur) {
      state.myVariable = nouvelleValeur;
    },
  },
  actions: {
    modifierVariable({ commit }, nouvelleValeur) {
      commit('modifierVariable', nouvelleValeur);
    },
  },
  getters: {
    myVariable: state => state.myVariable,
  },
};
