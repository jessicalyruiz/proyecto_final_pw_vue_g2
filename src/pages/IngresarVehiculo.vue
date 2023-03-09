<template>
  <h2>Ingresar Vehiculo</h2>
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
        <select class="form-select" aria-label=".form-select-lg example" name="model" id="modelo" v-model="modeloSellecionado">
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


        <button v-on:click="ingresar" class="btnGo">Ingresar</button>
    </div>
    </div>
</template>

<script>

import {ingresarVehiculoFachada} from '@/js/api_rentCar/ProcesarEmpleado'
export default {

  data(){
        return{
          placa:null,
                nombre:null,
                marca:null,
                modelo:null,
                marcas:null,
                modelos:null,
                marcaSeleccionada:null,
                anio:null,
                cilindraje:null,
                avaluo:null,
                valor:null,
        }
    },
    methods:{
        ingresar(){
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
         ingresarVehiculoFachada(myVehiculo)
         window.alert("Vehiculo ingresado")
        },
        llenarMarcas(){
          const marcas=[
            "Toyota",
             "Ford",
              "Chevrolet",
              "Honda",
              "Nissan",
              "BMW"
        ]
        console.log('marcas:  '+marcas)
        this.marcas=marcas
        },
        llenarModelos(){
          const modelos=[
              "Prius",
            "EcoSport",
             "Camaro",
             "Odyssey",
             "Sentra",
              "GranCoupe"
        ]
        this.modelos=modelos
        }
    },
    mounted(){
        this.llenarMarcas();
        this.llenarModelos();
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