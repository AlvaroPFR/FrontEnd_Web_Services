<template>
  <div class="login-form-container">
    <div class="login-form">
      <h2>Login</h2>

      <div class="form-group">
        <div class="input-label">
          <label for="email">Email:</label>
        </div>
        <div class="input-field">
          <input type="text" id="email" v-model="username" required aria-label="Enter your email">
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="password">Password:</label>
        </div>
        <div class="input-field">
          <input type="password" id="password" v-model="password" required aria-label="Enter your password">
        </div>
      </div>

      <button @click="login" aria-label="Login">Login</button>
      <br/><br/>
      <button @click="register" aria-label="Register">Register</button>

    </div>
  </div>
</template>

<script>
import {UserApiService} from "@/services/user-api.service.api.js";
import router from "@/router.js";

export default {
  name: 'TheLoginForm',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const userApiService = new UserApiService();
        const user = await userApiService.login(this.username, this.password);
        if (user) {
          // Almacenar la información del usuario en el almacenamiento local o de sesión
          // Esto depende de cómo manejes la autenticación en tu aplicación
          // Por ejemplo, puedes usar localStorage.setItem('user', JSON.stringify(user));
          await router.push('/home');
        } else {
          console.error('Credenciales incorrectas');
          // Podrías mostrar un mensaje de error al usuario aquí
        }
      } catch (error) {
        console.error('Error en el inicio de sesión:', error.message);
        // Podrías mostrar un mensaje de error al usuario aquí
      }
    },
    async register() {
      try {
        await router.push('/register');
      } catch (error) {
        console.error('Error al redirigir al registro:', error);
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.input-label {
  flex: 1;
}

.input-field {
  flex: 3;
}

label {
  margin-bottom: 5px;
  display: block;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #75aa9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5c8677;
}
</style>
