<template>
  <div class="todo-list">
    <Todo 
      v-for="(todo, index) in getTodos" 
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/store'

import Todo from './Todo.vue'

@Options ({
  components: {
    Todo
  },
  computed: {
    getTodos() {
    return this.$store.getters.getTodos;
    }
  }
})

export default class TodoList extends Vue {}
</script>

<style lang="scss" scoped>
  .todo-list {
    margin: 20px auto;
    box-shadow: 2px 2px 2px 1px rgb(202, 193, 202);
  }
</style>