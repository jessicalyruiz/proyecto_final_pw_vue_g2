import axios from "axios";


//metodos fachada

        //2.a: Registrar cliente
        export const ingresarClienteFachada=async(body)=>{
            await ingresarCliente(body);
        }



        //2.b: Buscar/actualizar/eliminar cliente
        export const buscarClienteFachada=async(apellido)=>{
           return  await buscarCliente(apellido);
        }

        export const visualizarClienteIdFachada=async(id)=>{
            return await visualizarClienteId(id);
        }

        export const actualizarClienteFachada=async(id,body)=>{
             await actualizarCliente(id,body);
        }
        export const eliminarClienteFachada=async(id)=>{
            await eliminarCliente(id);
       }

       //2.c: Ingresar un vehículo

       export const ingresarVehiculoFachada=async(body)=>{
        await ingresarVehiculo(body);
    }

    //2.d: Buscar/actualizar/eliminar vehículo
    export const buscarVehiculoFachada=async(marca)=>{
        return  await buscarVehiculo(marca);
     }

     export const visualizarVehiculoIdFachada=async(id)=>{
         return await visualizarVehiculoId(id);
     }

     export const actualizarVehiculoFachada=async(id,body)=>{
          await actualizarVehiculo(id,body);
     }
     export const eliminarVehiculoFachada=async(id)=>{
         await eliminarVehiculo(id);
    }


//********** metodos

//2.a: Registrar cliente
const ingresarCliente=async(body)=>{
    console.log("procesarEmpleado")
    console.log(body)
    axios.post('http://localhost:8081/API/RentACar/V1/empleados/clientes',body).then(r=>r.data)
}
 //2.b: Buscar/actualizar/eliminar cliente

 const buscarCliente=async(apellidoC)=>{
    console.log('ProcesarEmpleado: apellido: '+apellidoC)
    const clientes= axios.get('http://localhost:8081/API/RentACar/V1/empleados/clientes',{
        params:{
            apellido:apellidoC,
        }
    }).then(r=>r.data)
  
    console.log('ProcesarEmpleado: clientes...'+clientes)
    return clientes
 }
 const visualizarClienteId=async(id)=>{
    console.log(id)
    const cliente= axios.get(`http://localhost:8081/API/RentACar/V1/empleados/clientes/${id}`).then(r=>r.data)
    console.log('procesarEmpl   Cliente: '+cliente)
    return cliente
 }

 const actualizarCliente=async(id,body)=>{
    console.log(id)
     axios.put(`http://localhost:8081/API/RentACar/V1/empleados/clientes/porId/${id}`,body).then(r=>r.data)
    
 }
 const eliminarCliente=async(id)=>{
    axios.delete(`http://localhost:8081/API/RentACar/V1/empleados/clientes/porId/${id}`).then(r=>r.data)
    
 }


 //2.c: Ingresar un vehículo
 const ingresarVehiculo=async(body)=>{
    console.log("procesarEmpleado")
    console.log(body)
    axios.post('http://localhost:8081/API/RentACar/V1/empleados/vehiculos',body).then(r=>r.data)
}


//2.d: Buscar/actualizar/eliminar vehículo

const buscarVehiculo=async(marcaV)=>{
    console.log('ProcesarEmpleado: marca: '+marcaV)
    const Vehiculos= axios.get('http://localhost:8081/API/RentACar/V1/empleados/vehiculos/porMarca',{
        params:{
            marca:marcaV,
        }
    }).then(r=>r.data)
  
    console.log('ProcesarEmpleado: Vehiculos...'+Vehiculos)
    return Vehiculos
 }
 const visualizarVehiculoId=async(id)=>{
    console.log(id)
    const Vehiculo= axios.get(`http://localhost:8081/API/RentACar/V1/empleados/vehiculos/porMarca/${id}`).then(r=>r.data)
    console.log('procesarEmpl   Vehiculo: '+Vehiculo)
    return Vehiculo
 }

 const actualizarVehiculo=async(id,body)=>{
    console.log(id)
     axios.put(`http://localhost:8081/API/RentACar/V1/empleados/vehiculos/porMarca/${id}`,body).then(r=>r.data)
    
 }
 const eliminarVehiculo=async(id)=>{
    axios.delete(`http://localhost:8081/API/RentACar/V1/empleados/vehiculos/porMarca/${id}`).then(r=>r.data)
    
 }
