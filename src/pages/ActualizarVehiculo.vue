<template>
  <h2>Actualizar Vehiculo</h2>
  <p>{{ idV }}</p>
  <div class="fromMine">
        <div class="form-group">
        <label class="form-label" for="placa">Placa</label>
        <input v-model="placa" class="form-control" type="text" id="placa">

        <label class="form-label" for="marca">Marca</label>
        <select class="form-select" aria-label="Default select example"  id="marca" v-model="marcaSeleccionada">
            <option selected>Seleccione</option>
            <option v-for="marca in marcas" :value="marca" :key="marca">{{ marca }}</option>
        </select>

        <label class="form-label" for="modelo">Modelo</label>
        <select class="form-select" aria-label=".form-select-lg example" name="model" id="modelo" v-model="modeloSelecionado">
            <option selected>Seleccione</option>
            <option v-for="modelo in modelos" :value="modelo" :key="modelo">{{ modelo }}</option>
        </select>



        <label class="form-label" for="anio">Año de Fabricación</label>
        <input v-model="anio" class="form-control" type="number" id="anio">

        <label class="form-label" for="pais">País de Fabricación</label>
        <input v-model="pais" class="form-control" type="text" id="pais">

        <label class="form-label" for="cilindraje">Cilindraje</label>
        <input v-model="cilindraje" class="form-control" type="number" id="cilindraje">


        <label class="form-label" for="avaluo">Avalúo</label>
        <input v-model="avaluo" class="form-control" type="number" id="avaluo">


        <label class="form-label" for="valor">Valor por día</label>
        <input v-model="valor" class="form-control" type="number" id="valor">


        <button v-on:click="actualizar" class="btnGo">Actualizar</button>
    </div>
    </div>
</template>


<script>
import {actualizarVehiculoFachada,visualizarVehiculoIdFachada} from '@/js/api_rentCar/ProcesarEmpleado'
export default {
  props:{
    idV:null,
  },
  data(){
    return{
        
               placa:null,
                nombre:null,
                marca:null,
                modelo:null,
                marcas:null,
                modelos:null,
                marcaSeleccionada:null,
                modeloSelecionado:null,
                anio:null,
                cilindraje:null,
                avaluo:null,
                valor:null,
                pais:null,
      
    }
  },
  methods:{
      async mostrar(){
        console.log('actualizar  '+this.idV)
          const {placa,marca,modelo,estado,anioFabricacion, valorPorDia,cilindraje,paisFabricacion,avaluo}= await visualizarVehiculoIdFachada(this.idV);
          this.placa=placa
          this.marca=marca
          this.modelo=modelo
          this.estado=estado
          this.anio=anioFabricacion
          this.valor=valorPorDia
          this.avaluo=avaluo
          this.cilindraje=cilindraje
          this.pais=paisFabricacion
          
      }, 
      actualizar(){
        const myVehiculo= {
            "placa":this.placa,
            "marca": this.marcaSeleccionada,
            "modelo": this.modeloSellecionado,
            "anioFabricacion":this.anio,
            "valorPorDia": this.valor,
            "paisFabricacion":this.pais,
            "avaluo": this.avaluo,
            "cilindraje":this.cilindraje,
         }
      console.log('actualizar '+this.idV)
        actualizarVehiculoFachada(this.idV,myVehiculo )
        window.alert("Actualizado con exito")
      }
  },
  mounted(){
      this.mostrar();
  }

}
</script>

<style>

</style>