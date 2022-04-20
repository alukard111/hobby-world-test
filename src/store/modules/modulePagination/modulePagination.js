import state from './modulePaginationState.js';
import mutations from './modulePaginationMutations.js';
import actions from './modulePaginationActions.js';
import getters from './modulePaginationGetters.js';

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};