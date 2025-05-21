// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  alias:{
    css: '/<rootDir>/assets/css'
  },
  app:{
  //  baseURL: process.env.BASE_URL || "http://localhost:3000",
  },
  components:[{path:'~/shared/icons',prefix:'Icon'},'~/components'],
  css:["@/assets/css/main.css"],

  // dir:{//NAO RECOMENDADO MUDAR ESSES NOMES 
  //   assets:"assets",
  //   layouts:"layouts",
  //   middleware:"middleware",
  //   pages:"pages",
  //   static:"static",
  //   },//NAO RECOMENDADO MUDAR ESSES NOMES 


})
