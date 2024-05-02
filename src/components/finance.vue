

<template>
  <header>
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Jockey+One&display=swap" rel="stylesheet" />
  </header>
  <body>
  <div class="v1_200">
    <span class="v1_201">Finanzas</span>
    <div class="v1_204"></div>
    <div class="v1_205"></div>
    <div class="v1_206"></div>
    <span class="v1_207">Agregar pago</span>
    <div class="v1_208"></div>
    <span class="v1_209">Balance por  mes </span>
    <div class="v1_210"></div>
    <span class="v1_202">Pagos pendientes </span>
    <span class="v1_203">Cobranzas pendientes </span>
    <span class="v1_211">Agregar cobranza</span>
    <div class="v1_212"></div>
    <span class="v1_213">Pagado</span>
    <div class="v1_214"></div>
    <div class="v1_216"></div>
    <span class="v1_217">Descripcion </span>
    <div class="v1_218"></div>
    <span class="v1_219">Salarios</span>
    <span class="v1_220">$ 300</span>
    <span class="v1_221">Tipo</span>
    <span class="v1_222">Costo</span>
    <div class="v1_223"></div>
    <span class="v1_224">Pagado</span>
    <div class="v1_225"></div>
    <div class="v1_227"></div>
    <span class="v1_228">Descripcion </span>
    <div class="v1_229"></div>
    <span class="v1_230">Compra abono</span>
    <span class="v1_231">$ 400</span>
    <span class="v1_232">Tipo</span>
    <span class="v1_233">Costo</span>
    <div class="v1_234"></div>
    <span class="v1_235">Cobrado</span>
    <div class="v1_236"></div>
    <div class="v1_238"></div>
    <span class="v1_239">Descripcion </span>
    <div class="v1_240"></div>
    <span class="v1_241">Venta manzanas</span>
    <span class="v1_242">$ 300</span>
    <span class="v1_243">Tipo</span>
    <span class="v1_244">Costo</span>
  </div>
  </body>
</template>

<script>
import { UserApiService } from "@/services/user-api.service.api.js";

export default {
  name: 'TheFinance',
  data(){
    return{
      users:[],
      userApiService : new UserApiService()
    }
  },
  methods: {
  },
  async created() {
    const response = await this.userApiService.getAll();
    this.users = response.data;
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v1_200 {
  width: 100%;
  height: 1024px;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;

}
.v1_201 {
  width: 253px;
  color: #222222;
  position: absolute;
  top: 30px;
  left: 182px;
  font-weight: Regular;
  font-size: 70px;
  opacity: 1;
  text-align: left;

}
.v1_202 {
  width: 465px;
  color: #337418;
  position: absolute;
  top: 186px;
  left: 156px;
  font-weight: Regular;
  font-size: 52px;
  opacity: 1;
  text-align: left;
}
.v1_203 {
  width: 500px;
  color: #337418;
  position: absolute;
  top: 603px;
  left: 156px;

  font-weight: Regular;
  font-size: 50px;
  opacity: 1;
  text-align: left;

}
.v1_204 {
  width: 85%;
  height: 389px;
  opacity: 1;
  position: absolute;
  top: 170px;
  left: 95px;
  border: 1px solid rgba(0,0,0,1);
  border-radius: 50px;
  overflow: hidden;
  background-color: #DBFCCD;
}
.v1_205 {
  width: 85%;
  height: 389px;
  opacity: 1;
  position: absolute;
  top: 590px;
  left: 95px;
  border: 1px solid rgba(0,0,0,1);
  border-radius: 50px;
  overflow: hidden;
  background-color: #DBFCCD;
}
.v1_206 {
  width: 450px;
  height: 232px;
  opacity: 1;
  position: absolute;
  top: 290px;
  left: 144px;
  border: 1px solid rgba(0,0,0,1);
  border-radius: 50px;
  overflow: hidden;
}
.v1_207 {
  width: 309px;
  color: #2c3e50;
  position: absolute;
  top: 196px;
  left: 623px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_208 {
  width: 259px;
  height: 63px;
  opacity: 1;
  position: absolute;
  top: 196px;
  left: 594px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

}
.v1_209 {
  width: 309px;
  color: #F1D334;
  position: absolute;
  top: 63px;
  left: 1027px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_210 {
  width: 303px;
  height: 63px;
  opacity: 1;
  position: absolute;
  top: 63px;
  left: 998px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

}
.v1_211 {
  width: 309px;
  color: #2c3e50;
  position: absolute;
  top: 613px;
  left: 707px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_212 {
  width: 310px;
  height: 63px;
  opacity: 1;
  position: absolute;
  top: 613px;
  left: 678px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

}
.v1_213 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 439px;
  left: 430px;

  font-weight: Regular;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.v1_214 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 439px;
  left: 382px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_215 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 430px;
  left: 197px;

  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v1_216 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 439px;
  left: 170px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_217 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 430px;
  left: 185px;

  font-size: 30px;
  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v1_218 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 439px;
  left: 170px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_219 {
  width: 188px;
  color: rgba(27,70,220,1);
  position: absolute;
  top: 301px;
  left: 254px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_220 {
  width: 80px;
  color: rgba(27,70,220,1);
  position: absolute;
  top: 343px;
  left: 268px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_221 {
  width: 101px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 303px;
  left: 170px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_222 {
  width: 81px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 344px;
  left: 170px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_223 {
  width: 450px;
  height: 232px;
  opacity: 1;
  position: absolute;
  top: 290px;
  left: 644px;
  border: 1px solid rgba(0,0,0,1);
  border-radius: 50px;
  overflow: hidden;
}
.v1_224 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 439px;
  left: 930px;

  font-weight: Regular;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.v1_225 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 439px;
  left: 882px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_226 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 430px;
  left: 697px;

  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v1_227 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 439px;
  left: 670px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_228 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 430px;
  left: 685px;

  font-size: 30px;
  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v1_229 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 439px;
  left: 670px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_230 {
  width: 262px;
  color: rgba(27,70,220,1);
  position: absolute;
  top: 301px;
  left: 754px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_231 {
  width: 144px;
  color: rgba(27,70,220,1);
  position: absolute;
  top: 343px;
  left: 768px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_232 {
  width: 101px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 303px;
  left: 670px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_233 {
  width: 81px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 344px;
  left: 670px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_234 {
  width: 450px;
  height: 232px;
  opacity: 1;
  position: absolute;
  top: 707px;
  left: 144px;
  border: 1px solid rgba(0,0,0,1);
  border-radius: 50px;
  overflow: hidden;
}
.v1_235 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 856px;
  left: 421px;

  font-weight: Regular;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.v1_236 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 856px;
  left: 382px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_237 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 847px;
  left: 197px;

  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v1_238 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 856px;
  left: 170px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_239 {
  width: 135px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 847px;
  left: 185px;

  font-size: 30px;
  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v1_240 {
  width: 174px;
  height: 47px;
  opacity: 1;
  position: absolute;
  top: 856px;
  left: 170px;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.v1_241 {
  width: 260px;
  color: rgba(27,70,220,1);
  position: absolute;
  top: 718px;
  left: 254px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_242 {
  width: 80px;
  color: rgba(27,70,220,1);
  position: absolute;
  top: 760px;
  left: 268px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_243 {
  width: 101px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 720px;
  left: 170px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
.v1_244 {
  width: 81px;
  color: rgba(32,214,28,1);
  position: absolute;
  top: 761px;
  left: 170px;

  font-weight: Regular;
  font-size: 32px;
  opacity: 1;
  text-align: left;
}
</style>

