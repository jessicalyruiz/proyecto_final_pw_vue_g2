<template>
  <h2>Buscar Cliente</h2>
  <div class="fromMine">
  <div class="form-group">
        <label class="form-label" for="apellido">Apellido</label>
        <input v-model="apellido" class="form-control" type="text" id="apellido">
        <button v-on:click="buscar" class="btnGo">Buscar</button>
  </div>
</div>

<div class="card" >
        
        
            <table class="table table-dark" >
            <thead >
                <tr>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Visualizar</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in clientes" :key="c.id">
                    <td>{{ c.apellido }}</td>
                    <td>{{ c.nombre }}</td>
                    <td><router-link :to="{name:'VerBuscarClienteE', params:{idCliente: c.id}}"> Visualizar</router-link></td>
                    <td><router-link :to="{name:'ActualizarBuscarClienteE', params:{idC: c.id}}"> Actualizar</router-link></td>
                    <td><button v-on:click="eliminar(c.id)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
        

    </div>

</template>

<script>

import {buscarClienteFachada,eliminarClienteFachada} from '@/js/api_rentCar/ProcesarEmpleado'

export default {

    data(){
        return{
            apellido:null,
            clientes:null,
        }
    },
    methods:{
        async buscar(){
            console.log('buscar  '+this.apellido)
            const listaClientes=await buscarClienteFachada(this.apellido)
            this.clientes=listaClientes
            console.log('buscar clientes list  '+listaClientes)
            console.log('buscar clientes  '+this.clientes)
        },
        async eliminar(id){
            console.log('eliminar  '+id)
            eliminarClienteFachada(id)
            window.alert("Cliente eliminado")
        }
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