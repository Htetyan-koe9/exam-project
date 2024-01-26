<template>
  <section>
    <div class="download-section">
      <div class="container">
        <div class="download-container">
          <a :href="globalData.download_app.link" target="_blank">
            <img :src="globalData.download_app.img" />
          </a>
        </div>
      </div>
    </div>
    <div class="contact-section">
      <div class="container">
        <div class="contact-container">
          <div
            class="contact-item"
            v-for="(item, index) in globalData.contact"
            :key="index"
          >
            <img :src="item.img" />
            <span class="label">{{ item.label }}:</span>
            <span class="value">
              {{ item.value }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-section">
      <div class="container">
        <div class="footer-container">
          <div
            class="footer-item"
            v-for="(item, index) in globalData.footer"
            :key="index"
          >
            <a :href="item.link" target="_blank">
              <img :src="item.img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["globalData"]),
  },
};
</script>

<style lang="scss" scoped>
.download-section {
  padding: 30px 0;
  .download-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.contact-section {
  background-color: #003c82;
  padding: 15px 0;

  .contact-container {
    display: flex;
    justify-content: space-between;

    .contact-item {
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }

      .label {
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
      }

      .value {
        color: #faa41d;
        font-size: 15px;
        margin-left: 5px;
      }
    }
  }
}

.footer-section {
  background-color: #001e5a;
  padding: 15px 0;

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-item {
      cursor: pointer;
    }
  }
}
</style>