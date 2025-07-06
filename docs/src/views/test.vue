<script setup>
    import { ref } from 'vue';
    const awesome = ref(true)
</script>

<template>
    <button @click="awesome = !awesome">Submit</button>
    <h1 v-if="awesome">you did if</h1>
    <h1 v-else>ho no</h1>
</template>