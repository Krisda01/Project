<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#Krisda">Krisda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><router-link to="/">Home</router-link></li>
                <li class="nav-item"><router-link to="/about">About</router-link></li>
                <li class="nav-item"><router-link to="/products">Products</router-link></li>

            </ul>
            </div>
        </div>
    </nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Kanit:wght@900&display=swap');
*{
    font-family: "Chakra Petch", sans-serif;
    font-weight: 700;
    font-style: normal;
}
body{
    background-image: url("./img/forest_trees_mountains_146485_1920x1080.jpg");
}
li{
    font-size: 20px;
    margin: 5px 10px;
    text-decoration: none;
    color: black;
}
</style>