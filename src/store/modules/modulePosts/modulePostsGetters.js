import { returnStatusTypeList } from '@/helpers/common.js'

export default {
  GET_POST_LIST(state, getters, rootState) {
    const whatActivePage = rootState.pagination.pagination.find((page) => { return page.isActivePage ? true : false })

    let firstIndex = Number(whatActivePage?.numberPage) === 1 ? 0 : (Number(whatActivePage?.numberPage)-1)*10
    let lastIndex = Number(whatActivePage?.numberPage) * 10

    return state.postList.slice(firstIndex, lastIndex)
  },

  GET_TITLE_POST: state => index => {
    if (typeof index === 'number') {
      return state.postList[index].title
    } else {
      return state.templatePost.title
    }
  },
  GET_DESC_POST: state => index => {
    if (typeof index === 'number') {
      return state.postList[index].description
    } else {
      return state.templatePost.body
    }
  },
  GET_GROUP_POST: state => index => {
    if (typeof index === 'number') {
      return state.postList[index].type
    } else {
      return state.templatePost.type
    }
  },
}