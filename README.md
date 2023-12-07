# Nuxt 3 Practice
Nuxt is an open source vue.js framework that makes web development intuitive and powerful. In this project here i practice nuxt 3 core concept.

#### Topics Practice:  <hr>

##### 1. Nuxt 3 app create
* Create a new nuxt app

##### 2. pages & route
* Create page (Home)
* Create nested page
* Create page for show all product and specific product details

##### 3. Layouts
* Create a default layout
* Create a custom layout

##### 4. Bootstrap 5 installation

##### 5. Navbar & NuxtLink

##### 6. components

##### 7. state

##### 8. fontawesome
* fontawesome integrate using cdn

##### 9. Axios installation

##### 10. Http request
* Get request example

<hr>

## Basic Concept
##### 1. How to create a new nuxt 3 app?
Open terminal and run this command
```
npx nuxi@latest init <project-name>  
```
If face npm error, run this command
```
npm install npm -g
npx nuxi@latest init <project-name>  
```
After successfully create project then run command
```
cd project-name
npm run dev
```

##### 2. pages & route
Description :
* Pages represent views for each specific route pattern. Every file in the pages/ directory represents a different route displaying its content.
* Nuxt file-system routing creates a route for every file in the pages/ directory.
##### 2.1. How to create pages?
Create a ```pages/``` directory in root. Then create ```index.vue``` file under pages directory like- ```pages/index.vue``` <br>
Now open ```pages/index.vue``` file and add this code
```
<template>
  <div>
      <title>HOME</title>
      <h1>Home page</h1>
  </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>

</style> 
```
Now open ```app.vue``` file and add this component ```<nuxtPage/>```. like-
```
<template>
  <div>
    <nuxtPage/>
  </div>
</template>
```
Now run command ```npm run dev``` and you can see home page in browser.

##### 2.2. How to create nested pages?
Create nested page like this-
```
pages/
    about/index.vue
    contact/index.vue
    ...
```
Now create ```pages/about/index.vue``` and ```pages/contact/index.vue``` file <br>
Then open ```pages/about/index.vue``` file and add this code
```
<template>
    <div>
        <title>About</title>
        <h1>About page</h1>
    </div>
</template>

<script>
export default {
    name: 'about',
}
</script>

<style scoped>

</style>
```
Then open ```pages/contact/index.vue``` file and add this code
```
<template>
    <div>
        <title>Contact</title>
        <h1>Contact page</h1>
    </div>
</template>

<script>
export default {
    name: 'contact',
}
</script>

<style scoped>

</style>
```
Now run command ```npm run dev``` and you can see about page at ```http://yourdomanin/about``` and contact page- ```http://yourdomanin/contact```.

##### 2.3. How to create pages for show all product and specific product details?
Create ```pages/product/index.vue``` for all products show <br>
and create ```pages/product/[id].vue``` file for specific product details <br>
Then open ```pages/product/index.vue``` file and add this code
```
<template>
    <div>
        <title>Product</title>
        <h1>Product page</h1>
    </div>
</template>

<script>
export default {
    name: 'Product',
}
</script>

<style scoped>

</style>
```
Then open ```pages/product/[id].vue``` file and add this code
```
<template>
    <div>
        <title>Product Details</title>
        <h1>Product details page.</h1>
        <h1>Product Id : {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Product-details',
}
</script>

<style scoped>

</style>
```
Now run command ```npm run dev``` and you can see product page at ```http://yourdomanin/product``` and specific product details page at ```http://yourdomanin/product/2```.


##### 3. Layouts
Description :
* Layouts are wrappers around pages that contain a common User Interface for several pages, such as a header and footer display. 
* Layouts are Vue files using <slot /> components to display the page content. 
* The layouts/default.vue file will be used by default. 
* Custom layouts can be set as part of your page metadata.

##### 3.1. How to create default layout?
Create a ```layouts/``` directory in root. Then create ```default.vue``` file under layouts directory like- ```layouts/default.vue``` <br>
Now open ```layouts/default.vue``` file and add this code
```
<template>
  <div>
      <!--  header    -->
      <h3 class="header"> Default layout header </h3>

      <!--  content    -->
      <slot/>

      <!--  footer    -->
      <h3 class="footer"> Default layout footer </h3>
  </div>
</template>
<script>
export default {

}
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
</style>
```
Now delete ```app.vue``` file.
Now run command ```npm run dev``` and you can see layout with pages in browser.

##### 3.2. How to create custom layout?
Create a ```contactPageLayout.vue``` file in the layouts directory like- ```layouts/contactPageLayout.vue``` <br>
Now open ```layouts/contactPageLayout.vue``` file and add this code
```
<template>
    <div>
        <!--  header    -->
        <h3 class="header"> Contact page layout header </h3>

        <!--  content    -->
        <slot/>

        <!--  footer    -->
        <h3 class="footer"> Contact page layout footer </h3>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header{
    background-color: #ee9b09;
    height: 50px;
    color: white;
    text-align: center;
}
.footer{
    background-color: #3a4447;
    height: 50px;
    color: white;
    text-align: center;
}
</style>
```
Now open ```pages/contact/index.vue``` file and add ```layout:'contact-page-layout' ```. like-
```
<template>
    <div>
        <title>Contact</title>
        <h1>Contact page</h1>
    </div>
</template>

<script>
definePageMeta({
    layout:'contact-page-layout'
})
export default {
    name: 'contact',
}
</script>

<style scoped>

</style>
```
Now run command ```npm run dev``` and you can see custom layout (contact-page-layout) in contact pages.


##### 4. Bootstrap installation
Open terminal and run this command
```
npx install bootstrap 
```
Now create a ```plugins``` directory and create a new file called ```bootstrap.js```  inside the plugins directory of your Nuxt.js project. In this file, import the Bootstrap JavaScript:
```
import 'bootstrap/dist/js/bootstrap.js';
```
Now open ```nuxt.config.ts``` file. Inside this file, add the following configuration to import the Bootstrap styles,js into your project:
```
export default defineNuxtConfig({
  devtools: { enabled: true }
})

// add this
module.exports={
  css:['bootstrap/dist/css/bootstrap.css'],
  plugins: [
    { src:'~/plugins/bootstrap.js', mode:'client' }
  ]
}
```
Now run command ```npm run dev``` and test.


##### 5. Navbar & NuxtLink
Create a navbar using bootstrap and NuxtLink.

Open ```layouts/default.vue``` file add this bootstrap navbar code like this:
```
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
<script>
export default {

}
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
```
Now run command ```npm run dev``` and check.


##### 6. components
##### 6.1. How to create component and use?
Create a ```components/``` directory in root. Then create ```home/``` directory under components directory <br>
Then create ```components/home/banner.vue``` and ```components/home/slider.vue``` vue file <br>
Now open ```components/home/banner.vue``` vue file and write code like-
```
<template>
    <div>
        <h4>I'm from home- banner component</h4>
    </div>
</template>

<script>

</script>
```

Then open ```components/home/slider.vue``` vue file and write code like-
```
<template>
    <div>
        <h4>I'm from home- slider component</h4>
    </div>
</template>

<script>

</script>
```

Now open ```pages/index.vue``` vue file and import banner.vue, slider.vue component file like-
```
<template>
  <div>
      <title>HOME</title>
      <h1>Home page</h1>
      <button class="btn btn-success m-1">Bootstrap button test</button>
      
      <!-- components -->
      <home-banner/>
      <home-slider/>
      
  </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>

</style>
```
Now run command ```npm run dev``` and check.


##### 7. state
##### 7.1. How to define state and use?
Create ```pages/stateExample/index.vue``` vue file and open and write code like
```
<template>
    <div>
        <title>State example page</title>
        <h1>State page</h1>

        <h4>Number : {{ state.number }}</h4>
        <button class="btn btn-success m-1" @click="increment()">Increment</button>
        <button class="btn btn-danger m-1" @click="decrement()">Decrement</button>
        <button class="btn btn-secondary m-1" @click="state.number=0">Reset</button>
    </div>
</template>

<script setup>
    const state = useState(()=>({
        number:0,
    }))
    
    const increment = ()=>{
        state.value.number++
    }
    
    const decrement = ()=>{
        state.value.number--
    }
    
    const reset = ()=>{
        state.value.number=0;
    }
   
</script>
```
Now run command ```npm run dev``` and check.

##### 8. fontawesome
##### 8.1. fontawesome integrate using cdn?
Open ```layouts/default.vue``` vue file and add fontawesome cdn link in script section like
```
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
```

Now create ```components/home/fontAwesomeExample.vue``` vue file and add code
```
<template>
    <div>
        <h4>I'm from home- font awesome component</h4>
        <i class="fa-solid fa-eye icon"></i>
        <i class="fa-solid fa-trash icon"></i>
        <i class="fa-solid fa-pen-to-square icon"></i>
    </div>
</template>

<script>

</script>

<style scoped>
.icon{
    margin: 10px;
}
</style>
```
Now import this component, in any page and 
run command ```npm run dev``` and check.


##### 9. Axios Installation
Run command for install axios
```
npm install axios --save
```

##### 10. Http request
##### 10.1. Get request example.
Create component ```components/httpRequest/getRequest.vue``` vue file and open and write code like-
```
<template>
    <div>
        <h4>Http get request example</h4>

        <button class="btn btn-primary" @click="getData()">Get Data</button>

        <div v-for="post in posts">
            <p v-if="post.id <=10">
                ID :{{post.id}} <br>
                Title :{{post.title}}<br>
                Message :{{post.body}}<br>
            </p>
        </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'get-request',
    data(){
        return{
            posts:[],
        }
    },
    methods:{
        getData(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(req=>{
                    this.posts = req.data;
                })
                .catch(e=>{
                    alert('Error')
                })
        }
    }
}
</script>

<style scoped>

</style>
```
Then create page ```pages/httpRequest/index.vue``` vue file and open and import ```getRequest.vue```component like-
```
<template>
    <div>
        <title>Http Request</title>
        <h1>Http request example page</h1>

        <!--  get request component  -->
        <http-request-get-request/>
    </div>
</template>

<script>
export default {
    name: 'http-request',
}
</script>

<style scoped>

</style>
```
You can also add this page link in navbar <br>
Now run command ```npm run dev``` and check.

##### 10.2. Post request example.
Create component ```components/httpRequest/postRequest.vue``` vue file and open and write code like-
```
<template>
    <div class="mt-3 mb-3">
        <h4>Http post request example</h4>

        <form @submit.prevent="store()">
            <label>Title:</label>
            <input type="text" v-model="form.title" /><br>
            <label>Body:</label>
            <input type="text" v-model="form.body" /><br>
            <button>Submit</button>
        </form>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'post-request',
    data(){
        return{
            form:{
                title:'',
                body:'',
                userId: 1,

            },
        }
    },
    methods:{
        store(){
            axios.post('https://jsonplaceholder.typicode.com/posts',this.form)
                .then(req=>{
                    alert('success');
                })
                .catch(e=>{
                    alert('Error')
                })
        }
    }
}
</script>

<style scoped>

</style>
```
Then open ```pages/httpRequest/index.vue``` vue file and import ```postRequest.vue```component <br>
Now run command ```npm run dev``` and check.

