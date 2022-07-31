<template>
  <div class="container">
    <nav-header></nav-header>
  </div>
  <div class="halaman">
    <header-vue></header-vue>
    <footer-vue></footer-vue>

  </div>
</template>

<script>
import NavHeaderVue from '@/components/NavHeader.vue';
import headerVue from '@/components/booking/header.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  components: {
    'nav-header':NavHeaderVue,
    'header-vue':headerVue,
    'footer-vue': FooterVue

  }
}
</script>

<style lang="scss" scoped>

</style>