<template>
<section class="section-popular" id="popular">
        <div class="container">
          <div class="row">
            <div class="col text-center section-popular-heading">
              <h2>Our Works</h2>
              <p>
                Bekerja dengan Sepenuh Hati
                <br />
                Khusus untuk Kamu
              </p>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default{

}

</script>

<style lang="scss" scoped>
    .section-popular {
  min-height: 540px;
  background: #41ab44;
  margin-top: -50px;
  margin-bottom: -230px;

  .section-popular-heading {
    margin-top: 150px;

    h2,
    p {
      color: #fff;
      font-family: sans-serif;
      font-size: 3vmin;
    }

    h2 {
      font-family: 'Poppins', Arial, Helvetica, sans-serif;
      font-size: 5vmax;
      font-weight: bold;
    }
  }
}
</style>