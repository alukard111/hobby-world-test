<template>
  <div class="home">
    <div class="home-container">
      <base-post
        v-for="(post, index) in getPostList"
        :key="post.id"
        :title="post.title"
        :description="post.body"
        :group="post.type"
        :id="post.id"
        :index="index"
      >
      </base-post>
      <MakingPost 
        v-if="makePopUpState"
        @closePopUp="closeMakePopUp()"
        @leave="closeMakePopUp()"
        @save="saveAndExitPost()"
      />
      <div class="home-container__btn-add-wrapper">
        <a 
          href="#"
          class="home-container__btn-add"
          @click.prevent="openMakePopUp()"
        >
          Add post
        </a>
      </div>
      <div class="home-pagination">
        <base-pagination
          @goFirstPage="goFirstPage()"
          @goLastPage="goLastPage()"
          @goPrevPage="goPrevPage()"
          @goNextPage="goNextPage()"
        >
          <li 
            v-for="(page, index) in getPaginationList"
            class="base-pagination__page-number"
            :class="{ 'base-pagination__page-number_active' : page.isActivePage }"
            :key="page.keyPage"
            @click="actionSetActivePage(index)"
          >
            {{ page.numberPage }}
          </li>
        </base-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import BasePost from "@/components/BasePost.vue"
import BasePagination from '@/components/BasePagination.vue'
import MakingPost from '@/components/MakingPost.vue'
import BaseAlert from '@/components/BaseAlert.vue'

export default {
  components: {
    BasePost,
    BasePagination,
    MakingPost,
    BaseAlert
  },

  data: () => ({
    makePopUpState: false,
    editPopUpState: false,
  }),
  
  computed: {
    ...mapGetters('pagination', {
      getPaginationList: 'GET_PAGINATION_LIST'
    }),
    ...mapGetters('posts',{
      getPostList: 'GET_POST_LIST'
    }),
  },

  methods: {
    ...mapActions('pagination', {
      actionSetPaginationList: 'ACTION_SET_PAGINATION_LIST',
      actionSetActivePage: 'ACTION_SET_ACTIVE_PAGE' ,
      goFirstPage: 'ACTION_SET_FIRST_ACTIVE_PAGE',
      goLastPage: 'ACTION_SET_LAST_ACTIVE_PAGE',
      goNextPage: 'ACTION_SET_NEXT_ACTIVE_PAGE',
      goPrevPage: 'ACTION_SET_PREV_ACTIVE_PAGE'
    }),
    ...mapActions('posts', {
      addNewPost: 'ADD_POST',
    }),

    closeMakePopUp() {
      this.makePopUpState = false
    },
    openMakePopUp() {
      this.makePopUpState = true
    },
    openEditPopUp(stateEdit) {
      this.editPopUpState = stateEdit
    },
    saveAndExitPost() {
      this.addNewPost()
      this.closeMakePopUp()
    }
  },

}
</script>

<style lang="scss" scoped>
$blueAqua: rgb(148, 203, 243);
.home {
  max-width: 968px;
  
  padding: 0 20px;
  margin: auto;
}
.home-container {
  width: 100%;
  height: 100%;

  position: relative;

  &__btn-add-wrapper {
    min-width: 50px;
    min-height: 50px;

    position: fixed;
    bottom: 100px;
    left:calc(75% + 100px);
    z-index: 2;

    @media (max-width: 1000px ) {
      left: inherit;
      right:10%;
    }
  }

  &__btn-add {
    text-decoration: none;
    color: white;
    padding: 8px;
    background: gray;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      background: $blueAqua;
    }
  }
}
.home-pagination {
  width: 100%;
  height: 100px;
  margin-top: auto;
}



</style>
