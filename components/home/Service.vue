<template>
  <section class="service-section">
    <div class="container">
      <p v-html="contentData.content"></p>
    </div>
    <div class="container">
      <div class="service-container">
        <div
          class="service-item"
          v-for="item in contentData.services"
          :key="item.id"
        >
          <div class="img-section">
            <img :src="item.img" class="img" />
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  props: {
    contentData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
  
<style lang="scss" scoped>
.service-section {
  background-color: rgba(0, 0, 0, 0.03);
  padding: 50px;

  ::v-deep .steps {
    padding: 0;
    li {
      list-style: none;
      font-size: 17px;
      padding-top: 5px;

      span {
        background: #faa41d;
        color: #fff;
        padding: 0px 7px;
        border-radius: 3px;
        margin-right: 4px;
      }
    }
  }

  .service-container {
    padding: 100px 0 0;
    display: flex;
    justify-content: space-between;

    .service-item {
      padding: 0 40px;
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;

      .img-section {
        height: 120px;
      }

      h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #00276c;
        font-weight: bold;
      }
    }
  }
}
</style>