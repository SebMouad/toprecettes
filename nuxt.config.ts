// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Top Recettes",
      titleTemplate: "%s - Top Recettes",
      meta: [{ name: "description", content: "Des recettes faciles pour des repas sains et savoureux !" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});