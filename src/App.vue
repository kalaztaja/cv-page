<template>
  <v-app>
    <v-card class="overflow-hidden" tile flex height="100%" dark>
      <v-main class="content-container">
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
</style>
