<template>
  <div>
    <topmenu></topmenu>

    <RouterView></RouterView>
  </div>
</template>

<script>
import topmenu from './components/topmenu.vue'

export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {
    topmenu,
  }
}
</script>

<style scoped></style>