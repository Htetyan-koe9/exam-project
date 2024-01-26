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
  @keyframes fadeEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h3 {
    color: #505050;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
    animation: fadeEffect 1s;
  }

  ol {
    animation: fadeEffect 1s;
  }

  ol li {
    margin-bottom: 22px;
  }

  p,
  span,
  li {
    color: #505050;
    font-size: 15px;
  }

  .make-bold {
    font-weight: bold;
  }

  .pointer:first-child {
    margin-left: 0px;
  }

  .pointer {
    display: inline-block;
    padding: 15px;
    position: relative;
    color: #ffffff;
    background: #00276c;
    margin-right: 35px;
    margin-top: 20px;

    &::before {
      content: "";
      position: absolute;
      right: -24px;
      bottom: 0;
      top: 0;
      width: 0;
      height: 0;
      border-left: 24px solid #00276c;
      border-top: 28px solid transparent;
      border-bottom: 25px solid transparent;
    }
  }

  .pointer-alt {
    background: #ff7d00;

    &::before {
      border-left: 24px solid #ff7d00;
    }
  }
}
</style>