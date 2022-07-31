<template>
  <div class="container">
    <nav-header></nav-header>
        
  </div>
    <header-vue></header-vue>
    <partner-vue></partner-vue>
    <iklan-vue></iklan-vue>
    <work-vue></work-vue>
    <visi-vue></visi-vue>
    <testi-vue></testi-vue>
    <footer-vue></footer-vue>
  
</template>

<script>
// @ is an alias to /src.vue";
import NavHeader from '@/components/NavHeader.vue';
import HeaderVue from '@/components/Header.vue';
import PartnerVue from '@/components/Partner.vue';
import IklanVue from '@/components/Iklan.vue';
import WorksVue from '@/components/Works.vue';
import VisiVue from '@/components/VisiVue.vue';
import TestimoniVue from '@/components/Testimoni.vue';
import FooterVue from '@/components/Footer.vue';
export default {
  name: "HomeView",
  components: {
    'nav-header':NavHeader,
    'header-vue':HeaderVue,
    'partner-vue': PartnerVue,
    'iklan-vue': IklanVue,
    'work-vue':WorksVue,
    'visi-vue':VisiVue,
    'testi-vue':TestimoniVue,
    'footer-vue':FooterVue
  },
};
</script>

<style lang="scss" scoped>

</style>
