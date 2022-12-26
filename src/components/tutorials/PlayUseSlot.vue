<script setup lang="ts">
import { ref } from "vue";
import ChildComp from "./PlaySlot.vue";

const msg = ref<string>("from parent");
</script>

<template>
  <ChildComp>Message: {{ msg }}</ChildComp>
</template>
