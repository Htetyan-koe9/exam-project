<template>
  <div class="page-dashboard">
    <Banner />
    <Offers :content="homePageData.offers" />
    <Service :contentData="homePageData" />
  </div>
</template>

<script>
import Banner from "~/components/home/Banner.vue";
import Offers from "~/components/home/Offers.vue";
import Service from "~/components/home/Service.vue";
import { mapState } from "vuex";

export default {
  components: {
    Banner,
    Offers,
    Service,
  },
  computed: {
    ...mapState(["homePageData"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/main.scss";
.page-dashboard {
}
</style>
