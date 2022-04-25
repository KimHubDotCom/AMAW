<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <div class="container">
        <a class="navbar-brand" href="#" style="color:white;">Big Bikes App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link" style="color:white;">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/bigbikes" class="nav-link" style="color:white">Big Bikes</router-link>
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