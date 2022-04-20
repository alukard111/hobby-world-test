import { random, typePostsFalse } from '@/helpers/common.js'

export default {
  SET_PAGINATION_IN_STATE(state, payload) {
    state.pagination = []
    for (let i = 1; i <= payload.lenghtPageList; i++) {
      const cloneTemplatePage = JSON.parse(JSON.stringify(state.templatePage))
      cloneTemplatePage.numberPage = String(i)
      // подумать что делать с этим кастылем 
      cloneTemplatePage.isActivePage = i === 1 ? true : false
      cloneTemplatePage.keyPage = random(1000000)
      state.pagination.push(cloneTemplatePage)
    }
  },

  IS_ACTIVE_PAGE_SET_TRUE(state, payload) {
    state.pagination[payload.index].isActivePage = true
    state.pagination = JSON.parse(JSON.stringify(state.pagination))
  },

  IS_ACTIVE_PAGE_SET_FALSE(state) {
    const pageActive = state.pagination.find((page) => {
      if (page.isActivePage) { return page }
    })
    pageActive.isActivePage = false
  },

  SET_FIRST_ACTIVE_PAGE(state) {
    state.pagination[0].isActivePage = true
  },
  SET_LAST_ACTIVE_PAGE(state) {
    state.pagination[state.pagination.length - 1].isActivePage = true
  },

  SET_PREV_PAGE(state) {
    const pageActive = state.pagination.findIndex((page) => {
      if (page.isActivePage) { return page }
    })
    if (!(pageActive <= 0)) {
      state.pagination[pageActive].isActivePage = false
      state.pagination[pageActive - 1].isActivePage = true
    } else {
      return false
    }
  },
  SET_NEXT_PAGE(state) {
    const pageActive = state.pagination.findIndex((page) => {
      if (page.isActivePage) { return page }
    })
    if (!(pageActive >= (state.pagination.length - 1))) {
      state.pagination[pageActive].isActivePage = false
      state.pagination[pageActive + 1].isActivePage = true
    } else {
      return false
    }
  }
  
}