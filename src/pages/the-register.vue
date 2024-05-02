<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <div class="content">
        <div class="left-side">
          <br/>
          <h1 class="welcome-text">Welcome to AgroSolutions</h1>
          <img src="https://welcometoibiza.com/wp-content/uploads/agricultura-mundo-rural-ibiza-welcometoibiza.jpg" alt="image of farmer" class="hero-image" role="img" aria-label="Image of Farmer">
        </div>
        <div class="right-side">
          <the-register-form></the-register-form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/the-header-session.component.vue";
import TheRegisterForm from "@/components/the-register-form.component.vue";

export default {
  name: 'the-register',
  components: { TheRegisterForm, TheHeaderSession }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 90px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

}

.content {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: stretch; /* Ajusta la altura */
  width: 60000px; /* Ajusta el ancho según sea necesario */
  max-width: 1200px;

}

.left-side,
.right-side {
  flex: 1;
  border-radius: 10px;
}

.left-side {
  background-color: #75aa9c;
}

.right-side {
  background-color: #ffffff;
}
.welcome-text {
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  padding: 50px;

}

.hero-image {
  width: 80%;
  height: auto;
  border-radius: 10px;
  padding-left: 100px;

}
</style>