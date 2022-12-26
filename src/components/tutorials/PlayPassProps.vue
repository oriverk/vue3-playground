<script setup lang="ts">
interface IProps {
  msg: string;
}

withDefaults(defineProps<IProps>(), { msg: "" });
</script>

<template>
  <h2>{{ msg || "No props passed yet" }}</h2>
</template>
