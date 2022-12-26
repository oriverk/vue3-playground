<script setup lang="ts">
import { ref } from "vue";
import PlayPassProps from "./PlayPassProps.vue";
const greeting = ref<string>("passed props from parent");
</script>

<template>
  <PlayPassProps :msg="greeting" />
</template>
