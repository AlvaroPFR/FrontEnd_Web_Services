<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <div class="content">
        <div class="left-side">
          <h1 class="welcome-text">AgroSolutions</h1>
          <div class="form-container">
            <the-login-form></the-login-form>
          </div>
        </div>
        <div class="right-side">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/the-header-session.component.vue";
import TheLoginForm from "@/components/the-login-form.component.vue";

export default {
  name: 'the-login',
  components: { TheLoginForm, TheHeaderSession }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 400px;
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
  justify-content: center;
  align-items: stretch;
  max-width: 1200px;
  margin: auto;
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

.form-container {
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
