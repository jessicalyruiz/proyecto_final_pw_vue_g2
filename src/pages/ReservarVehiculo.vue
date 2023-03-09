<template>
  <h2>Reservar Vehículo</h2>
  <div class="fromMine">
        <div class="form-group">
        <label class="form-label" for="placa">Placa</label>
        <input v-model="placa" class="form-control" type="text" id="placa">

        <label class="form-label" for="cedula">Cedula del Cliente</label>
        <input v-model="cedula" class="form-control" type="text" id="cedula">


        <label class="form-label" for="fechaInicio">Fecha Inicio</label>
        <input v-model="fechaInicio" type="datetime-local" class="form-control" id="fechaInicio">

        <label class="form-label" for="fechaFin">Fecha Fin</label>
        <input v-model="fechaFin" type="datetime-local" class="form-control" id="fechaFin">

        <button v-on:click="reservar" class="btnGo">Reservar</button>
    </div>
    </div>

    <div v-if="!tieneReservas" class="fromMine">
        <div  class="form-group">
          <h3> El vehículo está disponible</h3>
        <h3> Valor Total a Pagar</h3>
        <h3>$ {{ valorTotal }}</h3>
        

        <label class="form-label" for="tarjeta">Tarjeta de Crédito</label>
        <input v-model="tarjeta" class="form-control" type="text" id="tarjeta">


        <button v-on:click="pagar" class="btnGo">Pagar</button>
    </div>
    </div>

    <div v-if="mostrarTieneReservas" class="fromMine">
      <h3>El vehiculo tiene una reserva en las fechas seleccionadas</h3>
    </div>
     
    
  
</template>

<script>

import {verificarTieneReservasFachada,buscarClienteCedulaFachada,buscarVehiculoPlacaFachada,pagarVehiculoFachada} from '@/js/api_rentCar/ProcesarClientes'
export default {

  data(){
        return{
          placa:null,
          cedula:null,
                
                marca:null,
                modelo:null,
                
                anio:null,
                cilindraje:null,
                avaluo:null,
                valor:null,
                fechaInicio:null,
                fechaFin:null,
                tieneReservas:true,
                mostrarTieneReservas:false,
                apellido:null,
        nombre:null,
        fechaNacimiento:null,
        tipoRegistro:null, 
        genero:null,

        vehiculoTO:null,
        clienteTO:null,
        valorTotal:null,
        tarjeta:null,
        cobroTO:null,
        numeroReserva:null,
        }
    },
    methods:{
     async reservar(){


        const myVehiculo= {
            "placa":this.placa,
         }
         this.vehiculoTO=myVehiculo
         const myCliente= {
            "cedula":this.cedula,
         }
         this.clienteTO=myCliente
         const myReserva={
          "fechaInicio":this.fechaInicio,
          "fechaFin":this.fechaFin,
          "vehiculoTO":myVehiculo,
          "clienteTO":myCliente
         }
          console.log("cliente: ", this.clienteTO)

          console.log("myreserva: "+myReserva)
         const {verificarReservas,cobroTO}=await verificarTieneReservasFachada(this.placa,this.cedula,this.fechaInicio, this.fechaFin)
         this.tieneReservas=verificarReservas
         this.mostrarTieneReservas=verificarReservas
         this.valorTotal=cobroTO.valorTotalPagar
         console.log(cobroTO)
         console.log('valor total: '+this.valorTotal)
         this.cobroTO=cobroTO
         
        },
        

        async pagar(){
          const myReserva={
          "fechaInicio":this.fechaInicio,
          "fechaFin":this.fechaFin,
          "vehiculoTO":this.vehiculoTO,
          "clienteTo":this.clienteTO
         }
         console.log(this.placa)
         console.log(this.cedula)
         console.log(this.fechaInicio)
         console.log(this.fechaFin)
         console.log(this.tarjeta)

          const {numero}=await pagarVehiculoFachada(this.placa,this.cedula,this.fechaInicio, this.fechaFin,this.tarjeta)
          window.alert("Numero de Reserva:"+numero)
        },
       
    },
    mounted(){
        
    }
}
</script>

<style>
.fromMine{
    padding: 100px;
    margin-left: 150px;
    margin-right: 150px;
    text-align: left
}

.btnGo {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border: 2px solid #555555;
  border-radius: 12px;
  padding: 10px 40px;
  margin-top: 10px;
}

.btnGo:hover {
  background-color: #e2a6a6;
  color: white;
}
</style>