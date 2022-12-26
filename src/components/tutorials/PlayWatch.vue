<script setup lang="ts">
import { ref, watch } from "vue";

const todoId = ref<number>(1);
const todoData = ref<any | null>(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}

fetchData();
watch(todoId, fetchData);
</script>

<template>
  <div>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>
