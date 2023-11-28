// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
})

module.exports={
  css:['bootstrap/dist/css/bootstrap.css'],
  plugins: [
    { src:'~/plugins/bootstrap.js', mode:'client' }
  ]
}