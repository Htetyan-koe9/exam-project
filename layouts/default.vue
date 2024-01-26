<template>
  <div class="layout-main">
    <!-- <div class="navbar">
      <navbar />
    </div> -->
    <Navbar />
    <div class="page-content">
      <nuxt-child />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "~/components/shared/Navbar.vue";
import FooterComponent from "~/components/shared/FooterComponent.vue";
export default {
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "OpenSans-Light";
  font-style: normal;
  font-weight: normal;
  src: url("~/assets/fonts/OpenSans-Light.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSans-Regular";
  font-style: normal;
  font-weight: normal;
  src: url("~/assets/fonts/OpenSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSans-Medium";
  font-style: normal;
  font-weight: normal;
  src: url("~/assets/fonts/OpenSans-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSans-Bold";
  font-style: normal;
  font-weight: normal;
  src: url("~/assets/fonts/OpenSans-Bold.ttf") format("truetype");
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: $font-family-base;
  font-weight: normal;
  font-size: $font-size-root;
  font-weight: 400;
  color: $color-text-body;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-color: $color-bg;

  @media (max-width: $tablet-breakpoint) {
    font-size: $font-size-sm;
  }
}

body {
  width: 100%;
  margin: 0;
  overflow-x: hidden;
}

h1 {
  font-family: $font-family-bold;
  font-size: $font-size-h1;
  color: $color-text-heading;
}

h2 {
  font-family: $font-family-bold;
  font-size: $font-size-h2;
  color: $color-text-heading;
}

h3 {
  font-family: $font-family-bold;
  font-size: $font-size-h3;
  color: $color-text-heading;
}

h4 {
  font-family: $font-family-bold;
  font-size: $font-size-h4;
  color: $color-text-heading;
}

h5 {
  font-family: $font-family-bold;
  font-size: $font-size-h5;
  color: $color-text-heading;
}

h6 {
  font-family: $font-family-bold;
  font-size: $font-size-h6;
  color: $color-text-heading;
}

p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

// .layout-main {
// }

// .page-content {
//   // padding-top: $navbar-height;
//   min-height: 100vh;
// }
</style>
