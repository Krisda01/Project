<script setup>
import MyBar from './views/mybar.vue'
</script>
<template>
  <header>
    <MyBar />
    <router-view />
  </header>
  <main>
  </main>
</template>
<script>
export default {
  name : 'App',
  components : {
    MyBar
  },
};

</script>

<style scoped></style>