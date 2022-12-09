<script setup>
import { useMouse } from "./composable/mouse.js";

const { x, y } = useMouse();
</script>

<template>
  <div :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="text">
    Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>

<style>
.text {
  padding-inline: 1rem;
  color:#000;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
</style>
