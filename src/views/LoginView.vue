<template>
  <div class="login-container flex align-items-center justify-content-center p-5">
    <div class="card p-4 shadow-8 border-round-lg w-full md:w-4 lg:w-3 bg-white-alpha-90">
      <h2 class="text-center mb-4">Ingrese sus credenciales</h2>
      
      <div class="p-field mb-3">
        <label for="usuario" class="block mb-2">Usuario</label>
        <InputText id="usuario" v-model="usuario" class="w-full" />
      </div>

      <div class="p-field mb-4">
        <label for="contrasena" class="block mb-2">Contraseña</label>
        <PrimePassword id="contrasena" v-model="contrasena" :feedback="false" toggleMask class="w-full" inputClass="w-full"/>
      </div>
      
      <ButtonPrime label="Iniciar Sesión" icon="pi pi-sign-in" @click="iniciarSesion" class="w-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      usuario: '1004461197', 
      contrasena: '123456'
    };
  },
  methods: {
    async iniciarSesion() {
      if (this.contrasena === '123456') { 
        

        this.$router.push({ 
          name: 'MillasView', 
          params: { id: this.usuario } 
        });
        return; 
      } 
      
      alert('Usuario o contraseña incorrectos.'); 
    }
  }
}
</script>

<style scoped>
.login-container {

  background-image: url('../assets/fondoo.jpg'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.bg-white-alpha-90 {
    background-color: rgba(255, 255, 255, 0.9);
}
</style>