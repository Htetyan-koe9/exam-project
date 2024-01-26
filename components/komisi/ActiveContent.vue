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

  p,
  span,
  li {
    color: #505050;
    font-size: 15px;
  }
  p.table-desc {
    width: 100%;
    max-width: 992px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
  table {
    width: 100%;
    max-width: 992px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 0px;
    animation: fadeEffect 1s;

    tr:first-child th {
      background-color: #00276c;
      color: #ffffff;
      font-size: 24px;
      font-weight: bold;
      border-radius: 8px 8px 0px 0px;
      height: 50px;
    }

    tr:last-child th:first-child {
      width: 25%;
    }

    tr:last-child th {
      color: #505050;
      font-size: 20px;
      height: 40px;
      font-weight: bold;
      border-bottom: 1px solid #d2d2d2;
      border-left: 1px solid #d2d2d2;
    }

    tr:last-child th:last-child {
      border-right: 1px solid #d2d2d2;
    }

    tfoot tr {
      text-align: center;
    }

    tfoot tr td {
      color: #505050;
      font-size: 15px;
      height: 40px;
      border-bottom: 1px solid #d2d2d2;
      border-left: 1px solid #d2d2d2;
    }

    tfoot tr td:last-child {
      border-right: 1px solid #d2d2d2;
    }
  }

  .top-space {
    margin-top: 40px;
  }

  ol {
    padding-left: 16px;
    animation: fadeEffect 1s;
  }

  ol li {
    margin-bottom: 22px;
  }
}
</style>