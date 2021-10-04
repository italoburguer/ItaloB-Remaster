<template>
    <div>
        <!-- <users-></users-> -->
    </div>
</template>

<script>
import api from'@/api';
// import Users from '@/views/Users.vue';

export default {
    name: 'Home',
    components:{ 
        // Users   
        
    },
    data(){
        return {
            users:[]
        }
    },
    created(){
        api.getUsersPromise().then(data => console.log(data));
        // (async ()=>{ 
        //     this.users = await api.getUsersAsync();
        // console.log(this.users);
        // })();
    }
}
</script>