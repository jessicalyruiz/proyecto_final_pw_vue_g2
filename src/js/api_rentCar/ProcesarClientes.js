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

//1.D
export const actualizarFachada = (id, body) => {
    actualizar(id, body);
}

export const buscarClientePorIdFachada=async (id)=>{
    return await buscarClientePorId(id);
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

//1.D
const actualizar = (id, body) => {
    axios.put(`http://localhost:8081/API/RentACar/V1/clientes/${id}`,body).then(r => r.data)
}

const buscarClientePorId=async(id)=>{
    return axios.get(`http://localhost:8081/API/RentACar/V1/clientes/${id}`,).then(r => r.data)
}
