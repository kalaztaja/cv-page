<template>
  <v-card class="container">
    <div class="card-title">
      <p h1>{{ this.skillName }}</p>
    </div>
    <div class="skill-bar">
      <skill-bar :skillPrcnt="this.skillLevel" class="skill-bar" />
    </div>
    <v-list class="content-text">
      <v-list-item
        three-line
        v-for="(project, indx) in this.skillContent"
        v-bind:key="indx"
      >
        <v-list-item-content>
          <v-list-item-title>{{ project.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ project.link }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
        </v-list-item-content>
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
  }
};
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 40% 50%;
  grid-template-rows: 2fr 3fr;
  gap: 0px 0px;
  grid-template-areas:
    'header skillbar'
    'content content';
  overflow: hidden;

  justify-content: center;
}
.card-title {
  grid-area: header;
  justify-self: center;

  justify-self: start;
}
.skill-bar {
  grid-area: skillbar;
  justify-self: center;
  justify-self: end;
  display: block;
  margin-top: 1%;
  width: 97%;
}
.content-text {
  grid-area: content;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
