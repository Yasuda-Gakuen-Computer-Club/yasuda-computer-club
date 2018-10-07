<template>
    <div
        class="grid-item"
        :style="{
            color,
            'grid-row': `span ${height}`,
            'grid-column': `span ${width}`
        }">
        <nuxt-link
            :to="linkTo"
            class="link">
            <slot/>
        </nuxt-link>
    </div>
</template>

<script>
import {themeColor} from "~/contents/globalConfig.json";

const colorCodeRegExp = /^#([\da-fA-F]{6}|[\da-fA-F]{3})$/;

export default {
    name: "PageIndexGridItem",
    props: {
        width: {
            required: true,
            type: Number,
            validator: val => 0 < val && val <= 3
        },
        height: {
            required: true,
            type: Number,
            validator: val => 0 < val && val <= 3
        },
        color: {
            type: String,
            validator: val => colorCodeRegExp.test(val),
            default: themeColor
        },
        textColor: {
            type: String,
            validator: val => colorCodeRegExp.test(val),
            default: "#FFF"
        },
        linkTo: {
            type: String,
            default: "/"
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-item {
    border: 1px solid $theme_color;

    @include corner($secondary_color, 15px, 2px);

    & .link {
        display: block;
        width: 100%;
        height: 100%;
        color: #000;
    }
}
</style>
