<script setup>
import { computed} from "vue";
import { useRoute } from "vue-router";
import items from '../Products.json';

const route = useRoute();
const id = route.params.id;
 
const product = computed(() =>
  items.find((item) => item.id === parseInt(id))
);
if (!product.value ){
  console.log ("Product not found")
}
</script>
<template>
  <div v-if="product" class="container">
    <div class="left-column">
      <img :src="product.coverimage" :alt="product.name" />
    </div>
    <div class="right-column">
      <div class="product-description">
        <h1>{{ product.name }}</h1>
        <p>{{ product.detail }}</p>
        <p class="product-price">Price: {{ product.price }} $</p>
        <router-link to="/products">
          <button class="cart-btn">Back to Products</button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Product not found or loading...</h1>
    <router-link to="/products">
      <button>Go back to the product list</button>
    </router-link>
  </div>
</template>
<script>
export default {
  props : ["coverimage","name"],
  methods: {
    getImageUrl(path){
      return new URL(`/${path}`,import.meta.url).href;
    },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Kanit:wght@900&display=swap');
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

.left-column {
  width: 65%;
  position: static;
  padding: 10px 15px;
  margin-left: 55px;
}

.left-column img {
  border-radius: 5px 5px 0 0;
  height: 500px;
  width: 500px;
  object-fit: cover

}

.left-column img.active {
  opacity: 1;
}

.right-column {
   position: relative;
  width: 80%;
  background-color: #43484d67;
  border-radius: 20px;
}

.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}

.product-description h1 {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-weight: bolder;
  font-size: 35px;
  color: #fff;
  letter-spacing: -1px;
  margin: 10px;
}

.product-description p {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  font-weight: bold;
  padding: auto;
  color: #fff;
  line-height: 24px;
  letter-spacing: -1px;
  margin: 10px;
}

.product-price {
  display: flex;
  font-weight: bold;
  align-items: center;
}

.product-price span {
  font-size: 30px;
  font-weight: bold;
  font-weight: 300px;
  color: #43484D;
  margin-right: 20px;
}
button{
  position: absolute;
  left: 30%;
  top: 70%;
}

.cart-btn {
  display: inline-block;
  background-color: #05a18c;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  margin-top: 5px;
  transition: all .5s;
}

.cart-btn:hover {
  background-color: #64af3d;
}
</style>