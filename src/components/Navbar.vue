<template>
  <div class="sidebar p-4 bg-primary text-white" style="width: 250px; flex-shrink: 0; min-height: 100vh;">
    <h3 class="mb-4 text-center">Agencia de Viajes</h3>
    <ul class="list-none p-0 m-0">
      <li class="mb-2">
        <router-link to="/home" 
                     class="p-ripple p-3 block text-white hover:bg-primary-dark transition-colors border-round">
          <i class="pi pi-briefcase mr-2"></i> Main Content
        </router-link>
      </li>
      <li class="mb-2">
        <router-link :to="{ name: 'MillasView', params: { id: '1004461197' } }" 
                     class="p-ripple p-3 block text-white hover:bg-primary-dark transition-colors border-round">
          <i class="pi pi-wallet mr-2"></i> Historial de Millas
        </router-link>
      </li>
      <li class="mb-2">
        <router-link to="/" 
                     class="p-ripple p-3 block text-white hover:bg-primary-dark transition-colors border-round">
          <i class="pi pi-sign-out mr-2"></i> Cerrar Sesión
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar' 
}
</script>