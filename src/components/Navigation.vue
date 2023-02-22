<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <!-- Add a router link to the homepage (don't use the a tag!) -->
          <router-link to="/" active-class="active" class="nav">Go to Home</router-link> 
        </li>
        <li class="nav-item">
          <!-- Add a router link to the create product page (don't use the a tag!) -->
          <router-link to="/productlist" active-class="active" class="nav">Go to Product List</router-link>
        </li>
        <li class="nav-item">
          <!-- add a router link to the products page (don't use the a tag!) -->
          <router-link to="/createproduct" active-class="active" class="nav">Go to Create Product</router-link>
        </li>
        <li>
          <router-link to="/about" active-class="active" class="nav">Go to About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
.nav{
  text-decoration: none;
  color: white;
  padding: 10px;
}
.active{
  color:yellow;
}
</style>