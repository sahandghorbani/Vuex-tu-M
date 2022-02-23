<template>
  <button @click="login" v-if="!isLoggedIn">Login</button>
  <button @click="logout" v-if="isLoggedIn">Logout</button>
</template>

<script>
import { mapActions ,mapState } from "vuex";
export default {
  methods: {
    ...mapActions(['login' , 'logout']) ,

  },
  computed: {
    ...mapState(['isLoggedIn'])

  }
}
</script>