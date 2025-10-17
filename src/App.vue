<template>
  <div id="app" class="p-fluid">
    
    <template v-if="$route.path === '/'">
      <router-view/>
    </template>

    <template v-else>
      <div class="flex">
        <Navbar />
        
        <div class="main-content flex-grow-1">
          <router-view/>
        </div>
      </div>
    </template>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style>

body {
    margin: 0;
    font-family: var(--font-family);
    background-color: var(--surface-ground);
}

.main-content {
    min-height: 100vh;
    width: 100%; 
    overflow-y: auto;
}
</style>