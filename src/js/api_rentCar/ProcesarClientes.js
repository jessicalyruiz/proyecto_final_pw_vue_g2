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



//1.c: Registrarse como cliente
export const ingresarClienteFachada=async(body)=>{
    await ingresarCliente(body);
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

//1.c: Registrarse como cliente

const ingresarCliente=async(body)=>{
    axios.post('http://localhost:8081/API/RentACar/V1/clientes',body).then(r=>r.data)
}