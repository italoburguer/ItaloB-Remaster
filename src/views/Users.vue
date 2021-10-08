<template>
  <div>
    <div v-for="user in users" :key="user.login.uuid">
      <a :href="'/user/'+user.login.uuid"><img :src="user.picture.medium" alt=""> </a>
      <h2>{{ user.name.first + " " + user.name.last }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
