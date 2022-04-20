import { random, typePostsFalse } from '@/helpers/common.js'

export default {
  SET_POST_LIST(state, payload) {
    localStorage.setItem('postList', JSON.stringify(payload.json))
    state.postList = payload.json
  },

  SET_TYPES_LIST(state, payload) {
    localStorage.setItem(`${ payload.typeGroup }`, payload.list)
  },

  SELECT_GROUP_OF_POST(state, payload) {
    typePostsFalse(state.typeGroupLists)
    state.typeGroupLists[payload.index].status = true
  },
  SELECT_SORT_OF_POST(state, payload) {
    typePostsFalse(state.sortList)
    state.sortList[payload.index].status = true
  },

  SET_SELECT_FILTER_FROM_LOCALSTORAGE(state, payload) {
    state[payload.filterListName] = JSON.parse(localStorage.getItem(payload.filterListName))
  },
  SET_SELECT_FILTER_IN_LOCALSTORAGE(state, payload) {
    localStorage.setItem(payload.filterListName, JSON.stringify(state[payload.filterListName]))
  },

  SET_TITLE_IN_POST(state, payload) {
    if (typeof payload.index === 'number') {
      state.postList[payload.index].title = payload.value
    } else {
      state.templatePost.title = payload.value
    }
  },
  SET_DESCRIPTION_IN_POST(state, payload) {
    if (typeof payload.index === 'number') {
      state.postList[payload.index].body = payload.value
    } else {
      state.templatePost.body = payload.value
    }
  },
  SET_GROUP_POST(state, payload) {
    if (typeof payload.index === 'number') {
      state.postList[payload.index].type = payload.value
    } else {
      state.templatePost.type = payload.value
    }
  },

  SET_TEMPLATE_ID(state) {
    state.templatePost.id = random(1000000, 200)
  }

}