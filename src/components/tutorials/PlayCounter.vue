<script setup lang="ts">
import { ref } from "vue";
const count = ref<number>(0);
function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <button @click="increment">{{ count }}</button>
  </div>
</template>
