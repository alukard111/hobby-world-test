 <template>
  <div class="base-post">
    <BaseAlert 
      v-if="deleteState"
      @delete="deleteAndCloseAlert()"
      @cancel="closeAlertDlt"
      @closeAlert="closeAlertDlt"
    />
    <MakingPost 
      v-if="editState"
      @closePopUp="closeEditPopUp()"
      @leave="closeEditPopUp()"
      @save="saveAndExitPost()"
      :titleValue="title"
      :descriptionValue="description"
      :selectValue="group"
      :postIndex="index"
    />
    <div class="base-post__line">
      <h4 class="base-post__title">
        {{ title }}  
      </h4>
      <h4 class="base-post__title">
        ID: {{ id }} 
      </h4>
    </div>
    <div class="base-post__line">
      <p class="base-post__description"> 
        {{ getDescription }}
      </p>
    </div>
    <div class="base-post__line">
      <span class="base-post__type-group">
        Категория: {{ group }}
      </span>
    </div>
    <div 
      class="base-post__line" 
      :class="{ 'base-post__line_small-post' : !this.getLengthDesc }"
    >
      <a 
        class="base-post__more-text" 
        @click.prevent="toggleShowAllText()" 
        v-if="getLengthDesc"
      >
        {{ this.showTextBtn }}
      </a>
      <div class="base-post__setting">
        <a 
          href=""
          class="base-post__eddit"
          @click.prevent="openEditPopUp()"
        >
          <svg class="base-post__eddit-img" viewBox="0 0 66 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
              <g id="Pencil" sketch:type="MSLayerGroup" transform="translate(2.000000, 1.000000)" stroke="#6B6C6E" stroke-width="2">
                <path d="M7.5,43.7 L0,62 L18.3,54.5" id="Shape" sketch:type="MSShapeGroup"></path>
                <path d="M19.4,53.9 C18.5,54.8 17.1,54.8 16.2,53.9 L17,49.9 L12.2,49.9 L12.2,45.1 L8.2,45.9 C7.3,45 7.3,43.6 8.2,42.7 L50.2,0.7 C51.1,-0.2 52.5,-0.2 53.4,0.7 L61.5,8.8 C62.4,9.7 62.4,11.1 61.5,12 L19.4,53.9 L19.4,53.9 Z" id="Shape" sketch:type="MSShapeGroup"></path>
                <path d="M12.1,45 L48.4,8.7" id="Shape" sketch:type="MSShapeGroup"></path>
                <path d="M17,49.9 L53.3,13.6" id="Shape" sketch:type="MSShapeGroup"></path>
                <path d="M45.2,5.5 L56.5,16.8" id="Shape" sketch:type="MSShapeGroup"></path>
              </g>
            </g>
          </svg>
        </a>
        <a 
          href=""
          class="base-post__delete"
          @click.prevent="showAlertDlt()"
        >
          <svg class="base-post__delete-img" version="1.1"  id="Capa_1"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  x="0px"  y="0px"  viewBox="0 0 612 612"  xml:space="preserve">
            <g>
              <g fill="gray">
                <polygon points="424.032,443.7 443.7,424.032 325.667,306 443.7,187.967 424.032,168.3 306,286.333 187.967,168.3 168.3,187.967 
                  286.333,306 168.3,424.032 187.967,443.7 306,325.667 		"/>
                <path d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306
                  C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306
                  S459.64,584.182,306,584.182S27.818,459.64,27.818,306z"/>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import MakingPost from "./MakingPost.vue"
import BaseAlert from "./BaseAlert.vue"

export default {
  components: {
    MakingPost,
    BaseAlert
  },

  props: {
    title: {
      type: String,
      require: false,
      default: 'title'
    },
    description: {
      type: String,
      require: false,
      default: 'description'
    },
    group: {
      type: String,
      require: false,
      default: 'group'
    },
    id: {
      type: Number,
      require: false,
      default: 0
    },
    index: {
      type: Number,
      require: false,
      default: 0
    },
  },

  data: () => ({
    editState: false,
    showAllTextState: false,
    deleteState: false,
  }),

  computed: {
    getDescription() {
      if (this.getLengthDesc && !this.showAllTextState) {
        return this.description.split('').slice(0, 50).join('')
      } else {
        return this.description
      }
    },
    getLengthDesc() {
      return (this.description.length > 50) 
    },
    
    showTextBtn() {
      return  this.showAllTextState ? 'Свернуть' : 'Показать весь текст'
    },
  },

  methods: {
    ...mapActions('posts',{ 
      editPost: 'EDIT_POST',
      deletePost: 'DELETE_POST'
    }),

    toggleEdit() {
      this.editState = !this.editState
      this.$emit('toggleEdit', this.editState)
    },
    closeEditPopUp() {
      this.editState = false
    },
    openEditPopUp() {
      this.editState = true
    },
    saveAndExitPost() {
      this.editPost({ index: this.index, id: this.id })
      this.closeEditPopUp()
    },
    toggleShowAllText() {
      this.showAllTextState = !this.showAllTextState
    },
    showAlertDlt() {
      this.deleteState = true
    },
    closeAlertDlt() {
      this.deleteState = false
    },

    deleteAndCloseAlert(id) {
      this.deletePost({ id: this.id })
      this.closeAlertDlt()
    }
  },
}
</script>

<style lang="scss" scoped>

$blue:rgb(112, 154, 185);
$blueAqua: rgb(148, 203, 243);
$blueActive: rgb(105, 189, 249);
$black: black;
$lightGray: rgba(231, 231, 231, 0.753);
$gray: gray;
$white: white;
$redColor: rgb(160, 54, 54);

a {
  text-decoration: none;
  color: $black;
}
.base-post {
  margin: 25px 0;
  padding: 10px;
  max-width: 780px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  background: $lightGray;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &__line {
    margin: 10px;

    &:last-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &_small-post {
      justify-content: flex-end !important;
    }
  }

  &__title {
    margin: 0;
    &-edit {
      width: 90%;
      padding: 5px;
    }
  }

  &__description {
    font-size: 14px;
    width: 100%;
    word-break: break-all;

    &-edit {
      overflow: hidden;
      resize: none;
      width: 100%;
      min-height: 200px;
      height: 100%;
    }
  }

  &__type-group {
    font-size: 12px;
    color: $gray;
  }

  &__more-text {
    padding: 7px;
    border: none;
    border-radius: 5px;
    border: 1px solid $blue;

    color: $blue;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: $blueAqua;
      color: $white;
      border: 1px solid $blueAqua;
    }
    &:active {
      background: $blueActive;
      color: $white;
      border: 1px solid $blueAqua;
    }

    &_active {
      background: $blueActive;
      color: $white;
      border: 1px solid $blueAqua;
    }
  }

  &__eddit {
    &-img {
      width: 30px;
      height: 30px;
      margin: 0 10px;

      &>g>g {
        transition: all 0.2s;
      }
      &:hover>g>g {
        stroke: $redColor;
      }
    }
  }

  &__delete {
    &-img {
      width: 30px;
      height: 30px;
      margin: 0 10px;
      
      &>g>g {
        transition: all 0.2s;
      }
      &:hover>g>g {
        fill: $redColor;
      }
    }
  }
}

</style>