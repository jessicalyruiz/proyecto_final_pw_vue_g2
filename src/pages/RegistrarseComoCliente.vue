<template>
  <h2>Registrarse como cliente</h2> 
  <ingresarCliente @clienteNuevo="newClient($event)"/>
</template>

<script>
import ingresarCliente from '@/components/ingresarCliente.vue';

import {ingresarClienteFachada} from '@/js/api_rentCar/ProcesarClientes'
export default {
  components:{
    ingresarCliente,
  },
  methods:{
    newClient(clienteNuevoHijo){
        console.log("evento en padre ingresar cliente")
        console.log(clienteNuevoHijo)
        
        const myCliente={
               "nombre": clienteNuevoHijo.cNombre,
                "apellido": clienteNuevoHijo.cApellido,
                "cedula": clienteNuevoHijo.cCedula,
                "fechaNacimiento": clienteNuevoHijo.cFecha,
                "genero": clienteNuevoHijo.cGenero
        }
        console.log(myCliente)
        ingresarClienteFachada(myCliente)
        window.alert("Cliente Ingresado")
    }
  }
}
</script>

<style>

</style>