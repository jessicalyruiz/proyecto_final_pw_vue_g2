<template>
  <h2>Actualizar Cliente</h2>
  <p>{{ idC }}</p>
  <div class="fromMine">
        <div class="form-group">
        <label class="form-label" for="cedula">Cédula</label>
        <input v-model="cedula" class="form-control" type="text" id="cedula" :placeholder="cedula">

        <label class="form-label" for="nombre">Nombre</label>
        <input v-model="nombre" class="form-control" type="text" id="nombre">

        <label class="form-label" for="apellido">Apellido</label>
        <input v-model="apellido" class="form-control" type="text" id="apellido">

        <label class="form-label" for="modelo">Fecha de Nacimiento</label>
        <input v-model="fecha" type="date" class="form-control" :placeholder="fechaNacimiento">

        <label class="form-label" for="modelo">Género</label>
        <select class="form-select" aria-label=".form-select-lg example" name="model" id="modelo" v-model="genero">
            <option selected>Seleccione</option>
            <option  value="masculino" >Masculino</option>
            <option  value="femenino" >Femenino</option>
        </select>
        <button v-on:click="actualizar" class="btnGo">Actualizar</button>
    </div>
    </div>
</template>


<script>
import {actualizarClienteFachada,visualizarClienteIdFachada} from '@/js/api_rentCar/ProcesarEmpleado'
export default {
  props:{
    idC:null,
  },
  data(){
    return{
        
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
      actualizar(){
        const myCliente={
                "nombre": this.nombre,
                "apellido": this.apellido,
                "cedula": this.cedula,
                "fechaNacimiento": this.fechaNacimiento,
                "genero": this.genero,
                "tipoRegistro":this.tipoRegistro
      }
      console.log('actualizar '+this.idC)
        actualizarClienteFachada(this.idC,myCliente )
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