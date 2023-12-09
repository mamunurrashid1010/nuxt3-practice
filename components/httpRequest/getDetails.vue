<template>
    <div>
        <h4>Http get details example</h4>

        <button class="btn btn-info" @click="getData()">Get Details</button>

        <p>
            ID :{{post.id}} <br>
            Title :{{post.title}}<br>
            Message :{{post.body}}<br>
        </p>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'get-details',
    data(){
        return{
            post:{},
        }
    },
    methods:{
        getData(){
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(req=>{
                    this.post = req.data;
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