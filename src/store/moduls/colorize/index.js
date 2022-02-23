import themeMutations from './mutations' ; 
import themeActions from './actions'  ;
import themeGetters from './getters' ;

export default {
    state(){
        return {
            theme: "light" ,
            color : 0
        }
    } ,
    mutations: themeMutations ,
    actions: themeActions ,
    getters: themeGetters
}