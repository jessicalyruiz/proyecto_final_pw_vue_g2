<template>
  <h2>Vehiculos disponibles</h2>
  
    <div class="fromMine">
        <label class="form-label" for="marca">Marca</label>
        <select class="form-select" aria-label="Default select example"  id="marca" v-model="marcaSeleccionada">
            <option selected>Seleccione</option>
            <option v-for="marca in marcas" :value="marca" :key="marca">{{ marca }}</option>
        </select>

        <label class="form-label" for="modelo">Modelo</label>
        <select class="form-select" aria-label=".form-select-lg example" name="model" id="modelo" v-model="modeloSellecionado">
            <option selected>Seleccione</option>
            <option v-for="modelo in modelos" :value="modelo" :key="modelo">{{ modelo }}</option>
        </select>


        <button v-on:click="buscar" class="btnGo">Buscar</button>
    </div>


    <div class="card" v-for="v in listaVehiculos" :key="v.id">
        <img :src="v.photo" alt="vehiculo Img">
        <div class="card-body">
            <table class="table table-dark">
            <thead >
                <tr>
                    <th>Placa</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Año</th>
                    <th>Estado</th>
                    <th>Valor por día</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ v.placa }}</td>
                    <td>{{ v.modelo }}</td>
                    <td>{{ v.marca }}</td>
                    <td>{{ v.anioFabricacion }}</td>
                    <td>{{ v.estado }}</td>
                    <td>{{ v.valorPorDia }}</td>
                </tr>
            </tbody>
        </table>
        </div>

    </div>


</template>

<script>
import {buscarMarcasFachada, buscarModelosFachada,buscarVehiculoDFachada } from '@/js/api_rentCar/ProcesarClientes'

export default {

    data(){
        return{
            marcaSeleccionada:null,
            modeloSellecionado:null,
            marcas:null,
            modelos:null,
            listaVehiculos:null,
        }
    },
   
    methods:{
            async buscarMarcas(){
            const listaMarcas= await buscarMarcasFachada()
            this.marcas=listaMarcas
            console.log(this.marcas)
            console.log(listaMarcas)
        },
        async buscarModelos(){
            const listaModelos= await buscarModelosFachada()
            this.modelos=listaModelos
            console.log(this.modelos)
            console.log(listaModelos)
        },
        async buscar(){
            console.log('marca   '+this.marcaSeleccionada)
            console.log(this.modeloSellecionado)
            const vehiculos=await buscarVehiculoDFachada(this.marcaSeleccionada, this.modeloSellecionado)
            this.listaVehiculos=vehiculos
            console.log(this.listaVehiculos)
        }
    },
    mounted(){
        this.buscarMarcas();
        this.buscarModelos();
    },
}
</script>

<style>
.fromMine{
    padding: 100px;
    margin-left: 200px;
    margin-right: 200px;
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