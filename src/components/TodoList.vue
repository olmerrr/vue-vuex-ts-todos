<template>
  <div class="todo-list">
    <Todo 
      v-for="(todo, index) in $store.state.todos" 
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Todo from './Todo.vue'

@Options ({
  components: {
    Todo
  },
})

export default class TodoList extends Vue {}
</script>

<style>

</style>