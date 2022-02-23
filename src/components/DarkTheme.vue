<template>
  <button @click="themeChanger"> {{theme.theme}}  </button>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods:{
    themeChanger(){
      return this.$store.commit('changeColor')
    }
  } ,
  
  computed: {
...mapState(['theme'])
  }
}
</script>

<style>

</style>