<template>
  <v-container
    class="gallery-container d-flex justify-space-around align-center"
  >
    <img
      alt="action image"
      v-for="i in 3"
      :key="i - 1"
      :src="staticSample"
      @mouseover="changeCurrentActionType(i - 1)"
      @click="switchPage(i - 1)"
      :class="[
        'gallery-item',
        active_index == i - 1 ? 'gallery-item-active' : '',
      ]"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      staticSample: require("@/assets/home/gallery-pic-static.png"),
    };
  },
  computed: {
    active_index() {
      return this.$store.state.current_action_type;
    },
  },
  methods: {
    changeCurrentActionType($index) {
      this.$store.commit("selectActionType", $index);
    },
    switchPage($index) {
      switch ($index) {
        case 0:
          this.$router.push("/customize");
          break;
        case 1:
          this.$router.push("/cream-diy");
          break;
        case 2:
          this.$router.push('/design');
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1600px) {
  .gallery-container {
    width: 1600px;
    margin-top: 140px;
  }
  .gallery-container .gallery-item {
    width: 250px;
    height: 280px;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1600px) {
  .gallery-container {
    width: 1000px;
    margin-top: 100px;
  }
  .gallery-container .gallery-item {
    width: 200px;
    height: 220px;
  }
}
@media screen and (min-width: 600px) and (max-width: 1000px) {
  .gallery-container {
    width: 600px;
    margin-top: 75px;
  }
  .gallery-container .gallery-item {
    width: 25%;
    height: 180px;
  }
}
@media screen and (max-width: 600px) {
  .gallery-container {
    width: 100%;
    margin-top: 50px;
  }
  .gallery-container .gallery-item {
    width: 25%;
    height: 150px;
  }
}
.gallery-container {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  padding: 0 !important;
}
.gallery-container .gallery-item {
  transition: all 0.4s;
  border: 2px solid gray;
  cursor: pointer;
}
.gallery-container .gallery-item-active {
  transform: scale(1.25);
  border-color: #000;
}
</style>