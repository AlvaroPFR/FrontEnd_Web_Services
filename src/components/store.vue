<template>
  <div class="store-page">
    <!-- Columna izquierda: Filtros -->
    <div class="filters-column p-shadow-2" style="border-radius: 10px;">
      <h2 style="color: #2DD61C; font-family: 'DM Sans', sans-serif;">Filtros</h2>
      <div class="filter-options">
        <div class="filter-option">
          <label for="quantity" style="color:  #2DD61C; font-family: 'DM Sans', sans-serif;">Cantidad:</label>
          <input type="text" id="quantity">
        </div>
        <div class="filter-option">
          <label for="stars" style="color: #2DD61C; font-family: 'DM Sans', sans-serif;">Estrellas:</label>
          <input type="text" id="stars">
        </div>
        <div class="filter-option">
          <label for="favorites" style="color: #2DD61C; font-family: 'DM Sans', sans-serif;">Favoritos:</label>
          <input type="checkbox" id="favorites">
        </div>
        <div class="filter-option">
          <label for="price" style="color:  #2DD61C; font-family: 'DM Sans', sans-serif;">Precio:</label>
          <input type="text" id="price">
        </div>
        <button class="p-button p-button-rounded p-button-text" style="font-family: 'DM Sans', sans-serif;">Buscar</button> <!-- Botón de buscar -->
      </div>
    </div>

    <!-- Columna central: Productos -->
    <div class="products-column">
      <h2 style="color:  #2DD61C; font-family: 'DM Sans', sans-serif;">Tienda</h2> <!-- Color azul para el título de productos -->
      <div v-for="product in products" :key="product.id" class="product p-shadow-2" style="border-radius: 10px; margin-bottom: 20px;">
        <img :src="product.image" :alt="product.name">
        <div class="product-details" style="color: blue;">
          <div class="product-info">
            <div class="product-info-item">Antigüedad: {{ product.age }}</div>
            <div class="product-info-item">Cantidad mínima: {{ product.minQuantity }}</div>
            <div class="product-info-item">Cantidad máxima: {{ product.maxQuantity }}</div>
            <div class="product-info-item">Ventas: {{ product.sales }}</div>
          </div>
          <div class="product-actions">

            <button @click="contactar">Contactar</button>
            <button class="p-button p-button-rounded p-button-text">Agregar a favoritos</button>
            <button class="p-button p-button-rounded p-button-text">No recomendar</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    contactar() {
      this.$router.push('/chat');
    }
  },
  name: 'StorePage',
  data() {
    return {
      products: [
        { id: 1, name: 'Papa', image: 'src/assets/images/papa.jpg', age: '1 día', minQuantity: '10 kg', maxQuantity: '50 kg', sales: 100 },
        { id: 2, name: 'Tomate', image: 'src/assets/images/tomate.jpg', age: '2 días', minQuantity: '5 kg', maxQuantity: '30 kg', sales: 50 }
      ]
    };
  }
}


</script>

<style scoped>
.store-page {
  display: flex;
  justify-content: space-between;
}

.filters-column {
  width: 30%;
  padding: 20px;
}

.products-column {
  width: 60%;
}

.filter-options {
  display: flex;
  flex-direction: column;
}

.filter-option {
  margin-bottom: 10px;
}

.product {
  display: flex;
  align-items: center;
}

.product img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.product-details {
  display: flex;
  flex-direction: column;
  color: blue;
}

.product-info {
  margin-bottom: 10px;
}

.product-info-item {
  margin-bottom: 5px;
}

.product-actions button {
  margin-right: 10px;
}
</style>
