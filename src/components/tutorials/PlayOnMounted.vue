<script setup>
import { ref, onMounted } from "vue";

const p = ref(null);
onMounted(() => {
  console.log("onMounted");
  p.value.textContent = "mounted";
});
</script>

<template>
  <p ref="p">hello</p>
</template>
