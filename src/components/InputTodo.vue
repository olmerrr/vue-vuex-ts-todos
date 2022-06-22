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
    store.dispatch('addTodo', this.newTodo)
    this.newTodo = '';
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
  }
  .btn {
    width: 120px;
    height: 32px;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    border: none;
    background-color: rgb(56, 50, 235);
    border-radius: 4px;
  }
}
 
</style>
