<template>
  <h2>Visualizar Vehiculo</h2>
  <p>{{ idVehiculo }}</p>

  <table class="table table-dark" >
            <thead >
                <tr>
                    <th>Placa</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Estado</th>
                    <th>Año</th>
                    <th>Valor por día</th>
                    <th>País</th>
                    <th>Avalúo</th>
                    <th>Cilindraje</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>{{ placa }}</td>
                    <td>{{ marca}}</td>
                    <td>{{ modelo}}</td>
                    <td>{{ estado}}</td>
                    <td>{{ anio}}</td>
                    <td>{{ valor}}</td>
                    <td>{{ pais}}</td>
                    <td>{{ avaluo}}</td>
                    <td>{{ cilindraje}}</td>
                    
                </tr>
            </tbody>
        </table>
        
</template>

<script>
import {visualizarVehiculoIdFachada} from '@/js/api_rentCar/ProcesarEmpleado'
export default {
  props:{
    idVehiculo:null,
  },
  data(){
    return{
        
        placa:null,
        marca:null,
        modelo:null,
        estado:null,
        anio:null, 
        valor:null,
        avaluo:null,
        cilindraje:null,
        pais:null,

    }
  },
  methods:{
      async mostrar(){
        console.log(this.idVehiculo)
          const {placa,marca,modelo,estado,anioFabricacion, valorPorDia,cilindraje,paisFabricacion,avaluo}= await visualizarVehiculoIdFachada(this.idVehiculo);
          this.placa=placa
          this.marca=marca
          this.modelo=modelo
          this.estado=estado
          this.anio=anioFabricacion
          this.valor=valorPorDia
          this.avaluo=avaluo
          this.cilindraje=cilindraje
          this.pais=paisFabricacion
      }
  },
  mounted(){
      this.mostrar();
  }
}
</script>

<style>

</style>