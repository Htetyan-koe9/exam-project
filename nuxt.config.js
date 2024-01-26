require("dotenv").config();

export default {
  serverMiddleware: ["~/server-middleware/logger"],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "exam-project",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/fontawesome.js", "~/plugins/nanoid.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/dayjs", "@nuxtjs/pwa"],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: true,
    icon: false,
    workbox: true,
    manifest: {
      name: "lp template",
      short_name: "lp template",
      display: "fullscreen",
      background_color: "#ffffff",
      theme_color: "#ffffff",
    },
  },

  styleResources: {
    scss: ["~/assets/styles/main.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: true,
    },
  },
};
