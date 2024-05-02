
<template>
  <html>
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
  <div class="desktop-4">
    <img class="image-30-icon" src="https://i.postimg.cc/FKTLJ8Yh/imagne.png" alt="Imagen del comprador" />
    <div class="agregar-cultivo1">Agregar cultivo</div>
    <div class="producto1">Producto</div>
    <div class="rea1">Área</div>
    <div class="localizacion1">Localizacion</div>
    <div class="asesores">Asesores</div>
    <pv-button  class="generar-reunion-parent" @click="create()">
      <div class="generar-reunion">Generar reunion</div>
    </pv-button>
    <button class="selecionar-parent"@click="showAlert">
      <div class="selecionar">Selecionar</div>
    </button>
    <div class="desktop-4-child"></div>
    <div class="desktop-4-item"></div>
    <button class="desktop-4-inner"></button>


    <pv-input-text class="desktop-4-child1" id="nombre" v-model="producto" />

    <pv-input-text class="desktop-4-child2" type="Area" v-model="localizacion"/>

    <pv-input-text class="desktop-4-child3" type="localizacion" v-model="area" />


  </div>
  </body>
  </html>


</template>

<style scoped>
.agregar-cultivo1 {
  position: absolute;
  top: 27px;
  left: 474px;
  font-size: 80px;
  display: inline-block;
  width: 491px;
  height: 64px;
}
.desktop-4 {
  width: 100vw;
  height: 100vh;

}
@media (max-width: 768px) {
  .desktop-4 {
    width: 90vw;
  }
}
.producto1 {
  position: absolute;
  top: 201px;
  left: 111px;
}
.rea1 {
  position: absolute;
  top: 297px;
  left: 111px;
}
.localizacion1 {
  position: absolute;
  top: 201px;
  left: 720px;
}
.asesores {
  position: absolute;
  top: 448px;
  left: 111px;
  display: inline-block;
  width: 336px;
  height: 64px;
}
.generar-reunion {
  position: absolute;
  top: 0px;
  left: 16px;
  font-size: 50px;
  font-family: "Jockey One";
  color: #20d61c;
  text-align: left;
  display: inline-block;
  width: 393px;
  height: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  box-sizing: border-box;
  border: 2px solid #000;
}
.generar-reunion-parent {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 904px;
  left: 525px;
  width: 409px;
  height: 77px;
}
.selecionar {
  position: absolute;
  top: 0px;
  left: 19px;
  font-size: 50px;
  font-family: "Jockey One";
  color: #20d61c;
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
.selecionar-parent {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 538px;
  left: 1019px;
  width: 312px;
  height: 77px;
}
.desktop-4-child {
  position: absolute;
  top: 477px;
  left: 316px;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  width: 674px;
  height: 239px;
}
.desktop-4-item {
  position: absolute;
  top: 512px;
  left: 934px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  width: 32px;
  height: 178px;
}
.desktop-4-inner {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #000;
  position: absolute;
  top: 592px;
  left: 931px;
  border-radius: 10px;
  width: 37px;
  height: 37px;
}
.image-30-icon {
  position: absolute;
  top: 492px;
  left: 348px;
  width: 573px;
  height: 200px;
  z-index:99;
}
.desktop-4-child1 {
  border: 1px solid #000;
  outline: none;
  background-color: #fff;
  position: absolute;
  top: 188px;
  left: 347px;
  border-radius: 100px;
  box-sizing: border-box;
  width: 323px;
  height: 79px;
}
.desktop-4-child2 {
  border: 1px solid #000;
  outline: none;
  background-color: #fff;
  position: absolute;
  top: 188px;
  left: 973px;
  border-radius: 100px;
  box-sizing: border-box;
  width: 323px;
  height: 79px;
}
.desktop-4-child3 {
  border: 1px solid #000;
  outline: none;
  background-color: #fff;
  position: absolute;
  top: 291px;
  left: 347px;
  border-radius: 100px;
  box-sizing: border-box;
  width: 323px;
  height: 79px;
}
.desktop-4 {
  width: 1920px;
  position: relative;
  background-color: #fff;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: 40px;
  color: #20d61c;
  font-family: "Jockey One";
}


</style>
<script>
import router from "@/router.js";

import { CropsApiService } from '@/services/crop-api.service.js'

export default {
  name: "add-crop",
  data() {
    return {
      producto: "",
      area: "",
      localizacion: "",
      cropsApiService: new CropsApiService(),
    };
  },
  methods: {
    async create() {
      const body = {
        producto: this.producto,
        area: this.area,
        localizacion: this.localizacion,
      };

      try {
        const response = await this.cropsApiService.create(body);

        if (response.status === 201) {
          alert("Cultivo creado exitosamente");
          router.push({ name: "cultivos" });
        } else {
          alert("Error al crear el cultivo");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    showAlert(){
      alert("Asesor seleccionado");
    }
  },
};

</script>