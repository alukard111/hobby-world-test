import { returnStatusTypeList } from '@/helpers/common.js'

export default {
  GET_PAGINATION(state, getters, rootState) {
    if (rootState.posts.postList?.length !== undefined) {
      return Math.ceil(rootState.posts.postList.length/10)
    }
  },

  GET_PAGINATION_LIST(state) {
    return state.pagination
  }
}