<template>
    <div
        class="grid-item"
        :style="{
            color,
            'grid-row': `span ${height}`,
            'grid-column': `span ${width}`
        }"></div>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-item {
    box-shadow: inset 0 0 0 5px currentColor;

    @include corner(currentColor, 15px, 1px, true, 3px, 1, 1);
}
</style>
