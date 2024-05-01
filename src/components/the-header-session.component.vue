<template>
  <header class="header">
    <div class="container">
      <div class="left-section">
        <div class="logo-container">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo">
          <h1 class="company-name">{{ companyName }}</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeaderSession',
  data() {
    return {
      companyName: 'AgroSolution'
    };
  },
  methods: {
    async logout() {
      try {
        await this.$router.push('/'); // Cambia '/' por la ruta a la que deseas redirigir al usuario
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #ffffff; /* Color de fondo */
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px; /* Tamaño del logo */
  margin-right: 10px;
}

.company-name {
  margin: 0;
  font-size: 18px; /* Tamaño del texto */
  color: #333; /* Color del texto */
}

.link {
  text-decoration: none; /* Quitar subrayado */
  color: #333; /* Color del texto */
  margin-right: 20px; /* Espaciado entre enlaces */
  transition: color 0.3s; /* Transición de color */
}

.link:hover {
  color: #007bff; /* Color del texto al pasar el ratón */
}

.button-logout {
  background-color: #dc3545; /* Color de fondo */
  color: #ffffff; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Padding */
  border-radius: 20px; /* Bordes redondeados */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Transición suave */
}

.button-logout:hover {
  background-color: #bd2130; /* Color de fondo al pasar el ratón */
}
</style>
