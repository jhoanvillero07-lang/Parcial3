<template>
  <div class="millas-container p-4">
    <h1 class="mb-4">Historial de Millas (Cédula: {{ viajeroId }})</h1>

    <div class="grid mb-5">
        <div class="col-12 md:col-6">
            <label for="fechaInicial" class="block mb-2 text-sm text-500">Seleccione una fecha inicial</label>
            <InputText id="fechaInicial" type="date" class="w-full" />
        </div>
        <div class="col-12 md:col-6">
            <label for="fechaFinal" class="block mb-2 text-sm text-500">Seleccione una fecha final</label>
            <InputText id="fechaFinal" type="date" class="w-full" />
        </div>
    </div>
    
    <div v-if="loading" class="text-center text-xl">Cargando historial de millas...</div>
    <div v-else-if="!historialMillas.length" class="text-center text-xl text-red-500">No se encontraron millas para esta cédula.</div>

    <div class="p-card shadow-2 mb-3 p-3" 
         v-for="milla in historialMillas" 
         :key="milla.id">
        
        <div class="flex justify-content-between align-items-center">
            
            <div>
                <h3 class="mt-0 mb-1 font-bold">{{ milla.conceptoTipo }}</h3>
                <p class="text-sm text-500">{{ milla.concepto }} | {{ milla.fechaAcumulacion }} | {{ milla.fechaVencimiento }}</p>
            </div>
            
            <div :class="{'bg-green-500': !milla.vencida, 'bg-red-500': milla.vencida}" 
                 class="text-white p-2 border-round-xl font-bold">
                {{ milla.acumulacion == 1 ? '+' : '-' }}{{ milla.millas }} KM
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MillasView',
  data() {
    return {
      viajeroId: null,
      historialMillas: [],
      loading: true,
    };
  },
  created() {
    this.viajeroId = this.$route.params.id;
    if (this.viajeroId) {
      this.cargarMillas(this.viajeroId);
    } else {
        this.loading = false;
    }
  },
  methods: {
    async cargarMillas(cedula) {
      this.loading = true;
      const urlAPI = `https://cobuses.com.co/APIV2/model/parcial.php?dato=getmillasxcedula&cedula=${cedula}`;
      
      try {
        const response = await this.axios.get(urlAPI);
        
        if (response.status === 200 && response.data && Array.isArray(response.data)) {
          
          this.historialMillas = response.data.map(item => {
            const fechaVencimiento = new Date(item.fechaVencimiento);
            const hoy = new Date();
            const vencida = fechaVencimiento < hoy; 
            
            return {
                ...item,
                vencida: vencida,
                conceptoTipo: vencida ? 'Vencimiento de Millas' : 
                              (item.concepto.includes('Compra') ? 'Compra de Millas' : 'Acumulación de Millas')
            };
          });
          
        } else {
            this.historialMillas = [];
        }

      } catch (error) {
        console.error("Error al cargar millas:", error);
      } finally {
          this.loading = false;
      }
    }
  }
}
</script>