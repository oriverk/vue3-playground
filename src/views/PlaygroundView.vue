<script setup lang="ts">
import SandBox from "../components/SandBox.vue";
</script>

<template>
  <div class="about">
    <h1>This is an playground page</h1>
    <div class="ground">
      <SandBox />
    </div>
  </div>
</template>

<style>
.ground {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
