<template>
  <div id="app">
    <header class="header">
      <BaseHeader ref='header' />
    </header>
    <router-view/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'

export default {
 components: {
   BaseHeader,
 },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Montserrat-Regular';
  src: url('~@/assets/font/Montserrat-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
* {
  font-family: 'Montserrat-Regular';
  box-sizing: border-box;
}
body {
  margin:0;
}

#app {
  margin: 0;
  min-height: 100vh;
  height: 100vh;
}

.header {
  max-width: 968px;
  max-height: 200px;
  height: 100%;
  
  padding: 0 20px;
  margin: auto;

  @media (max-width: 640px) {
    max-height: 300px;

  }
}
</style>
