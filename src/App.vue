<template>
  <v-app>
    <v-card class="overflow-hidden ambient" tile flex height="100%" dark>
      <v-main class="content-container transparent">
        <v-container fluid fill-height>
          <introduction-card></introduction-card>
          <skill-catalog width="100%" />
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import IntroductionCard from './components/IntroductionCard.vue';
import SkillCatalog from './components/SkillCatalog.vue';

export default {
  name: 'App',

  components: {
    SkillCatalog,
    IntroductionCard
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.bottom-card {
  overflow: hidden !important;

  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}
.content-container {
  min-height: 100vh;
  overflow-y: hidden !important;

  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}
</style>

<style>
html {
  overflow-y: auto !important;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.ambient {
  background: linear-gradient(-45deg, #27408e, #304faf, #787b85, #93959d);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
