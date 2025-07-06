<template>
    <div>
        <h1>404 - Page Not Fonud</h1>
        <p>The page you're looking for doesn't exist.</p>
        <button @click="goHome">Go To Home</button>
    </div>
</template>

<script>
export default{
    name:'NotFound',
    methods:{
        goHome(){
            this.$router.push('/');
        },
    },
};
</script>
<style>
h1{
    color: red;
}
</style>