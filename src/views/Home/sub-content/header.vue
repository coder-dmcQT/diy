<template>
  <v-card elevation="4" class="home-header-wrapper">
    <v-card-title class="d-flex home-header justify-space-around align-stretch">
      <v-btn
        @mouseover="changeCurrentActionType(i)"
        @click="switchPage(i)"
        :class="['type-button', active_index == i ? 'type-button-active' : '']"
        x-large
        color="#000"
        plain
        v-for="(v, i) in titles"
        :key="i"
        >{{ v }}</v-btn
      >
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  computed: {
    titles() {
      return this.$store.state.action_type_charset;
    },
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
  .home-header-wrapper {
    width: 1600px;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1600px) {
  .home-header-wrapper {
    width: 1000px;
  }
}
@media screen and (min-width: 600px) and (max-width: 1000px) {
  .home-header-wrapper {
    width: 600px;
  }
  .type-button {
    font-size: 0.8rem !important;
  }
}
@media screen and (max-width: 600px) {
  .home-header-wrapper {
    width: 100%;
  }
  .type-button {
    font-size: 0.6rem !important;
  }
}
.home-header-wrapper {
  margin: 0 auto;
}
.home-header {
  padding: 0 !important;
}
.home-header .type-button {
  box-sizing: border-box;
  border-bottom: 3px solid transparent;
  transition: all 0.4s;
  cursor: pointer;
  text-transform: none;
}
.home-header .type-button-active {
  border-bottom-color: #000 !important;
}
</style>