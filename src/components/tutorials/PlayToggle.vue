<script setup lang="ts">
import { ref } from "vue";
const awesome = ref<boolean>(true);
function toggle() {
  awesome.value = !awesome.value;
}
</script>

<template>
  <div>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">Awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>
