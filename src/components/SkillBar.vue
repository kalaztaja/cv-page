<template>
  <div class="background-bar">
    <div class="top-bar" :style="topBoxStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'SkillBar',
  data() {
    return {
      hovering: false
    };
  },
  props: {
    skillPrcnt: {
      required: true,
      type: Number
    }
  },
  computed: {
    topBoxStyle() {
      return 'width: ' + this.skillPrcnt + '%';
    }
  },
  methods: {
    mouseOver() {
      this.hovering = !this.hovering;
    }
  }
};
</script>

<style scoped>
.background-bar {
  position: absolute;
  width: 100%;
  height: 26%;
  background-color: #0d1a26;
  transform: skewX(-30deg);
  box-shadow: 0.2em 0.1em 0.1em #081017;
}

.top-bar {
  background-color: #3a74aa;
  height: 100%;
  z-index: 1;
}

.prcnt-number {
  transform: skewX(30deg);
  justify-self: center;
  position: absolute;
  left: 44%;
  top: -3px;
}
</style>
