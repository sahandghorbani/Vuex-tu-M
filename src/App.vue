<template>
  <div :class="themeHandler">
    <base-container title="Vuex" v-if="isLoggedIn">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
 
  <base-container >
    <dark-light></dark-light>
  </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue' ;
import TheCounter from './components/TheCounter.vue' ;
import ChangeCounter from './components/ChangeCounter.vue' ;
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import {mapState} from "vuex" ;
import DarkLight from './components/DarkTheme.vue'



export default {

  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
    DarkLight
  },
  computed: {
    ...mapState(['isLoggedIn' , 'theme']) ,
    themeHandler(){
       return {darkTheme : this.theme.theme=='dark'}
    }
  },
  methods: { 
    addOne() {
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  
}

.darkTheme{
  background: rgba(42, 42, 42, 0.527);
}
</style>

