<template>
  <v-container>
    <home-header></home-header>
    <home-gallery></home-gallery>
    <home-footer></home-footer>
  </v-container>
</template>

<script>
import Header from './sub-content/header';
import Gallery from './sub-content/picgallery';
import Footer from './sub-content/footer';
export default {
  name: 'Home',
  components:{
    'home-header':Header,
    'home-gallery':Gallery,
    'home-footer':Footer
  }
}
</script>