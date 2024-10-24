<template>
  <div>
    <topmenu></topmenu>

    <RouterView></RouterView>

    <footerend></footerend>
  </div>
</template>




<script>


import topmenu from './components/topmenu.vue';
import footerend from './components/footerend.vue';

export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {
    topmenu,
    footerend,
    
  }
}
</script>

<style scoped></style>