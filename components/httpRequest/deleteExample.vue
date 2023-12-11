<template>
    <div>
        <h4>Http delete example</h4>

        <p>
            ID :{{post.id}} <br>
            Title :{{post.title}}<br>
            Message :{{post.body}}<br>
            <button @click="deleteData(post.id)">Delete</button>
        </p>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'delete-example',
    data(){
        return{
            post:{
                id:1,
                title:"test title",
                body:"test desc",

            },
        }
    },
    methods:{
        deleteData(id){
            axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
                .then(req=>{
                    alert('success')
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