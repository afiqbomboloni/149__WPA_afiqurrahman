<template>
<section class="section-testimoni">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h2>Apa Kata Mereka?</h2>
            </div>
          </div>
        </div>
      </section>
  <section class="section-isi-testimoni">
        <div class="container">
          <div
            class="row justify-content-center match-height"
          >
            <div v-for="(testimonis, $index) in testimoni" :key="$index" class="col-sm-6 col-md-6 col-lg-4">
              <div class="card card-testimoni text-center">
                <div class="isi-testimoni">
                  <img :src="'/' + testimonis.image" class="mb-4" id="gambar"/>
                  <h3 class="mb-4">{{ testimonis.nama }}</h3>
                  <p class="deskripsi">"{{ testimonis.deskripsi }}"</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


</template>


<script>
export default{
data() {
  return{
    testimoni:[]
  }
},
mounted() {
  fetch("http://localhost:8082/testimoni")
  .then(res=> res.json())
  .then(res => {
    this.testimoni = res
  })
},
}
</script>

<style lang="scss" scoped>
.section-testimoni {
  background: linear-gradient(#fff 0%, #f7f9ff 100%);
  padding-top: 50px;
  min-height: 480px;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #000;
  }
}
    .section-isi-testimoni {
  margin-top: -300px;
  padding-bottom: 50px;
  font-family: 'Poppins', sans-serif;



  .card-testimoni {
    padding: 40px 20px 10px;
    border-radius: 15px;
    margin-bottom: 20px;

    .isi-testimoni {
      min-height: 360px;
    }

    h3 {
      font-size: 22px;
    }

    .deskripsi {
      font-size: 26px;
      text-align: center;
      color: #6e6e6e;
      font-weight: 200;
    }

  }
}
#gambar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

</style>