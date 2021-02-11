<template>
  <div @click="optionClicked" class="parent-container fill-height">
    <v-img
      :src="img"
      aspect-ratio="1"
      class="transparent logo-image grow fill-height"
      contain
      max-width="212"
      max-height="212"
      min-height="52"
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
.parent-container {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-image {
  margin: auto;
}
.active {
  background-color: rgb(47, 79, 79);
}
</style>
