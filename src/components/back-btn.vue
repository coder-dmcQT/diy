<template>
  <v-btn fab color="blue" dark @click="navigateBack">
      <v-icon>mdi-less-than</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods:{
    navigateBack(){
      this.$router.replace('/');
    }
  }
}
</script>
