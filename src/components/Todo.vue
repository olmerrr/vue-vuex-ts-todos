<template>
  <div class="todo">
    <span v-text="todo"></span>
    <button 
      class="btn"
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

<style>

</style>