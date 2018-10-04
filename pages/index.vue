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

@mixin corner($color: $secondary_color, $size: 10px) {
    position: relative;

    &::before, &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        border: $size solid transparent;
    }
    &::before {
        top: 0;
        left: 0;
        border-top-color: $color;
        border-left-color: $color;
    }
    &::after {
        bottom: 0;
        right: 0;
        border-bottom-color: $color;
        border-right-color: $color;
    }
}

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
            position: relative;
            grid-row: 1 / span $catch_span_row;
            grid-column: 1 / span $catch_span_column;
            background-image: url("~assets/images/catch-image_1.jpg");
            background-size: cover;
            background-position: center center;

            @include corner($background_color, 20px);
        }

        & .grid-small {
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
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid $theme_color;
                color: $theme_color;
                letter-spacing: 5px;
                transition: letter-spacing .5s;

                @include corner($secondary_color, 10px);

                &:hover {
                    letter-spacing: 7px;
                    transition-duration: .2s;
                }

                &::before, &::after {
                    opacity: 0;
                    transition-property: opacity,transform;
                    transition-duration: .5s;
                }
                &::before {
                    transform: translate(2px, 2px);
                }
                &::after {
                    transform: translate(-2px, -2px);
                }

                &:hover::before, &:hover::after {
                    opacity: 1;
                    transition-duration: .2s;
                }
                &:hover::before {
                    transform: translate(5px, 5px);
                }
                &:hover::after {
                    transform: translate(-5px, -5px);
                }
            }
        }
    }
}
</style>
