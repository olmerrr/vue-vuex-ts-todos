<template>
  <div class="todo">
    <span v-text="todo"></span>
    <button 
      class="btn del"
      @click="deleteTodo"
    >Del</button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

@Options({
  props: ['todo'],
  methods: {
    deleteTodo(): void {
      this.$store.dispatch('deleteTodo', this.todo)
    }
  }
})

export default class Todo extends Vue {}
</script>

<style lang="scss" scoped>
  .todo {
    margin: 18px 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 20px;
    border-bottom: 1px dashed #ccc;
  }
</style>