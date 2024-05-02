<template>
  <div class="registration-form-container" role="form" aria-label="Formulario de registro">
    <div class="registration-form">
      <h2>Registro</h2>

      <div class="form-group">
        <div class="input-label">
          <label for="fullName">Full name:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="text" id="fullName" v-model="fullName" required aria-label="Ingrese su nombre completo"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="id">DNI or RUC:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="text" id="id"  v-model.number="id" required aria-label="Ingrese su DNI o RUC"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="companyName">Company name :</label>
        </div>
        <div class="input-field">
          <pv-input-text type="text" id="companyName" v-model="companyName" required aria-label="Ingrese el nombre de su empresa"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="emailAddress">Email Address:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="email" id="emailAddress" v-model="emailAddress" required aria-label="Ingrese su correo electrónico"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="phoneNumber">Teléfono:</label>
        </div>
        <div class="input-field">
          <pv-input-text type="tel" id="phoneNumber" v-model="phoneNumber" required aria-label="Ingrese su número de teléfono"/>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="userType">Tipo de usuario:</label>
        </div>
        <div class="input-field">
          <select id="userType" v-model="userType" required aria-label="Seleccione su tipo de usuario">
            <option value="">Seleccionar tipo de usuario</option>
            <option value="agricultor">Agricultor</option>
            <option value="vendedor">Vendedor</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <div class="input-label">
          <label for="password">Contraseña:</label>
        </div>
        <div class="input-field">
          <input type="password" id="password" v-model="password" required aria-label="Ingrese su contraseña">
        </div>
      </div>

      <button @click="register" aria-label="Registrar">Registrar</button>
    </div>
  </div>
</template>

<script>
import {UserApiService} from "@/services/user-api.service.api.js";

export default {
  name: 'TheRegisterForm',
  data() {
    return {
      id: '',
      fullName: '',
      companyName: '',
      emailAddress: '',
      phoneNumber: '',
      userType: '',
      password: '',
      userApiService: new UserApiService() // Asegúrate de instanciar el servicio aquí
    };
  },
  methods: {
    async register(){
    await this.$router.push('/'); // Cambia '/' por la ruta a la que deseas redirigir al usuario
    const body = {
        id: this.id,
        full_name: this.fullName,
        company_name: this.companyName,
        email_address: this.emailAddress,
        phone_number: this.phoneNumber,
        user_type: this.userType,
        password: this.password
      };
      const response = await this.userApiService.create(body);
      router.push('/login');
      alert('User created');
    if (response.status === 201) {}
      else {
        console.error('Error al registrar el usuario');
      }
    }
  }
}

</script>

<style scoped>
.registration-form {
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
input[type="email"],
input[type="tel"],
input[type="password"],
select {
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
