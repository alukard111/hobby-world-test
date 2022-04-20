<template>
  <div class="base-entry-field entry-field">
    <div class="entry-field__inner">
       <label class="entry-field__label">
          {{ title }}
        <textarea 
          class="entry-field__edit"
          v-if="!inputStyle"
          :value="valueEdit"
          @input="$emit('input', $event.target.value)"
          type="text"
        >
        </textarea>
        <input
          class="entry-field__edit entry-field__edit_input"
          v-if="inputStyle"
          :value="valueEdit"
          @input="$emit('input', $event.target.value)"
          type="text"
        >
      </label>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
      default: 'Поле ввода'
    },
    valueEdit: {
      type: String,
      require: false,
      default: 'value'
    },
    inputStyle: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-field {
  width: 100%;
  height: 100%;

		&__edit {
      min-height: 150px;
      height: 100%;
      width: 100%;
      margin: 10px 0;
      padding: 10px;

      resize: none;
      outline: none;
		}

    &__edit_input {
      min-height: inherit;
    }
}

</style>