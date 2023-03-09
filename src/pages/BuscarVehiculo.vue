<template>
  <h2>Buscar Vehiculo</h2>
  <div class="fromMine">
  <div class="form-group">
        <label class="form-label" for="marca">Marca</label>
        <select class="form-select" aria-label="Default select example"  id="marca" v-model="marcaSeleccionada">
            <option selected>Seleccione</option>
            <option v-for="marca in marcas" :value="marca" :key="marca">{{ marca }}</option>
        </select>
        <button v-on:click="buscar" class="btnGo">Buscar</button>
  </div>
</div>

<div class="card" >
        
        
            <table class="table table-dark" >
            <thead >
                <tr>
                    <th>Placa</th>
                    <th>Marca</th>
                    <th>Visualizar</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="v in Vehiculos" :key="v.id">
                    <td>{{ v.placa }}</td>
                    <td>{{ v.marca }}</td>
                    <td><router-link :to="{name:'VerBuscarVehiculo', params:{idVehiculo: v.id}}"> Visualizar</router-link></td>
                    <td><router-link :to="{name:'ActualizarBuscarVechiculo', params:{idV: v.id}}"> Actualizar</router-link></td>
                    <td><button v-on:click="eliminar(v.id)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
        

    </div>

</template>

<script>

import {buscarVehiculoFachada,eliminarVehiculoFachada} from '@/js/api_rentCar/ProcesarEmpleado'
import {buscarMarcasFachada} from '@/js/api_rentCar/ProcesarClientes'

export default {

    data(){
        return{
            marcaSeleccionada:null,
            marcas:null,
            Vehiculos:null,
        }
    },
    methods:{
        async buscar(){
            console.log('buscar  '+this.marcaSeleccionada)
            const listaVehiculos=await buscarVehiculoFachada(this.marcaSeleccionada)
            this.Vehiculos=listaVehiculos
            console.log('buscar Vehiculos list  '+listaVehiculos)
            console.log('buscar Vehiculos  '+this.Vehiculos)
        },
        async eliminar(id){
            console.log('eliminar  '+id)
            eliminarVehiculoFachada(id)
            window.alert("Vehiculo eliminado")
        },
        async buscarMarcas(){
            const listaMarcas= await buscarMarcasFachada()
            this.marcas=listaMarcas
            console.log(this.marcas)
            console.log(listaMarcas)
        },
    },
    mounted(){
        this.buscarMarcas();
        
    },

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