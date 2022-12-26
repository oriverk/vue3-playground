<script setup lang="ts">
interface IEmit {
  (event: "response", value: string): void;
}
// const emit = defineEmits(["response"]);
const emit = defineEmits<IEmit>();

emit("response", "hello from child");
</script>

<template>
  <h2>Child component</h2>
</template>
