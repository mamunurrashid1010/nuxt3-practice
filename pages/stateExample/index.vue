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