<template>
<section class="section-details-header"></section>
<div class="container">
<section class="section-details-content">
            
                <div class="row">
                  
                    <div class="col p-0 pl-3 pl-lg-0">
                      <h1>Form Pemesanan</h1>
                      <div class="container px-3">
                        <form>
                          <div class="form-group mb-3 rata">
                            <label for="nama">Nama</label>
                            <input type="text" class="form-control">
                          </div>
                          <div class="form-group mb-3 rata">
                            <label for="alamat">Alamat</label>
                            <input type="text" class="form-control" autocomplete="off"/>
                          </div>		
                          <div class="form-group mb-3 rata">
                            <label for="nomer">Nomer Telepon</label>
                            <input type="text" class="form-control"/>
                          </div>
                          <div class="form-group mb-3 rata">
                            <label for="kapan">Kapan?</label>
                            <input type="text" class="form-control" id="kapan">
                          </div>
                          <button type="submit" class="btn btn-success btn-block mb-3 custom">Order</button>
                        </form>
                      </div>
                        
            </div>
            <div class="col-lg-4">
              <div class="card card-details card-right ">
                <h2>Produk Terlaris</h2>

                <hr />
                <h3>Jasa Cuci Mobil</h3>
               <p>Cuci mobil merupakan jasa yang mengedepankan tentang cuci mobil secara keren. Kami bisa membersihkan kamu secara mendetail dan menyeluruh.</p>
                <p>Oke guys, disini adalah cara, maka klik tulisan bayar dibawah ya</p>
              </div>
              <div class="container">
                <router-link to="#" class="btn btn-block btn-warning mt-3 py-2 mb-3">Bayar</router-link>
              </div>
            </div>
            </div>
            
          
</section>
</div>
        
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
      .section-details-header {
  min-height: 310px;
  background: #fff;
  margin-top: 20px;
  
}

.section-details-content {
  margin-top: -200px;
  min-height: 800px;
  font-family: 'Poppins', sans-serif;

  .rata {
    text-align: left;
  }

  }
  .card-details {
    padding: 30px;
    border-radius: 11px;
     }
</style>