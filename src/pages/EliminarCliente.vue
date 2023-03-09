<template>
  <h2>Actualizar Cliente</h2>
  <p>{{ idC }}</p>
  <div class="fromMine">
    <div class="form-group">

      <label class="form-label" for="id">Ingrese el id a eliminar</label>
      <input v-model="id" class="form-control" type="text" id="id">
      <br>
      <br>

      <label class="form-label" for="nombre">Nombre</label>
      <input v-model="nombre" class="form-control" type="text" id="nombre">

      <label class="form-label" for="apellido">Apellido</label>
      <input v-model="apellido" class="form-control" type="text" id="apellido">

      <label class="form-label" for="modelo">Fecha de Nacimiento</label>
      <input v-model="fecha" type="date" class="form-control" >

      <label class="form-label" for="modelo">Género</label>
      <select class="form-select" aria-label=".form-select-lg example" name="model" id="modelo" v-model="genero">
        <option selected>Seleccione</option>
        <option  value="masculino" >Masculino</option>
        <option  value="femenino" >Femenino</option>
      </select>

      <button v-on:click="actualizar" class="btnGo">Actualizar</button>
    </div>
    <button v-on:click="limpiar" class="btnGo">Limpiar</button>
  </div>

</template>


<script>
import {actualizarClienteFachada,visualizarClienteIdFachada} from '@/js/api_rentCar/ProcesarEmpleado'
import {actualizarFachada,buscarClientePorIdFachada} from '@/js/api_rentCar/ProcesarClientes'
export default {
  props:{
    idC:null,
  },
  data(){
    return{
        id: null,
        apellido:null,
        nombre:null,
        cedula:null,
        fechaNacimiento:null,
        tipoRegistro:null, 
        genero:null,
      
    }
  },
  methods:{
      async mostrar(){
        console.log('actualizar  '+this.idCliente)
          const {apellido,nombre,cedula,fechaNacimiento,tipoRegistro, genero,}= await visualizarClienteIdFachada(this.idC);
          this.apellido=apellido
          this.nombre=nombre
          this.cedula=cedula
          this.fechaNacimiento=fechaNacimiento
          this.tipoRegistro=tipoRegistro
          this.genero=genero


          
      }, 
      async actualizar() {
        const data = await buscarClientePorIdFachada(this.id);
        console.log("******************************************************")
        console.log(data)
          data.nombre= this.nombre
          data.apellido= this.apellido
          data.fechaNacimiento= this.fechaNacimiento
          data.genero= this.genero
        console.log('actualizar ' + this.idC)
        actualizarFachada(data.id, data)
        window.alert("Actualizado con exito")
      },
    limpiar(){
      this.apellido=null
      this.id=null
      this.nombre=null
      this.cedula=null
      this.fechaNacimiento=null
      this.genero=null
    }
  },
  mounted(){
      this.mostrar();
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