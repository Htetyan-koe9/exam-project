<template>
  <div class="container">
    <div class="tab">
      <button
        class="tab-btn"
        v-for="item in pertanyaanAndJawabanData"
        :key="item.id"
        :class="{ active: item.id === activeId }"
        @click="changeTab(item.id)"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="tab-content">
      <ActiveContent :content="activeContent" />
    </div>
  </div>
</template>
  
<script>
import ActiveContent from "~/components/pertanyaanJawaban/ActiveContent.vue";
import { mapState } from "vuex";
export default {
  components: {
    ActiveContent,
  },
  data() {
    return {
      activeId: 1,
    };
  },
  computed: {
    ...mapState(["pertanyaanAndJawabanData"]),
    activeContent() {
      const activeItem = this.pertanyaanAndJawabanData.find(
        (item) => item.id === this.activeId
      );
      return activeItem ? activeItem.content : "";
    },
  },
  methods: {
    changeTab(id) {
      this.activeId = id;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.container {
  padding: 50px 0;

  .tab {
    display: flex;

    .tab-btn {
      background-color: #00276c;
      color: #ffffff;
      border: none;
      outline: none;
      cursor: pointer;
      float: left;
      padding: 14px 0px;
      margin-right: 10px;
      font-size: 15px;
      width: 210px;
      border-radius: 8px 8px 0px 0px;

      &.active {
        background-color: #ff7d00;
      }
    }
  }
  .tab-content {
    background-color: #ffffff;
    border-radius: 0px 8px 8px 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    padding: 40px;
  }
}
</style>