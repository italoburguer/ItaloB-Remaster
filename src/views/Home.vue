<template>
    <div>
        <Users v-bind:users="users"></Users>
    </div>
</template>

<script>
import api from'@/api';
import Users from '@/views/Users.vue';

export default {
    name: 'Home',
    components:{ 
        Users         
    },
    data(){
        return {
            users:[]
        }
    },
    created(){
        //api.getUsersPromise().then(data => console.log(data));
        api.getUsersPromise().then(data => this.users = data);
        // ( async ()=>{ 
        //     this.users = await api.getUsersAsync();
        //     console.log(this.users);
        // })();
    }
}
</script>