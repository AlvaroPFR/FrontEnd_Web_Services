<template>
  <div class="banner" role="banner" aria-label="Banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 left-section">
          <h1 class="headline">Discover and Join Us</h1>
          <p class="description">The innovative startup dedicated to strengthening the agricultural sector, offering a comprehensive approach to support small and medium farmers in the optimal development of their crops.</p>
          <ul class="features list-unstyled" role="list" aria-label="Features">
            <li role="listitem">Technical information and specialized advice is received.</li>
            <li role="listitem">We act as an active business partner, purchasing and marketing farmers' products on our online platform.</li>
            <li role="listitem">We facilitate specific evaluations and personalized recommendations from our professionals on farmers' fields.</li>
          </ul>
        </div>
        <div class="col-lg-6 right-section">
          <img src="https://www.businessempresarial.com.pe/wp-content/uploads/2023/09/Trabajadores-campesinos-en-Mexico-1920-3-780x470.jpg" alt="image of farmer " class="hero-image" role="img" aria-label="Image of Farmer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-home-banner',
}
</script>

<style scoped>
.banner {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 50px 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1140px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-lg-6 {
  flex: 1;
}

.left-section, .right-section {
  padding: 0 20px; /* Espaciado interno */
}

.headline {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #377a6a; /* Color del titular */
}

.description {
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #555; /* Color de la descripción */
}

.features {
  padding-left: 20px;
}

.features li {
  margin-bottom: 10px;
  color: #777; /* Color de las características */
}

.hero-image {
  width: 100%;
  border-radius: 20px;
}
</style>
