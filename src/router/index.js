import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/clientes',
    name: 'clientes',
    component: () => import(/* webpackChunkName: "Clientes" */ "../pages/Clientes"),
  },
  {
    path: '/empleados',
    name: 'Empleados',
    component: () => import(/* webpackChunkName: "Empleados" */ '../pages/Empleados')
  },

  {
    path: '/reportes',
    name: 'Reporte',
    component: () => import(/* webpackChunkName: "Reporte" */ '../pages/Reportes')
  },
  {
    path: '/clientes/vehiculos',
    name: 'BuscarVehiculos',
    component: () => import(/* webpackChunkName: "Reportes" */ '../pages/BuscarVehiculosDisponibles')
  },
  {
    path: '/clientes/reservas',
    name: 'ReservarVehiculo',
    component: () => import(/* webpackChunkName: "ReservarVehiculo" */ '../pages/ReservarVehiculo')
  },
  {
    path: '/clientes/registro',
    name: 'RegistrarCliente',
    component: () => import(/* webpackChunkName: "RegistrarCliente" */ '../pages/RegistrarseComoCliente')
  },
  {
    path: '/clientes/actualizar',
    name: 'ActualizarCliente',
    component: () => import(/* webpackChunkName: "RegistrarCliente" */ '../pages/ActualizarCliente.vue')
  },
  {
    path: '/empleados/clientes',
    name: 'RegistrarClienteE',
    component: () => import(/* webpackChunkName: "RegistrarClienteE" */ '../pages/RegistrarCliente')
  },
  {
    path:'/empleados/clientes/porApellido',
    name: 'BuscarClienteE',
    component: () => import(/* webpackChunkName: "BuscarClienteE" */ '../pages/BuscarClienteE')
  },
  {
    path:'/empleados/clientes/porApellido/:idCliente',
    props: true,
    name: 'VerBuscarClienteE',
    component: () => import(/* webpackChunkName: "VerBuscarClienteE" */ '../pages/VisualizarCliente')
  },
  {
    path:'/empleados/clientes/porApellido/actualizar/:idC',
    props: true,
    name: 'ActualizarBuscarClienteE',
    component: () => import(/* webpackChunkName: "ActualizarBuscarClienteE" */ '../pages/ActualizarCliente')
  },
  {
    path:'/empleados/vehiculos',
    name: 'IngresarVehiculo',
    component: () => import(/* webpackChunkName: "IngresarVehiculo" */ '../pages/IngresarVehiculo')
  },
  {
    path:'/empleados/vehiculos/porMarca',
    name: 'BuscarVehiculo',
    component: () => import(/* webpackChunkName: "BuscarVehiculo" */ '../pages/BuscarVehiculo')
  },
  {
    path:'/empleados/vehiculos/porMarca/:idVehiculo',
    props: true,
    name: 'VerBuscarVehiculo',
    component: () => import(/* webpackChunkName: "VerBuscarVehiculo" */ '../pages/VisualizarVehiculo')
  },
  {
    path:'/empleados/vehiculos/porMarca/actualizar/:idV',
    props: true,
    name: 'ActualizarBuscarVechiculo',
    component: () => import(/* webpackChunkName: "ActualizarBuscarVechiculo" */ '../pages/ActualizarVehiculo')
  },
  {
    path: '/reportes/reservas',
    name: 'ReporteReserva',
    component: () => import(/* webpackChunkName: "ReporteReserva" */ '../pages/ReporteReservas')
  },
  {
    path: '/empleados/vehiculos/retirar/reservado',
    name: 'retirarVehiculoReservado',
    component: () => import(/* webpackChunkName: "ReporteReserva" */ '../pages/RetirarVehiculos.vue')
  },
  {
    path: '/empleados/vehiculos/retirar/sin_reserva',
    name: 'retirarVehiculoSinReserva',
    component: () => import(/* webpackChunkName: "ReporteReserva" */ '../pages/RetirarVehiculos.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
