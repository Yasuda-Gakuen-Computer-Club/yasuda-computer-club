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
            { hid: "description", name: "description", content: "東京都墨田区横網の安田学園コンピュータークラブです。" },
            { name: "msapplication-TileColor", content: "#2A6DCB" }
        ],
        link: [
            { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
            { rel: "manifest", href: "/site.webmanifest" },
            { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#2A6DCB" },
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
        "~/assets/sass/common.scss"
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
