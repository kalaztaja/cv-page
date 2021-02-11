<template>
  <div @click="optionClicked">
    <v-img
      :src="img"
      aspect-ratio="1"
      class="transparent"
      contain
      max-width="250"
      max-height="250"
      min-height="128"
      min-width="52"
    >
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'SkillOption',
  props: {
    optionName: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      required: true
    }
  },
  methods: {
    optionClicked() {
      this.$emit('selected', this.optionName);
    }
  },
  data: () => ({
    logo: require('@/assets/' + this.optionName + '.png')
  })
};
</script>

<style lang="css" scoped>
.parent-row {
  width: auto;
}
</style>
