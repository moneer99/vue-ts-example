<template>
<h1 @click="hello">hello {{name}}</h1>
</template>

<script>
import {Vuex, getHelper} from 'kilimanjaro'
import Store from './vuex/store'

const { getters, commit } = getHelper(Store)
// import dependency
import {Vue, Component} from 'av-ts'

// decorat vue class
@Component
export default class App extends Vue {
  // undecorated property will be packed in `data` option
  name = 'world'
  // undecorated method is just method
  hello() {
    alert('hello ' + this.name)
  }

  @Vuex count: number = getters('count')
  @Vuex add: Function = commit('increment')
}
</script>
