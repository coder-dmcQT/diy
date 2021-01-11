<template>
  <v-btn color="blue" outlined @click="navigateBack">Back to the shop</v-btn>
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

<style>

</style>