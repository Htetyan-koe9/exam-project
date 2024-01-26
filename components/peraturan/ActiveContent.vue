<template>
  <div v-html="content"></div>
</template>
  
<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
};
</script>
  
<style lang="scss" scoped>
::v-deep {
  h3 {
    color: #505050;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
    animation: fadeEffect 1s;
  }

  .make-bold {
    font-weight: bold;
  }

  p {
    animation: fadeEffect 1s;
  }

  p,
  span,
  li {
    color: #505050;
    font-size: 15px;
  }

  @keyframes fadeEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>