<template>
  <div>
      <!--  header    -->
      <h3 class="header"> Default layout header </h3>

      <!-- navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <NuxtLink to="/" class="nav-item-link ">IT Solutions Ltd</NuxtLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                      <NuxtLink to="/" class="nav-item-link">HOME</NuxtLink>
                      <NuxtLink to="/about" class="nav-item-link">ABOUT</NuxtLink>
                      <NuxtLink to="/product" class="nav-item-link">PRODUCT</NuxtLink>
                      <NuxtLink to="/service" class="nav-item-link">SERVICE</NuxtLink>
                      <NuxtLink to="/stateExample" class="nav-item-link">STATE EXAMPLE</NuxtLink>
                      <NuxtLink to="/httpRequest" class="nav-item-link">HTTP REQUEST</NuxtLink>
                  </li>
              </ul>
          </div>
      </nav>

      <!--  content    -->
      <slot/>

      <!--  footer    -->
      <h3 class="footer"> Default layout footer </h3>
  </div>
</template>
<script setup>
    useHead({
        // font awesome cdn css
        link:[
            { rel:"stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css' },
            { rel:"stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/regular.min.css' },
            { rel:"stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/solid.min.css' },
        ],
        script:[
            // font awesome cdn js
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/fontawesome.min.js', tagPosition:'bodyClose' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/regular.min.js', tagPosition:'bodyClose'},
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/solid.min.js', tagPosition:'bodyClose' },
        ]
    })
</script>
<style scoped>
.header{
    background-color: darkslategray;
    height: 50px;
    color: white;
    text-align: center;
}
.footer{
    background-color: #8ca640;
    height: 50px;
    color: white;
    text-align: center;
}
.navbar{
    height: 50px;
}
.nav-item-link{
    margin: 10px;
    color: white;
    text-decoration: none;
}
.nav-item-link:hover{
    color: yellow;
}
</style>