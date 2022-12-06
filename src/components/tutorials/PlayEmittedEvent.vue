<script setup>
import { ref } from "vue";
import ChildComp from "./PlayEmitEvent.vue";

const childMsg = ref("No child msg yet");
</script>

<template>
  <div>
    <ChildComp @response="(msg) => (childMsg = msg)" />
    <p>{{ childMsg }}</p>
  </div>
</template>
