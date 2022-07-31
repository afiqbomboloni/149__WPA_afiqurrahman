<template>
<section class="section-works">
        <div class="container">
          <div class="section-list row justify-content-center mt-5">
            <div v-for="(work, $index) in works" :key="$index" class="col-sm-6 col-md-4 col-lg-3">
              <div class="card-list text-center d-flex flex-column">
                <img :src="'/'+ work.image" id="imagee">
                <div class="name-list">{{ work.kategori }}</div>
                <div class="name-two">{{ work.nama }}</div>
                <div class="mt-auto">
                  <a href="#" class="btn btn-details px-4">
                    Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>


<script>

export default {
  data() {
    return {
      works:[]
    }
  },
  mounted() {
    fetch("http://localhost:8081/works")
    .then(res=> res.json())
    .then(res=> {
      this.works = res
    })
  },
}
</script>

<style lang="scss" scoped>
#imagee{
  height: 180px;
}

    .section-works {
  .section-list {

    .card-list {
      min-height: 370px;
      background: #fff;
      color: #fff;
      padding: 30px;
      background-size: cover;
      margin-bottom: 20px;
      border-radius: 10%;

      .btn-details {
        font-family: 'Poppins', sans-serif;
        background-color: #b9f5eb;
      }
      

      .name-list {
        font-size: 18px;
        font-family: 'Poppins';
        color: #000;
        background-color: #eaeaea;
        border-radius: 20%;
        margin-top: 2px;
      }

      .name-two {
        font-size: 26px;
        color: #000;
      }

      .travel-button {

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

</style>