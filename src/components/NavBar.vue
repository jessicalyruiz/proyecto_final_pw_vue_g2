<template>
  <nav>
        <router-link to="/clientes"> Clientes</router-link>
        <router-link to="/Empleados"> Empleados</router-link>
        <router-link to="/Reportes"> Reportes</router-link>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Budget</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Clientes
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <router-link to="/clientes" class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLinkCliente" role="button" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true"> Clientes</router-link>
          <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLinkCliente">
            <router-link to="/clientes/vehiculos"  class="dropdown-item"> Clientes</router-link>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </div>
        </li>


      </ul>
    </div>
  </div>
</nav>


</template>

<script>
export default {

}

</script>

<style>

</style>