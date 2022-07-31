<template>
    <div>
      <nav class="row navbar navbar-expand-lg navbar-light rounded-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
          <img id="navBrand" src="../assets/logo.png" alt="">
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Menu -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mr-3">
        <li class="nav-item mx-md-2">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item mx-md-2">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item mx-md-2">
          <a class="nav-link" href="#">Careers</a>
        </li>
        <li class="nav-item mx-md-2">
          <a class="nav-link" href="#">Portofolio</a>
        </li>
      </ul>
      <form id="navWar" class="form-inline d-sm-block d-md-none">
        <router-link class="btn btn-success my-2 my-sm-0" to="/booking">Booking</router-link>
            </form>
    </div>
    
          <!-- Desktop Button -->
          <form id="navPri" class="form-inline my-2 my-lg-0 d-none d-md-block d-lg-block">
            <router-link class="btn btn-success my-2 my-sm-0 px-4" to="/booking">Booking</router-link>
            </form>
  </div>
</nav>
    </div>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
$small:768px;
$big:1199px;
nav {
  //some CSS
  @media screen and (max-width: $small) {
    
  }
  @media screen and (min-width: $big) {
    #navPri {
      display: none;
    }
  }
}
#navBrand {
    width: 30px;
}
// @media screen and (min-width: 912px) {
//   #navbarPri {
//     display: none;
//   }
// }

nav{
    background-color: transparent;
}

.nav-link {
  font-family: 'Poppins';
}
.navbar-light {
  .navbar-nav {
    .nav-link {
      color: #41ab44;

      &.active {
        font-weight: bold;
        color: #41ab44 !important;
      }
    }
  }
}

.btn {
  font-family: 'Poppins';
  color: #fff;
}

.nav-link :active {
  font-weight: bold;
}
    
</style>