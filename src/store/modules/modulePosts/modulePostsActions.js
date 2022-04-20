import { urtFilteredList } from '@/helpers/common.js'


export default {
  TOGGLE_CATEGORY_GROUP({ commit }, index) {
    commit({
      type: 'SELECT_GROUP_OF_POST',
      index: index
    })
  },
  TOGGLE_SORT({ commit }, index) {
    commit({
      type: 'SELECT_SORT_OF_POST',
      index: index
    })
  },

  
  ACTION_SET_FILTER_FROM_LOCALSTORAGE({ commit }, filterListName) {
    commit({ type: 'SET_SELECT_FILTER_FROM_LOCALSTORAGE', filterListName: filterListName })
  },
  ACTION_SET_FILTER_IN_LOCALSTORAGE({ commit }, filterListName) {
    commit({ type: 'SET_SELECT_FILTER_IN_LOCALSTORAGE', filterListName: filterListName })
  },


  async WRITE_POSTS_LIST({ commit, state }) {
    const typeGroup = state.typeGroupLists.find((group) => { if (group.status) { return group.name } })
    const sortObj = state.sortList.find((list) => { if (list.status) { return list.status } })
    const url = urtFilteredList(typeGroup, sortObj)

    try {
      const response = await fetch(url)
      const json = await response.json()
      commit({
        type: 'SET_POST_LIST',
        json: json,
      })
    } catch (error) {
      console.log('error', error)
    }
  },

  async ADD_POST({ commit, state }) {
    commit({ type: 'SET_TEMPLATE_ID' })
    try {
      const response = await fetch('https://dreddyi.ru/json/posts', {
        method: 'POST',
        body: JSON.stringify(state.templatePost),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
    } catch (error) {
      console.log(error)
    }
  },

  async EDIT_POST({ commit, state, dispatch }, payload) {
    try {
      const response = await fetch(`https://dreddyi.ru/json/posts/${ payload.id }`, {
        method: 'PUT',
        body: JSON.stringify(state.postList[payload.index]),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
    } catch (error) {
      console.log(error)
    }
    dispatch('WRITE_POSTS_LIST')
  },

  async DELETE_POST({ state, dispatch }, payload) {
    try {
      const response = await fetch(`https://dreddyi.ru/json/posts/${ payload.id }`, {
        method: 'DELETE'
      })
      console.log(state.postList[payload.index], ' state.postList[payload.index]')
      const json = await response.json()
    } catch (error) {
      console.log(error)
    }
    dispatch('WRITE_POSTS_LIST')
  }

}