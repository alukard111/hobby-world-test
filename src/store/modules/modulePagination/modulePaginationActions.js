import { random, urtFilteredList } from '@/helpers/common.js'
import { type } from 'os'
// import { response } from 'express'

export default {
  ACTION_SET_PAGINATION_LIST({ commit, getters }) {
    commit({
      type: 'SET_PAGINATION_IN_STATE',
      lenghtPageList: getters.GET_PAGINATION
    })
  },
  ACTION_SET_ACTIVE_PAGE({ commit }, index) {
    commit({ 
      type: 'IS_ACTIVE_PAGE_SET_FALSE',
    })
    commit({ 
      type: 'IS_ACTIVE_PAGE_SET_TRUE',
      index: index 
    })
  },

  ACTION_SET_FIRST_ACTIVE_PAGE({ commit }) {
    commit({ 
      type: 'IS_ACTIVE_PAGE_SET_FALSE',
    })
    commit({
      type: 'SET_FIRST_ACTIVE_PAGE',
    })
  },
  ACTION_SET_LAST_ACTIVE_PAGE({ commit }) {
    commit({ 
      type: 'IS_ACTIVE_PAGE_SET_FALSE',
    })
    commit({
      type: 'SET_LAST_ACTIVE_PAGE',
    })
  },

  ACTION_SET_NEXT_ACTIVE_PAGE({ commit }) {
    commit({
      type: 'SET_NEXT_PAGE',
    })
  },
  ACTION_SET_PREV_ACTIVE_PAGE({ commit }) {
    commit({
      type: 'SET_PREV_PAGE',
    })
  },
}