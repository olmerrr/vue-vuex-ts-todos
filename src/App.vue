<template>
  <div>
    <h2 class="main-title">{{ title }}</h2>
    <InputTodo />
    <TodoList />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from "vue-class-component";
  import InputTodo from "./components/InputTodo.vue";
  import TodoList from "./components/TodoList.vue";

  @Options({
    components: {
      InputTodo,
      TodoList,
    },
  })
  export default class App extends Vue {
    public title = "Your Todo List";

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
  
  .main-title {
    font-size: 26px;
    font-weight: 600;
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
    cursor: pointer;
  }

  .del {
    background-color: rgb(244, 83, 83);
  }
</style>
