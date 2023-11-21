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