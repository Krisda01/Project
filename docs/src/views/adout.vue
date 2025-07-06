<script setup>
import{ref}from 'vue' ;
const message = ref('About');
</script>

<template>
    <main>
        <center><h1>{{ message }}</h1></center>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Kanit:wght@900&display=swap');
*{
    font-family: "Chakra Petch", sans-serif;
    font-weight: 700;
    font-style: normal;
}
</style>