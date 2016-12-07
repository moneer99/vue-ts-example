import { create } from 'kilimanjaro'


var store =

  create({count: 0}) // create a state with initial state
  .getter('count', s => s.count) // a getter
  .mutation('increment', s => () => s.count++) // define a mutation
  .mutation('decrement', s => () => s.count--) // payload is in the second parameter parenthesis
  .done()

store.commit('increment') // make a state change
// store.commit('ncrement') // typo won't compile! magic!

export default store;
