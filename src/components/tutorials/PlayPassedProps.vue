<script setup>
import { ref } from "vue";
import PlayPassProps from "./PlayPassProps.vue";
const greeting = ref("passed props from parent");
</script>

<template>
  <PlayPassProps :msg="greeting" />
</template>
