<template>
  <div 
    class="input-todo"
    @keypress.enter="addTodo"
    >
    <input type="text" 
      class="field"
      placeholder="Write Todo"
      v-model="newTodo"
    />
    <button 
      class="btn"
      @click="addTodo">
      Add Todo
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import store from '@/store'

export default class InputTodo extends Vue {
  public newTodo = '';
  public addTodo(): void {
    if (this.newTodo && this.newTodo.length) {
      store.dispatch('addTodo', this.newTodo)
      this.newTodo = '';
    } else alert('Please, write Todo')
  }
}
</script>

<style lang="scss" scoped>
  .input-todo {
    display: flex;
    align-items: center;

  .field {
    border-radius: 4px;
    height: 25px;
    width: 256px;
    margin-right: 25px;
    font-size: 20px;
  }
}
 
</style>
