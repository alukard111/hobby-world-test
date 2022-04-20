<template>
  <div class="making-post">
    <div class="making-post__pop-up_background" @click="$emit('closePopUp')"></div>
    <div class="making-post__pop-up-wrapper">
      <div class="making-post__pop-up">
        <div class="making-post__line">
          <label class="making-post__label">
            <BaseEntryField 
              v-model="setTitleValue"
              :valueEdit="titleValue"
              :title="this.titleEntryField"
              :inputStyle="true"
            />
          </label>
        </div>
        <div class="making-post__line">
          <label class="making-post__label">
            <BaseEntryField 
              v-model="setDescriptionValue"
              :title="descEntryField"
              :valueEdit="this.descriptionValue"
              />
          </label>
        </div>
        <div class="making-post__line">
          <h4 class="making-post__select-title">
            Категория
          </h4>
          <select 
            :value="setPostGroupValue"
            v-model="setPostGroupValue"
            name="select"
            class="making-post__select"
          >
            <option value="music">music</option>
            <option value="game">game</option>
            <option value="movie">movie</option>
            <option value="lifestyle">lifestyle</option>
          </select>
        </div>
        <div class="making-post__line">
          <button class="making-post__btn" @click="$emit('save')">
            Сохранить
          </button>
          <button class="making-post__btn" @click="$emit('leave')">
            Уйти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import BaseEntryField from "./BaseEntryField.vue"

export default {
  components: {
    BaseEntryField
  },

  props: {
    titleValue: {
      type: String,
      require: false,
      default: 'Title'
    },
    descriptionValue: {
      type: String,
      require: false,
      default: 'Desc'
    },
    selectValue: {
      type: String,
      require: false,
      default: 'music'
    },
    id: {
      type: String || Number,
      require: false,
      default: 'id'
    },
    postIndex: {
      type: Number,
      require: false,
      default: null
    },
  },

  data: () => ({
    titleEntryField: 'Заголовок',
    descEntryField: 'Пост',
  }),

  computed: {
    ...mapGetters('posts', {
      getTitlePost: 'GET_TITLE_POST',
      getDescPost: 'GET_DESC_POST',
      getGroupPost: 'GET_GROUP_POST',
    }),

    setTitleValue: {
      get() {
        return this.getTitlePost(this.postIndex)
      },
      set(value) {
        this.setTitle({ value: value, index: this.postIndex })
      }
    },
    setDescriptionValue: {
      get() {
        return this.getDescPost(this.postIndex)
        },
      set(value) {
        this.setDescription({ value: value, index: this.postIndex })
      }
    },

    setPostGroupValue: {
      get() {
        return this.getGroupPost(this.postIndex)
        },
      set(value) {
        this.setGroupPost({ value: value, index: this.postIndex })
      }
    },
  },

  methods: {
    ...mapMutations('posts', {
       setTitle: 'SET_TITLE_IN_POST',
       setDescription: 'SET_DESCRIPTION_IN_POST',
       setGroupPost: 'SET_GROUP_POST'
    })
  }
}
</script>

<style lang="scss" scoped>
$bgGray: rgba(168, 155, 155, 0.616);
$blue: rgb(112, 154, 185);
$blueAqua: rgb(148, 203, 243);
$blueActive: rgb(105, 189, 249);
$blueHard: rgb(54, 119, 165);
$white: white;
.making-post {
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

		&__pop-up {
      width: 100%;
      height: 100%;

			&_background { 
        width: 100vw;
        height: 100vh;
        background: $bgGray;

        @media (max-width: 680px) {
          width: 100%;
          height: 100%;
        }
			}
		}

		&__pop-up-wrapper {
      max-width: 650px;
      width: 100%;
      height: 500px;

      position: absolute;
      background: $blueHard;

      @media (max-width: 680px) {
        max-width: 370px;
      } 
		}

		&__line {
      max-width: calc(100% - 50px);
      margin: 20px;

      &:not(:nth-last-child(1)) {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      &:last-child {
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }
		}

    &__label {
      display: flex;
      flex-direction: column;
      color: $white;
    }

		&__title-edit {
      width: 100%;
      margin: 10px 0;
      padding: 10px;
      outline: none;
		}

		&__decs-edit {
      width: 100%;
      height: 100%;
      min-height: 150px;
      margin: 10px 0;
      padding: 10px;

      resize: none;
      outline: none;
		}

    &__select{
      width: 50%;
      padding: 5px;
      margin: 10px 0 0 0;

      &-title {
        margin: 0;
        color: $white;
      }
    }

		&__btn {
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
    }
}


</style>