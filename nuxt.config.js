export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "code-cases",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // https://go.nuxtjs.dev/tailwindcss
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/svg"],

  svg: {
    vueSvgLoader: {},
    svgSpriteLoader: {}
  },

  content: {
    editor: "~/.nuxt/content/editor.vue",
    apiPrefix: "_content",
    dir: "content",
    fullTextSearchFields: ["title", "description", "slug", "text"],
    liveEdit: false,
    useCache: false,
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    },
    yaml: {},
    csv: {},
    xml: {},
    extendParser: {}
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
