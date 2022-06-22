import { createStore } from 'vuex'

export interface State {
  todos: string[]
}
export default createStore<State>({
  state: {
    todos: []
  },
  getters: {
    getTodos(state) {
      return state.todos
    }
  },
  mutations: {
    ADD_TODO(state, todo:string) {
      state.todos.push(todo)
    },
    DELETE_TODO(state, todo:string) {
      state.todos = state.todos.filter(t => t !== todo)
    }
  },
  actions: {
    addTodo({ commit }, todo: string) {
      commit('ADD_TODO', todo)
    },
    deleteTodo({ commit }, todo: string) {
      commit('DELETE_TODO', todo)
    }
  }
})
