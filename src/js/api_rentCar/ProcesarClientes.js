import axios from "axios";
//metodos fachada

        //1.a: Buscar vehículos disponibles
export const buscarMarcasFachada=async()=>{
    return await buscarMarcas();
}

export const buscarModelosFachada=async()=>{
    return await buscarModelos();
}

export const buscarVehiculoDFachada=async (marca,modelo)=>{
    return await buscarVehiculoD(marca,modelo);
}

//1.b: Reservar vehículo

export const verificarTieneReservasFachada=async(placa,cedula,fechaInicio, fechaFin)=>{
    
    return await verificarTieneReservas(placa,cedula,fechaInicio, fechaFin);
}

export const buscarVehiculoPlacaFachada=async (placa)=>{
    return await buscarVehiculoPlaca(placa);
}

export const buscarClienteCedulaFachada=async (cedula)=>{
    return await buscarClienteCedula(cedula);
}

export const pagarVehiculoFachada=async (placaV,cedulaC,fechaInicioR, fechaFinR,tarjetaR)=>{
    return await pagarVehiculo(placaV,cedulaC,fechaInicioR, fechaFinR,tarjetaR);
}


//1.c: Registrarse como cliente
export const ingresarClienteFachada=async(body)=>{
   return await ingresarCliente(body);
}










//*********************metodos
    // 1.a: Buscar vehículos disponibles
const buscarMarcas=async ()=>{
    const marcas=axios.get('http://localhost:8081/API/RentACar/V1/clientes/vehiculos/marcas').then(r=>r.data)
    console.log(marcas)
    return marcas
}

const buscarModelos=async ()=>{
    const modelos=axios.get('http://localhost:8081/API/RentACar/V1/clientes/vehiculos/modelos').then(r=>r.data)
    console.log(modelos)
    return modelos
}

const buscarVehiculoD=async(marcaV, modeloV)=>{
    const vehiculos=axios.get('http://localhost:8081/API/RentACar/V1/clientes/vehiculos',{
        params:{
            marca:marcaV,
            modelo:modeloV,
        }
    }).then(r=>r.data)
    return vehiculos
}

//1.b: Reservar vehículo
const buscarVehiculoPlaca=async(placa)=>{
    return axios.get(`http://localhost:8081/API/RentACar/V1/clientes/vehiculos/${placa}`).then(r=>r.data)
}

const buscarClienteCedula=async(cedula)=>{
    return axios.get(`http://localhost:8081/API/RentACar/V1/clientes/${cedula}`).then(r=>r.data)
}

const verificarTieneReservas=async(placaV,cedulaC,fechaInicioR, fechaFinR)=>{
    //console.log("ProcesarCliente: reserva.. "+body)
   // console.log(body.fechaInicio)
   // console.log(body.fechaFin)
    //console.log(body.clienteTO)
    //console.log(body.vehiculoTO)
    //console.log(body.clienteTO.cedula)
    return axios.get('http://localhost:8081/API/RentACar/V1/clientes/reservas/vehiculos', {
        params:{
            placa:placaV,
            cedula:cedulaC,
            fechaInicio:fechaInicioR,
            fechaFin:fechaFinR
        }
    }).then(r=>r.data)
}

const pagarVehiculo=async(placaV,cedulaC,fechaInicioR, fechaFinR,tarjetaR)=>{
    console.log('placa'+placaV)
    console.log('cedula'+cedulaC)
    console.log('fechaInicio'+fechaInicioR)
    console.log('fechaFin'+fechaFinR)
    console.log('tarjeta'+tarjetaR)
    /*
    return axios.put('http://localhost:8081/API/RentACar/V1/clientes/reservas/vehiculos/pagar', {
        params: {
          cedula: cedulaC,
          fechaInicio: fechaInicioR,
          fechaFin: fechaFinR,
          tarjeta: tarjetaR
        },
        params: {
          placa: placaV
        }
    }).then(r=>r.data)*/
    return axios.put('http://localhost:8081/API/RentACar/V1/clientes/reservas/vehiculos/pagar', 
    `placa=${placaV}&cedula=${cedulaC}&fechaInicio=${fechaInicioR}&fechaFin=${fechaFinR}&tarjeta=${tarjetaR}`
  ).then(r => r.data)

}

//1.c: Registrarse como cliente

const ingresarCliente=async(body)=>{
    axios.post('http://localhost:8081/API/RentACar/V1/clientes',body).then(r=>r.data)
}