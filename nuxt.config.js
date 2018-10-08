module.exports = {
    mode: "universal",

    /*
    ** Headers of the page
    */
    head: {
        title: "安田学園コンピュータークラブ",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {
        color: "#2A6DCB",
        height: "5px",
        duration: 5000
    },

    /*
    ** Global CSS
    */
    css: [
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        "@nuxtjs/pwa",
        ["nuxt-sass-resources-loader", [
            "~/assets/sass/variables.scss",
            "~/assets/sass/mixins.scss"
        ]]
    ],

    manifest: {
        name: "安田学園コンピュータークラブ",
        lang: "ja"
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            
        }
    }
}
