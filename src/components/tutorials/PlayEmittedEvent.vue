<script setup lang="ts">
import { ref } from "vue";
import ChildComp from "./PlayEmitEvent.vue";

const childMsg = ref<string>("No child msg yet");
</script>

<template>
  <div>
    <ChildComp @response="(msg: string) => (childMsg = msg)" />
    <p>{{ childMsg }}</p>
  </div>
</template>
