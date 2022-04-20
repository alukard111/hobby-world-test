import Vue from 'vue'
import Vuex from 'vuex'

import modulePosts from './modules/modulePosts/modulePosts.js'
import modulePagination from './modules/modulePagination/modulePagination.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    posts: modulePosts,
    pagination: modulePagination
  } 
})





