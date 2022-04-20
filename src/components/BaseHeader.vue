<template>
  <div class="base-header">
    <div class="base-header__nav-title">
      <span class="base-header__nav-title-text">
        Группировать по: 
      </span>
    </div>
    <div class="base-header__line">
      <nav class="base-header__nav">
        <ul class="base-header__group-list">
          <li 
            class="base-header__group-item"
            v-for="type, index in typeLists"
            :key="index+type.name"
          >
            <a 
              href="" 
              class="base-header__item-toggle"
              :class="{ 'base-header__item-toggle_active' : type.status }"
              @click.prevent="toggleCategory(index)"
            >
              {{ type.name }}
            </a> 
          </li>
        </ul>
      </nav>
      <template>
        <div class="base-header__btn-loader-wrapper base-btn">
          <button class="base-header__btn-loader" @click="loadPosts()">Загрузить</button>
        </div>
      </template>
    </div>
    <!-- сортировка -->
    <div class="base-header__sort-title">
      <span class="base-header__sort-title-text">
        Сортировать по:
      </span>
    </div>
    <div class="base-header__line">
      <div class="base-header__sort">
        <ul class="base-header__sort-list">
          <li 
            class="base-header__sort-item"
            v-for="sort, index in sortList"
            :key="sort.key"
          >
            <a 
              href=""
              class="base-header__sort-item-btn"
              :class="{ 'base-header__sort-item-btn_active' : sort.status }"
              @click.prevent="toggleSort(index)"
            >
              {{ sort.name }}
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  mounted() {
    this.checkItFilterInLocalStorage('typeGroupLists')
    this.checkItFilterInLocalStorage('sortList')
  },

  computed: {
    ...mapState( 'posts',{
      typeLists: 'typeGroupLists',
      sortList: 'sortList'
    })
  },

  methods: {
    ...mapActions('pagination', {
      actionSetPagination: 'ACTION_SET_PAGINATION_LIST'
    }),
    ...mapActions('posts', {
      writePostsList: 'WRITE_POSTS_LIST',
      toggleCategory: 'TOGGLE_CATEGORY_GROUP',
      toggleSort: 'TOGGLE_SORT',
      setFilterFromLocalStorage: 'ACTION_SET_FILTER_FROM_LOCALSTORAGE',
      setFilterInLocalStorage: 'ACTION_SET_FILTER_IN_LOCALSTORAGE',
    }),

    async loadPosts() {
      await this.writePostsList()
      this.actionSetPagination()
      this.setFilterInLocalStorage('typeGroupLists')
      this.setFilterInLocalStorage('sortList')
    },

    checkItFilterInLocalStorage(keyName) {
      if (this.isItInLocalStorage(keyName)) {
        this.setFilterFromLocalStorage(keyName)
      }
    },

    isItInLocalStorage(key) {
      return localStorage.getItem(key) === null ? false : true
    },
  }
}

</script>

<style lang="scss" scoped>
$blue:rgb(112, 154, 185);
$blueAqua: rgb(148, 203, 243);
$blueActive: rgb(105, 189, 249);
$grayOpacity: rgba(88, 83, 83, 0.301);
$grayItemColor: rgba(101, 97, 97, 0.587);
$white: white;
$black: black;

li {
   list-style-type: none;
}

a {
  text-decoration: none;
  color: $black;
}

.base-header {
  margin: 20px 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid $grayOpacity;

  &__line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 640px) {
      align-items: flex-start;
    }
  }

  &__nav {
    border-bottom: 3px solid $blue;
    padding: 5px;
  }

  &__group-list {
    display: flex;
    padding: 0;
    margin: 0;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }

  &__group-item {
    
    &:nth-child(1) {
      margin-right: 20px;
    }
    &:not(:nth-child(1)) {
      margin: 0 20px;
      @media (max-width: 640px) {
      margin-top: 5px;
    }
    }
  }

  &__item-toggle {
    color: $grayItemColor;
    &:hover {
      color: $blue;
    }
    
    &_active {
      color: $blueActive;
      position: relative;
    }

    @media (max-width: 640px) {
      font-size: 14px;
    }
  }


  &__btn-loader {
    padding: 7px;
    margin: 5px;
    background: $blue;

    border: none;
    border-radius: 5px;

    color: $white;
    transition: background 0.2s;
    cursor: pointer;
    &:hover {
      background: $blueAqua;
    }
    &:active {
      background: $blueActive;
    }

    &_active {
      background: $blueActive;
    }
  }

  &__sort {
    width: 100%;
    height: 100%;
  }

  &__sort-list {
    display: flex;
    padding: 0;
  }

  &__sort-item {
    &-btn {
      padding: 7px;
      margin: 5px;

      border-radius: 5px;
      color: $white;
      background: $blue;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: $blueAqua;
      }
      &:active {
        background: $blueActive;
      }

      &_active {
        background: $blueActive;
      }
    }
  }
  &__nav-title, &__sort-title {
    margin: 10px 0 5px 0;
    padding: 5px;
    font-weight: 700;
  }
}

</style>