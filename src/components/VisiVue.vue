<template>
<section class="section-visi">
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-5">
            <h2>
                Visi Misi Digiman.id
            </h2>
            <h3>VISI</h3>
            <p>Menjadi perusahaan terpercaya dalam memberikan solusi yang cerdas dan tepat di bidang teknologi informasi.</p>
            <hr>
            <h3>MISI</h3>
            <p>Menyediakan produk dan solusi yang berkualitas, efisien, layanan paripurna dan dukungan yang penuh terhadap produk dan layanan yang diberikan.</p>
            
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
                <img :src="'/'+media.image" alt=""/>
            </div>
    </div>
</div>

</section>


</template>


<script>
export default {
data() {
    return{
        media: {
        image: 'visi.png'
}
    }
}
}

</script>

<style lang="scss" scoped>
    .section-visi{
        background-color: #aceadd;
        margin-top: -210px;
        padding-top:230px;
        padding-bottom: 50px;

        h2,h3,p {

            font-family: 'Poppins';
            color: #000;
        }
        h2 {
            margin-top: 20px;
            font-size: 35px;
        }
        img {
            float:none;
            width: 43vmax;
            align-items: center;
            display: block;
            justify-content: center;

        }
    }
</style>