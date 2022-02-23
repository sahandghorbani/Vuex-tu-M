import counterMutations from './mutations'
import counterActions from './actions'
import conuterGetters from './getters'

export default {
    state(){
      return{
        counter: 0,
      }
    }, 
    mutations:counterMutations,
    actions:counterActions,
    getters :conuterGetters, 
  }
  