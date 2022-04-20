import state from './modulePostsState.js';
import mutations from './modulePostsMutations.js';
import actions from './modulePostsActions.js';
import getters from './modulePostsGetters.js';

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};