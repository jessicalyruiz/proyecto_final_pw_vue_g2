<template>
      <div class="fromMine">
        <div class="form-group">
        <label class="form-label" for="cedula">Cédula</label>
        <input v-model="cedula" class="form-control" type="text" id="cedula">

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
        <button v-on:click="$emit('clienteNuevo',{
                            cCedula:cedula,
                            cNombre:nombre,
                            cApellido:apellido,
                            cFecha:fecha,
                            cGenero:genero,})" class="btnGo">Ingresar</button>
    </div>
    </div>
</template>

<script>


export default {
    data(){
        return{
                cedula:null,
                nombre:null,
                apellido:null,
                fecha:null,
                genero:null,

        }
    },
    methods:{
        
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