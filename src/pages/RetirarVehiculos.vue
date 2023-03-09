<template>
  <div class="form-group">
    <label class="form-label" for="numeroReserva">Numero Reserva</label>
    <input v-model="numReserva" class="form-control" type="text" id="numeroReserva">
    <button v-on:click="buscarReserva" class="btnGo">Buscar Reserva</button>

  </div>


  <div class="card" >

    <table class="table table-dark" >
      <thead >
      <tr>
        <th>Numero reserva</th>
        <th>Estado</th>
        <th>Cliente</th>
        <th>Vehiculo</th>
        <th>Cobro</th>

      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ resReserva.numReserva }}</td>
        <td>{{ resReserva.estado}}</td>
        <td>{{ resReserva.clientes}}</td>
        <td>{{ resReserva.idVehiculo}}</td>
<!--        <td>{{ resReserva.cobro}}</td>-->
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import {obtenerPorNumeroReservaFachada} from "@/js/api_rentCar/ProcesarReserva"
export default {
  name: "RetirarVehiculos",
  data(){
    return{
      numReserva: null,
      resReserva: null,
    }
  },
  methods:{
    buscarReserva(){
      this.resReserva = obtenerPorNumeroReservaFachada(this.numReserva)
    }
  }
}
</script>

<style scoped>

</style>