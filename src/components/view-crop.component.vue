
<script >

import { CropsApiService } from '@/services/crop-api.service.js'

export default {
  name: "view-crop",
  data() {
    return {
      crop: null
    };
  },
  async mounted() {

    const cropId = 7896;
    try {
      const cropsApiService = new CropsApiService();
      const response = await cropsApiService.getById(cropId);

      this.crop = response.data;
    } catch (error) {
      console.error('Error al obtener el cultivo:', error);
    }
  }
}

</script>

<template>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto Mono:wght@400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Jockey One:wght@400&display=swap"
    />
  </head>
  <body>
  <div class="desktop-3"  v-if="crop">
    <div class="cultivos">Cultivos</div>
    <div class="rea">Área</div>
    <div class="codigo">Codigo</div>
    <div class="m2">{{ crop.area }}</div>
    <div class="ac856">{{ crop.id }}</div>
    <div class="germinacion">Germinacion</div>
    <div class="div3">$ {{ crop.costo }}</div>
    <div class="div4">$ {{ crop.retorno }}</div>
    <div class="ninguna">{{ crop.notificaciones}}</div>
    <div class="arroz"> {{ crop.producto}} </div>
    <div class="div5">{{ crop.localizacion}}</div>
    <div class="estado">Estado</div>
    <div class="costo">Costo </div>
    <div class="retorno">Retorno</div>
    <div class="notificaciones">Notificaciones</div>
    <div class="producto">Producto</div>
    <div class="localizacion">Localizacion</div>
    <router-link to="/add-crops">
    <button class="agregar-cultivo-parent" >
      <div  class="agregar-cultivo">Agregar cultivo</div>
    </button>
    </router-link>
    <button class="preguntar-al-asesor-parent">
      <div class="preguntar-al-asesor">Preguntar al asesor</div>
    </button>
    <router-link to="/calendari">
    <button class="calendario-parent">
      <div class="calendario" >Calendario</div>
    </button>
    </router-link>
    <img class="desktop-3-child"  :src="crop.image_Url" ></img>
  </div>
  </body>
</template>

<style scoped>
.cultivos {
  position: absolute;
  top: 34px;
  left: 641px;
  font-size: 80px;
}
.rea {
  position: absolute;
  top: 456px;
  left: 707px;
}
.codigo {
  position: absolute;
  top: 384px;
  left: 708px;
}
.m2 {
  position: absolute;
  top: 456px;
  left: 873px;
  color: #1c46dd;
}
.ac856 {
  position: absolute;
  top: 384px;
  left: 870px;
  color: #1c46dd;
}
.germinacion {
  position: absolute;
  top: 384px;
  left: 1159px;
  color: #1c46dd;
}
.div3 {
  position: absolute;
  top: 456px;
  left: 1160px;
  color: #1c46dd;
}
.div4 {
  position: absolute;
  top: 528px;
  left: 1161px;
  color: #1c46dd;
}
.ninguna {
  position: absolute;
  top: 733px;
  left: 998px;
  color: #1c46dd;
}
.arroz {
  position: absolute;
  top: 528px;
  left: 873px;
  color: #1c46dd;
}
.div5 {
  position: absolute;
  top: 630px;
  left: 945px;
  font-size: 30px;
  color: #1c46dd;
}
.estado {
  position: absolute;
  top: 384px;
  left: 1014px;
}
.costo {
  position: absolute;
  top: 456px;
  left: 1014px;
}
.retorno {
  position: absolute;
  top: 528px;
  left: 1014px;
}
.notificaciones {
  position: absolute;
  top: 733px;
  left: 704px;
  color: #ed0e29;
}
.producto {
  position: absolute;
  top: 528px;
  left: 708px;
}
.localizacion {
  position: absolute;
  top: 619px;
  left: 707px;
}
.agregar-cultivo {
  position: absolute;
  top: 0px;
  left: 29px;
  font-size: 40px;
  font-family: "Jockey One";
  color: #20d61c;
  text-align: left;
  display: inline-block;
  width: 330px;
  height: 64px;
  color: #20d61c;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  box-sizing: border-box;
  border: 1px solid #000;
}

.agregar-cultivo-parent {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 146px;
  left: 106px;
  width: 280px;
  height: 64px;
}
.preguntar-al-asesor {
  position: absolute;
  top: 0px;
  left: 120px;
  font-size: 40px;
  font-family: "Jockey One";
  color: #20d61c;
  text-align: left;
  display: inline-block;

  color: #20d61c;
  text-align: left;
  display: inline-block;
  width: 343px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  box-sizing: border-box;
  border: 1px solid #000;
}

.preguntar-al-asesor-parent {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 881px;
  left: 954px;
  width: 365px;
  height: 64px;
}
.calendario {
  position: absolute;
  top: 0px;
  left: 19px;
  font-size: 40px;
  font-family: "Jockey One";
  color: #20d61c;
  text-align: left;
  display: inline-block;
  width: 167px;
  height: 64px;
  text-align: left;
  display: inline-block;
  width: 293px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  box-sizing: border-box;
  border: 1px solid #000;
}
.calendario-parent {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 881px;
  left: 699px;
  width: 197px;
  height: 64px;
}
.desktop-3-child {
  position: absolute;
  top: 299px;
  left: 51px;
  width: 563px;
  height: 615px;
}
.desktop-3 {
  width: 1980px;
  position: relative;
  background-color: #fff;
  height: 1820px;
  overflow: hidden;
  text-align: left;
  font-size: 40px;
  color: #20d61c;
  font-family: "Jockey One";
}
body {
  background-color: #fff;
}
</style>