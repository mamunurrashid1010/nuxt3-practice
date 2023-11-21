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