<template>
  <div class="base-pagination">
    <div class="base-pagination__inner">
      <ul class="base-pagination__list">
        <li 
          class="base-pagination__arrow base-pagination__arrow_left-double"
          @click="$emit('goFirstPage')"
        >
           &#60;&#60;
        </li>
        <li 
          class="base-pagination__arrow base-pagination__arrow_left"
          @click="$emit('goPrevPage')"
        >
          &#60;
        </li>
        <slot>

        </slot>
        <li 
          class="base-pagination__arrow base-pagination__arrow_right" 
          @click="$emit('goNextPage')"
        >
          &#62;
        </li>
        <li 
          class="base-pagination__arrow base-pagination__arrow_right-dobule"
          @click="$emit('goLastPage')"
        >
          &#62;&#62;
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  mounted() {
    this.actionSetPaginationList()
  }, 

  beforeUpdate() {
    window.scroll(0 , 0)
  },

  computed: {
    ...mapGetters('pagination', {
      getPaginationList: 'GET_PAGINATION_LIST'
    })
  },

  methods: {
    ...mapActions('pagination', {
      actionSetPaginationList: 'ACTION_SET_PAGINATION_LIST',
      actionSetActivePage: 'ACTION_SET_ACTIVE_PAGE'
    })
  }
}


</script>

<style lang="scss" scoped>
$gray: gray;
$white: white;
li {
  list-style: none;
  cursor: pointer;
}
.base-pagination {
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: flex-end;

		&__inner {
      width: 100%;
		}

		&__list {
      display: flex;
      justify-content: center;
      padding: 0;
		}

		&__arrow {
      margin: 0 10px;
		}

		&__page-number {
      margin: 0 10px; 
      &_active {
        width: 20px;
        height: 20px;
        background: $gray;
        border-radius: 50%;
        
        color: $white;
        text-align: center;
      }
		}
}

</style>