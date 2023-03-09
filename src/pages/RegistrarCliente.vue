<template>
  <h2>Registrar Cliente</h2>
  <ingresarCliente @clienteNuevo="newClient($event)"/>
</template>

<script>
import ingresarCliente from '@/components/ingresarCliente.vue';
import {ingresarClienteFachada} from '@/js/api_rentCar/ProcesarEmpleado'
export default {

  components:{
    ingresarCliente
  },
  methods:{
    newClient(clienteNuevoHijo){
      console.log("evento en padre ingresar cliente Empleados")
        console.log(clienteNuevoHijo)
      const myCliente={
                "nombre": clienteNuevoHijo.cNombre,
                "apellido": clienteNuevoHijo.cApellido,
                "cedula": clienteNuevoHijo.cCedula,
                "fechaNacimiento": clienteNuevoHijo.cFecha,
                "genero": clienteNuevoHijo.cGenero
      }
      ingresarClienteFachada(myCliente)
      console.log(myCliente)
      window.alert("Cliente Ingresado")
    }
  }
}
</script>

<style>

</style>