<script setup lang="ts">
</script>

<template>
  <h1 class="text-primary">
    My App
  </h1>
  <router-link exact-active-class="text-primary" to="/">
    Home
  </router-link>
  <router-link exact-active-class="text-primary" to="/about">
    About
  </router-link>
  <RouterView />
</template>
