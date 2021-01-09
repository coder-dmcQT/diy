<template>
  <section class="widget-chooser-wrapper">
      <div class="d-flex align-center justify-space-between">
          <div class="type-picker" @click="changeDecrorationTypeIndex(0)">Image Library<div class="cursor" v-show="decroration_type_index==0"></div></div>
          <div class="type-picker" @click="changeDecrorationTypeIndex(1)">Upload<div class="cursor" v-show="decroration_type_index==1"></div></div>
      </div>
  </section>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    computed:mapState('customizer_state',['decroration_type_index']),
    methods:{
        ...mapMutations('customizer_state',['changeDecrorationTypeIndex']),
    },
    mounted(){
        console.log(this.decroration_type_index);
    }
}
</script>

<style scoped>
.widget-chooser-wrapper{
    margin-top: 36px;
}
.widget-chooser-wrapper .type-picker{
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    position: relative;
    border-left: 1px solid #ccc;
    width: 50%;
    height: 63px;
    line-height: 63px;
    cursor: pointer;
    text-align: center;
}
.type-picker:nth-of-type(2){
    border-right: 1px solid #ccc;
}
.type-picker .cursor{
    position: absolute;
    width: 18px;
    height: 18px;
    left: calc(50% - 9px);
    bottom: -9px;
    transform: rotate(-45deg);
    z-index: 10;
    border-left: 1px solid #ccc;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
}
</style>