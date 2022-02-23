
import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters' ;
import counterModule from './moduls/counter/index' ;
import darkTheme from './moduls/colorize/index'


  const store = createStore({
    modules:{
      name: counterModule ,
      theme : darkTheme ,
    } ,
  
    state() {
      return {
        isLoggedIn: false
      };
    },
    mutations:rootMutations ,
    actions:rootActions,
    getters:rootGetters 
  });


  export default store ; 