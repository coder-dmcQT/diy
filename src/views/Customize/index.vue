<template>
  <v-container class="cream-diy-wrapper d-flex justify-space-between align-start">
      <section class="d-flex flex-column">
          <back-button></back-button>
          <img :src="phoneImage" alt="phone imitator" class="phone-imitator">
      </section>
      <section class="d-flex flex-column align-stretch">
        <customizer-header></customizer-header>
        <customizer-subheader></customizer-subheader>
        <customizer-phone-configer></customizer-phone-configer>
        <customizer-type-picker></customizer-type-picker>
      </section>
  </v-container>
</template>

<script>
import BackButton from '@/components/back-btn.vue';
import CustomizerHeader from './sub-content/header-title';
import CustomizerSubHeader from './sub-content/header-subtitle';
import CustomizerPhoneConfiger from './sub-content/phone-type-chooser';
import CustomizerTypePicker from './sub-content/widget-chooser';
export default {
    name:'cream-diy',
    components:{
        'back-button':BackButton,
        'customizer-header':CustomizerHeader,
        'customizer-subheader':CustomizerSubHeader,
        'customizer-phone-configer':CustomizerPhoneConfiger,
        'customizer-type-picker':CustomizerTypePicker
    },
    data(){
        return{
            phoneImage:require('@/assets/customize/phone-imitator.png')
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 1600px){
  .cream-diy-wrapper .phone-imitator{
    margin: 60px 160px 0 !important;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1600px) {
  .cream-diy-wrapper .phone-imitator{
    margin: 60px 100px 0 !important;
  }
}
@media screen and (min-width: 600px) and (max-width: 1000px){
  .cream-diy-wrapper .phone-imitator{
    margin: 60px 20px 0 !important;
  }
}
@media screen and (max-width: 600px){

}
.cream-diy-wrapper{
    box-sizing: border-box;
    width: 100% !important;
    margin: 0 auto;
}
.cream-diy-wrapper .phone-imitator{
    width: 300px;
    height: 470px;
    margin: 60px 240px 0;
}
</style>