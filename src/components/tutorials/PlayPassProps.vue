<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  msg: String,
});
</script>

<template>
  <h2>{{ msg || "No props passed yet" }}</h2>
</template>
