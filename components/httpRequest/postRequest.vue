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