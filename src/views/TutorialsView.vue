<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { routes } from "../router";
const children = ref(
  routes
    .find((r) => r.path === "/tutorials")
    .children.map(({ name, path }) => {
      return {
        name,
        path: `/tutorials/${path}`,
      };
    })
);
</script>

<template>
  <div class="about">
    <h1>This is an tutorials page</h1>
    <div class="ground">
      <ul>
        <li v-for="{ path, name } in children" :key="path">
          <RouterLink :to="path">
            {{ name }}
          </RouterLink>
        </li>
      </ul>
      <RouterView />
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
