<script setup>
import { ref } from "vue";
import ChildComp from "./PlaySlot.vue";

const msg = ref("from parent");
</script>

<template>
  <ChildComp>Message: {{ msg }}</ChildComp>
</template>
