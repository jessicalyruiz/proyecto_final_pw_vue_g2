<template>
  <h2>Visualizar Cliente</h2>
  <p>{{ idCliente }}</p>

  <table class="table table-dark" >
            <thead >
                <tr>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Cédula</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Género</th>
                    <th>Tipo de Registro</th>
                    <th>Reservas</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>{{ apellido }}</td>
                    <td>{{ nombre}}</td>
                    <td>{{ cedula}}</td>
                    <td>{{ fechaNacimiento}}</td>
                    <td>{{ genero}}</td>
                    <td>{{ tipoRegistro}}</td>
                    <td><a :href="reservas">reservas</a></td>
                  
                    
                </tr>
            </tbody>
        </table>
        
</template>

<script>
import {visualizarClienteIdFachada} from '@/js/api_rentCar/ProcesarEmpleado'
export default {
  props:{
    idCliente:null,
  },
  data(){
    return{
        
        apellido:null,
        nombre:null,
        cedula:null,
        fechaNacimiento:null,
        tipoRegistro:null, 
        genero:null,
        reservas:null,
    }
  },
  methods:{
      async mostrar(){
        console.log(this.idCliente)
          const {apellido,nombre,cedula,fechaNacimiento,tipoRegistro, genero,_links}= await visualizarClienteIdFachada(this.idCliente);
          this.apellido=apellido
          this.nombre=nombre
          this.cedula=cedula
          this.fechaNacimiento=fechaNacimiento
          this.tipoRegistro=tipoRegistro
          this.genero=genero
          this.reservas=_links.reservas.href
          console.log('reservas '+this.reservas)
      }
  },
  mounted(){
      this.mostrar();
  }
}
</script>

<style>

</style>