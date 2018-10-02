<template>
    <div>
        <header class="header">
            <h1 class="site-title">安田学園コンピュータークラブ</h1>
        </header>
        <main class="main">
            <div class="grid-container">
                <div class="catch"></div>
                <div class="grid-small"><nuxt-link to="about/">ABOUT</nuxt-link></div>
                <div class="grid-small"><nuxt-link to="activities/">ACTIVITIES</nuxt-link></div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style lang="scss" scoped>
$grid_columns_pc: 8;
$grid_size: 150px;
$grid_small_size: 50px;
$max_width: $grid_size * $grid_columns_pc;

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid $theme_color;

    & .site-title {
        width: 100%;
        max-width: $max_width;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        color: $theme_color;
        font: {
            family: "GSanSerif-B";
            weight: normal;
            size: 36px;
        }
    }
}
.main {
    width: 100%;
    max-width: $max_width;
    margin: 0 auto;
    padding-top: 80px;

    & .grid-container {
        width: 100%;
        display: grid;
        grid-template-rows: repeat(3, $grid_size) $grid_small_size;
        grid-template-columns: repeat($grid_columns_pc, $grid_size);
        grid-auto-rows: $grid_size;

        & > * {
            margin: 2px;
        }

        & .catch {
            grid-row: span 3;
            grid-column: span 5;
            background-image: url("~assets/images/catch-image_1.jpg");
            background-size: cover;
            background-position: center center;
        }

        & .grid-small {
            grid-row: 4;
            grid-column: span $grid_columns_pc / 2;

            & a {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid $theme_color;
                color: $theme_color;
                letter-spacing: 5px;
                transition: background-color .2s;

                &:hover {
                    background-color: rgba($theme_color, .05);
                }
            }
        }
    }
}
</style>
