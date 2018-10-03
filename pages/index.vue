<template>
    <div>
        <header class="header">
            <h1 class="site-title">安田学園コンピュータークラブ</h1>
        </header>
        <main class="main">
            <div class="grid-container">
                <div class="catch"></div>
                <div class="grid-small link-about"><nuxt-link to="about/">ABOUT</nuxt-link></div>
                <div class="grid-small link-activities"><nuxt-link to="activities/">ACTIVITIES</nuxt-link></div>
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
$catch_span_row: 4;
$catch_span_column: 5;
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
        padding-top: 5px;
        display: grid;
        grid-template-rows: repeat($catch_span_row - 2, $grid_size) repeat(2, $grid_small_size);
        grid-template-columns: repeat($grid_columns_pc, $grid_size);
        grid-auto-rows: $grid_size;
        grid-gap: 5px;

        & .catch {
            grid-row: 1 / span $catch_span_row;
            grid-column: 1 / span $catch_span_column;
            background-image: url("~assets/images/catch-image_1.jpg");
            background-size: cover;
            background-position: center center;
            border-radius: 10px;
        }

        & .grid-small {
            position: relative;
            grid-column: ($catch_span_column + 1) / span $grid_columns_pc - $catch_span_column;

            &.link-about {
                grid-row: 3;
            }
            &.link-activities {
                grid-row: 4;
            }

            & a {
                width: 100%;
                height: 100%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid $theme_color;
                color: $theme_color;
                letter-spacing: 5px;
                transition: letter-spacing .2s;

                &:hover {
                    letter-spacing: 7px;
                }

                &::before, &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    border: 10px solid transparent;
                    opacity: 0;
                    transition: .2s;
                }
                &::before {
                    top: 5px;
                    left: 5px;
                    border-top-color: $secondary_color;
                    border-left-color: $secondary_color;
                    transform: translate(-3px, -3px);
                }
                &::after {
                    bottom: 5px;
                    right: 5px;
                    border-bottom-color: $secondary_color;
                    border-right-color: $secondary_color;
                    transform: translate(3px, 3px);
                }

                &:hover::before, &:hover::after {
                    transform: none;
                    opacity: 1;
                }
            }
        }
    }
}
</style>
