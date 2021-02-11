<template>
  <div class="catalog-container">
    <v-row class="skill-options">
      <v-col
        v-for="(skill, idx) in this.SkillStore"
        v-bind:key="idx"
        class="d-flex child-flex"
        cols="4"
        ><skill-option
          :optionName="skill.Name"
          :img="skill.Img"
          @selected="showDetails($event)"
        ></skill-option
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
      currentContent: []
    };
  },
  methods: {
    showDetails(optionName) {
      console.log(optionName);
      this.changeDetails(optionName);
    },
    changeDetails(optionName) {
      const selectedElement = this.SkillStore.find(
        element => element.Name === optionName
      );
      console.log(this.SkillStore);
      console.log(selectedElement);
      this.currentDetails = selectedElement.Name;
      this.currentSkillLevel = selectedElement.SkillLevel;

      console.log('after');
      console.log(selectedElement.Projects);
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
  background-color: rgb(47, 79, 79);
  padding: 1em;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  height: 720px;
}
</style>
