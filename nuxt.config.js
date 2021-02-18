export default {
    css: ["@/node_modules/@braid/vue-formulate/themes/snow/snow.scss"],
    plugins: ["~/plugins/vue-formulate"],
    router: { 
        base: '/isdoc-ui' 
    },
    target: 'static', // default is server 
    build: {
        babel: {
            compact: true
        }
    },
    buildModules: ['@nuxtjs/vuetify'],
}
