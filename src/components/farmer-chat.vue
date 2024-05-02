<template>
  <div class="chat">
    <h1>Chat</h1>
    <div class="user-info">
      <p>Usuario: El papero</p>
    </div>
    <div class="chat-box">
    </div>
    <textarea v-model="mensaje" placeholder="Escribe tu mensaje..."></textarea>
    <button @click="enviarMensaje">Enviar</button>
    <button @click="generarPedido">Generar Pedido</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: ''
    };
  },
  methods: {
    enviarMensaje() {
    },
    generarPedido() {
    }
  }
}
</script>

<style scoped>
.chat-page {
  text-align: center;
}

.user-info {
  margin-bottom: 20px;
}

textarea {
  width: 80%;
  height: 100px;
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
}
</style>
