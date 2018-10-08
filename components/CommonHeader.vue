<template>
    <header class="header">
        <h1 class="site-title">
            <nuxt-link
                to="/"
                class="link">
                <img
                    class="logo-image"
                    src="~/assets/images/site-logo.svg"
                    alt="安田学園 コンピュータークラブ">
            </nuxt-link>
        </h1>
    </header>
</template>

<script>
export default {
    name: "CommonHeader"
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid $theme_color;

    & .site-title {
        max-width: $max_width;
        margin: 0 auto;

        & .logo-image {
            width: 100%;
            max-width: 320px;
            height: auto;
        }
    }
}
</style>
