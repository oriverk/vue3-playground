<script setup lang="ts">
import { ref, onMounted } from "vue";

const p = ref();
onMounted(() => {
  console.log("onMounted");
  p.value.textContent = "mounted";
});
</script>

<template>
  <p ref="p">hello</p>
</template>
