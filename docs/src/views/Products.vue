<script setup>
import MyCart from '../views/mycard.vue'
import items from '../Products.json'
</script>

<template>
  <main>
    <div class="five">
      <h1>Products</h1>
    </div>
    <div class="grid-container">
      <MyCart
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :detail="item.detail"
        :coverimage="item.coverimage"
        :price="item.price"
      />
    </div>
  </main>
</template>
<script scope>
export default {
  name: "Products",
  components: {
    MyCart,
  },
  data() {
    return{
       item : [],
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(json => {
      this.items = json;
    })
    .catch(error => {
      console.error("Error Fetching Products:", error);
    });
  }
};
</script>
<style scope>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;700&display=swap');

main {
  margin-top: 20px;
  padding: 1rem;
  font-family: 'Chakra Petch', sans-serif;
}

.five h1 {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #202020;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
}

.grid-container {
  display: grid;
  gap: 1rem;
}

@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
