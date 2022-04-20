<template>
  <div class="base-alert">
    <div class="base-alert__background" @click="$emit('closeAlert')"></div>
    <div class="base-alert__inner">
      <div class="base-alert__pop-up">
        <span class="base-alert__message">
          Вы уверены что хотите удалить пост?
        </span>
        <div class="base-alert__btns">
          <button class="base-alert__btn" @click="$emit('delete')">да</button>
          <button class="base-alert__btn" @click="$emit('cancel')">нет</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alertText: {
      type: String,
      require: false,
      default: 'Alert'
    }
  }
}
</script>

<style lang="scss" scoped>
$bgGray: rgba(168, 155, 155, 0.616);
$blue: rgb(112, 154, 185);
$blueAqua: rgb(148, 203, 243);
$blueActive: rgb(105, 189, 249);
$blueHard: rgb(54, 119, 165);
$redColor: rgb(160, 54, 54);
$redColorActive: rgb(158, 16, 16);

.base-alert {
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  &__background {
    overflow: hidden;

    width: 100%;
    height: 100%;
    background: $bgGray;
  }

  &__inner {
    position: absolute;

    width: 350px;
    height: 250px;
    background: white;
  }

  &__pop-up {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__message {
    margin: 10px;
  }

  &__btn {
    padding: 7px;
    margin: 5px;
    border: none;
    border-radius: 5px;

    background: $blue;
    color: white;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: $blueAqua;
    }
    &:active {
      background: $blueActive;
    }
    &:not(:last-child) {
      &:hover {
        background: $redColor;
      }
      &:active {
        background: $redColorActive;
      }
    } 
    
    &_active {
      background: $blueActive;
    }
  }
}



</style>