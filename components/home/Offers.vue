<template>
  <div class="container">
    <div class="offer-container">
      <img
        :src="item.img"
        v-for="(item, index) in content"
        :key="index"
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.offer-container {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;

  .img {
    width: 100%;
    max-width: 384px;
    border-radius: 8px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
  }
}
</style>