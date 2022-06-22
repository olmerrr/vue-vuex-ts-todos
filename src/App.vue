<template>
  <div>
    <h2>{{title}}</h2>
    <InputTodo />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';

@Options({
  components: {
    InputTodo,
    TodoList
  },
})
export default class App extends Vue {
 public title = 'Your Todo List'

//  public mounted() {
//   console.log('Page loaded!');
//  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  max-width: 1400px;
}
</style>
