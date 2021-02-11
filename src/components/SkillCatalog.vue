<template>
  <div class="catalog-container">
    <v-row class="skill-options">
      <v-col
        v-for="(skill, idx) in this.SkillStore"
        v-bind:key="idx"
        class="child-flex column-container"
        cols="4"
        @click="activeOption = idx"
        ><skill-option
          :optionName="skill.Name"
          :img="skill.Img"
          @selected="showDetails($event)"
          :class="{ active: idx === activeOption }"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          <v-spacer /></skill-option
      ></v-col>
    </v-row>
    <skill-card
      class="skill-card"
      :skillName="currentDetails"
      :skillContent="currentContent"
      :skillLevel="currentSkillLevel"
    />
  </div>
</template>

<script>
import SkillCard from './SkillCard.vue';
import SkillStore from '../services/SkillStore.js';
import SkillOption from './SkillOption.vue';

export default {
  name: 'SkillCatalog',
  components: { SkillCard, SkillOption },
  data: () => {
    return {
      SkillStore: SkillStore.data,
      currentDetails: '',
      currentSkillLevel: 0,
      currentContent: [],
      activeOption: null
    };
  },
  methods: {
    showDetails(optionName) {
      this.changeDetails(optionName);
    },
    changeDetails(optionName) {
      const selectedElement = this.SkillStore.find(
        element => element.Name === optionName
      );
      this.currentDetails = selectedElement.Name;
      this.currentSkillLevel = selectedElement.SkillLevel;
      this.currentContent = selectedElement.Projects;
    }
  }
};
</script>

<style lang="css" scoped>
.skill-options {
  max-width: 50%;
  min-width: 45%;
  float: left;
  order: 1;
}
.skill-card {
  max-width: 50%;
  min-width: 50%;
  float: right;
  order: 2;
}
.catalog-container {
  display: flow-root;
  width: 100%;
  background-color: #1e1e1e;
  padding: 1em;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  height: 720px;
}
</style>
