<template>
  <v-card class="container" flat>
    <div class="card-title">
      <p class="skill-name">{{ this.skillName }}</p>
    </div>
    <div class="skill-bar">
      <skill-bar :skillPrcnt="this.skillLevel" class="skill-bar" />
    </div>
    <v-list class="content-text">
      <v-list-item
        two-line
        v-for="(project, indx) in this.skillContent"
        v-bind:key="indx"
      >
        <v-col cols="12">
          <v-card class="fluid" :color="cardColors[indx % 2]">
            <v-card-title class="project-name"
              >{{ project.name }}
            </v-card-title>
            <v-card-text class="project-description">{{
              project.description
            }}</v-card-text>
            <v-spacer />
            <v-card-actions>
              <v-spacer />
              <v-btn
                v-if="project.link !== ''"
                :href="project.link"
                inlineblock
                color="#3a74aa"
                >Link</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-spacer />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import SkillBar from './SkillBar.vue';

export default {
  components: { SkillBar },
  name: 'SkillCard',
  props: {
    skillName: {
      required: true,
      type: String
    },
    skillLevel: {
      default: 0,
      type: Number
    },
    skillContent: {
      required: true,
      type: Array
    }
  },
  data: () => {
    return {
      cardColors: ['#172e44', '#122435']
    };
  }
};
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 40% 50%;
  grid-template-rows: 20% 80%;
  gap: 0px 0px;
  grid-template-areas:
    'header skillbar'
    'content content';
  overflow: auto;
  align-items: center;
  justify-content: center;
}
.card-title {
  grid-area: header;
  margin: 0 auto;
  margin-top: -2.5em;
}
.skill-bar {
  grid-area: skillbar;
  height: 33%;
  margin-top: -1em;
  width: 97%;
}
.content-text {
  grid-area: content;
  grid-column-start: 1;
  grid-column-end: 3;
  overflow-y: scroll;
  min-width: 800px;
}
.skill-name {
  font-size: 2em;
  font-weight: bold;
  margin-top: 0.5em;
}
.project-name {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
