<template>
  <section class="nav-container">
    <div class="app-nav">
      <div class="container">
        <div class="top-nav">
          <div class="app-nav__logo">
            <nuxt-link to="/">
              <img :src="globalData.logo" class="logo" />
            </nuxt-link>
          </div>
          <div class="app-nav__btn">
            <a :href="globalData.link.login" class="login-btn">Login</a>
            <a :href="globalData.link.register" class="register-btn"
              >Register</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="nav-menu">
      <div class="container">
        <ul>
          <nuxt-link to="/" exact>
            <li :class="{ active: $route.path === '/' }">Tentang OLE777</li>
          </nuxt-link>
          <nuxt-link to="/komisi" exact>
            <li :class="{ active: $route.path === '/komisi' }">Komisi</li>
          </nuxt-link>
          <nuxt-link to="/peraturan" exact>
            <li :class="{ active: $route.path === '/peraturan' }">Peraturan</li>
          </nuxt-link>
          <nuxt-link to="/pertanyaan-jawaban" exact>
            <li :class="{ active: $route.path === '/pertanyaan-jawaban' }">
              Pertanyaan & Jawaban
            </li>
          </nuxt-link>

          <li
            v-if="$route.path !== '/komisi'"
            class="main-label"
            @click="handleOpenForm()"
          >
            OLE777 Official
          </li>
        </ul>
      </div>
    </div>
    <PopupForm v-if="isFormOpen" @closePopup="handleCloseForm" />
  </section>
</template>

<script>
import PopupForm from "./PopupForm.vue";
import { mapState } from "vuex";
export default {
  components: {
    PopupForm,
  },
  data() {
    return {
      isFormOpen: false,
    };
  },
  computed: {
    ...mapState(["globalData"]),
  },
  methods: {
    handleCloseForm() {
      this.isFormOpen = false;
    },
    handleOpenForm() {
      this.isFormOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  .app-nav {
    background-color: #001e5a;
    width: 100%;
    height: $navbar-height;

    .container {
      height: 100%;
    }

    .top-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    // &__logo {
    //   display: flex;
    //   align-items: center;
    //   height: 100%;
    // }

    &__btn {
      display: flex;
      align-items: center;
      height: 100%;

      .login-btn,
      .register-btn {
        padding: 0px 10px;
        color: #ffffff;
        font-size: 15px;
        border: 0px;
        border-radius: 5px;
        float: left;
        margin-right: 5px;
        height: 40px;
        width: auto;
        line-height: 40px;
      }

      .login-btn {
        background-color: #999999;
      }
      .register-btn {
        margin-right: 0px;
        background-color: #ff7d00;
      }
    }
  }

  .nav-menu {
    background-color: #003c82;
    height: 50px;
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 0;

      a {
        cursor: pointer;
      }

      a:not(:last-child) {
        padding-right: 100px;
      }

      li {
        &.active {
          color: #faa41d;
          font-weight: bold;
        }
      }

      .main-label {
        color: #001e5a !important;
        font-weight: 600;
        padding: 6px 15px;
        background: #faa41f;
        border-radius: 3px;
        box-shadow: 0px 2px 11px rgba(249, 247, 244, 0.22);
        cursor: pointer;
      }
    }
  }
}
</style>
