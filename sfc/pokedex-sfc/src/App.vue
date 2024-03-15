<template>
    <div class="container-fluid bg-dark bg-gradient">
        <div class="container bg-dark" style="min-height: 100vh;">
          
          <div class="menu">
            <HeaderPage />
          </div>

          <div class="main mt-3 pt-5">
            <RouterView />
          </div>
          
        </div>
    </div>
</template>

<script setup>
  import HeaderPage from "./components/Header.vue"
</script>

