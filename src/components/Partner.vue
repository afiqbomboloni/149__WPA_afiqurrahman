<template>
    <div class="container">
        <section class="section-stats row justify-content-center" id="stats">
          <div class="col-3 col-md-2 partner">
            <h2>12K</h2>
            <p>Parner</p>
          </div>
          <div class="col-3 col-md-2 partner">
            <h2>1K</h2>
            <p>Sapu</p>
          </div>
          <div class="col-3 col-md-2 partner">
            <h2>5K</h2>
            <p>Pelan</p>
          </div>
          <div class="col-3 col-md-2 partner">
            <h2>20K</h2>
            <p>Wipol</p>
          </div>
        </section>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .section-stats {
  margin-top: -50px;

  .partner {
    padding-top: 15px;
    background: #fff;
    padding-left: 20px;
    font-family: 'Poppins';
  }

  h2 {
    font-size: 3.5vh;
    margin-bottom: 0;

  }

  p {
    font-size: 2.5vh;
    font-weight: lighter;
  }
}
</style>