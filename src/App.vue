<template>
  <v-app>
    <v-main>
      <transition name="router" appear mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<style scoped>
.router-enter,.router-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
.router-enter-active,.router-leave-active{
  transition: all .4s;
}
</style>