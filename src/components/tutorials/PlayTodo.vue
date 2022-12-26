<script setup lang="ts">
import { ref, computed } from "vue";

interface ITodo {
  id: number;
  text: string;
  done?: boolean;
}

let id = 0;
const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref<ITodo[]>([
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn Vue", done: false },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  if (!newTodo.value) return;

  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = "";
}
function removeTodo(todo: ITodo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "show all" : "hide Completed" }}
    </button>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
