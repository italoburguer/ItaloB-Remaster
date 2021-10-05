<template>
    <div>
        <div v-for="user in users" :key="user.uuid"> 
        <h2> Hola </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'users',
    props: {
        users:{
            type:Array,
            default: () => []
        }
    }
}
</script>
