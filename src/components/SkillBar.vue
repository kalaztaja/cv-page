<template>
  <div class="background-bar" :style="cssProps">
    <div
      class="top-bar"
      :style="topBoxStyle"
      v-bind:class="{ animationin: doTransition }"
      v-on:animationend="doTransition = false"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'SkillBar',
  data() {
    return {
      doTransition: false,
      newWidth: 0,
      oldWidth: 0
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
    },
    cssProps() {
      return {
        '--old-box-width': this.oldWidth + '%',
        '--top-box-width': this.newWidth + '%'
      };
    }
  },
  watch: {
    skillPrcnt(newValue, oldValue) {
      this.newWidth = newValue;
      this.oldWidth = oldValue;
      this.doTransition = true;
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
.animationin {
  animation: showHide 1s ease-out alternate;
}
@keyframes showHide {
  0% {
    width: var(--old-box-width);
  }
  100% {
    width: var(--top-box-width);
  }
}

.prcnt-number {
  transform: skewX(30deg);
  justify-self: center;
  position: absolute;
  left: 44%;
  top: -3px;
}
</style>
