<template>
  <v-container class="cream-diy-wrapper d-flex justify-space-between align-start">
      <section class="d-flex flex-column">
          <back-button></back-button>
          <img :src="phoneImage" alt="phone imitator" class="phone-imitator">
      </section>
      <section>

      </section>
  </v-container>
</template>

<script>
import BackButton from '@/components/back-btn.vue';
export default {
    name:'cream-diy',
    components:{
        'back-button':BackButton
    },
    data(){
        return{
            phoneImage:require('@/assets/customize/phone-imitator.png')
        }
    }
}
</script>

<style scoped>
.cream-diy-wrapper{
    box-sizing: border-box;
    width: 100% !important;
    padding-left: 3%;
    padding-right: 3%;
}
.cream-diy-wrapper .phone-imitator{
    width: 300px;
    height: 470px;
    margin: 60px 240px 0;
}
</style>