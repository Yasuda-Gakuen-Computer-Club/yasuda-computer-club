<template>
    <div>
        <header class="header">
            <h1 class="site-title">安田学園コンピュータークラブ</h1>
        </header>
        <main class="main">
            <div class="grid-container">
                <Catchphrase class="catchphrase"/>
                <BaseButtonLink class="grid-small link-about" to="about/">ABOUT</BaseButtonLink>
                <BaseButtonLink class="grid-small link-activities" to="activities/">ACTIVITIES</BaseButtonLink>
                <GridItem
                    v-for="(item, i) in gridItems"
                    :key="'grid-item_' + i" v-bind="item">
                    <div :is="gridItemComponents[i]"/>
                </GridItem>
            </div>
        </main>
    </div>
</template>

<script>
import config from "~/contents/indexConfig.json";

import BaseButtonLink from "~/components/BaseButtonLink.vue";
import PageIndexCatchphrase from "~/components/PageIndexCatchphrase.vue";
import PageIndexGridItem from "~/components/PageIndexGridItem.vue";

const components = {
    BaseButtonLink,
    Catchphrase: PageIndexCatchphrase,
    GridItem: PageIndexGridItem
};

const gridItemContext = require.context("~/contents/indexGridItems", false, /\.vue$/);
config.gridItems.forEach(item =>
    components[`GridItem_${item.name}`]
        = gridItemContext(item.component).default
);

export default {
    name: "PageIndex",
    components,
    data: () => ({
        gridItems: config.gridItems
    }),
    computed: {
        gridItemComponents() {
            return this.gridItems.map(item => `GridItem_${item.name}`);
        }
    }
}
</script>

<style lang="scss" scoped>
$grid_columns_pc: 8;
$grid_size: 150px;
$grid_small_size: 50px;
$grid_gap: 5px;
$catchphrase_span_row: 4;
$catchphrase_span_column: 5;
$max_width: $grid_size * $grid_columns_pc + $grid_gap * ($grid_columns_pc - 1);

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
        grid-template-rows: repeat($catchphrase_span_row - 2, $grid_size) repeat(2, $grid_small_size);
        grid-template-columns: repeat($grid_columns_pc, $grid_size);
        grid-auto-rows: $grid_size;
        grid-gap: $grid_gap;

        & .catchphrase {
            grid-row: 1 / span $catchphrase_span_row;
            grid-column: 1 / span $catchphrase_span_column;
        }

        & .grid-small {
            grid-column: ($catchphrase_span_column + 1) / span $grid_columns_pc - $catchphrase_span_column;

            &.link-about {
                grid-row: 3;
            }
            &.link-activities {
                grid-row: 4;
            }
        }
    }
}
</style>
