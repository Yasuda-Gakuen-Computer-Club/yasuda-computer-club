<template>
    <div>
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
.main {
    width: 100%;
    max-width: $max_width;
    margin: 0 auto;

    & .grid-container {
        width: 100%;
        padding-top: 5px;
        display: grid;
        grid-template-rows: repeat($catchphrase_span_row_pc - 2, $grid_size) repeat(2, $grid_small_size);
        grid-template-columns: repeat($grid_columns_pc, $grid_size);
        grid-auto-rows: $grid_size;
        grid-gap: $grid_gap;
        perspective: 100px;

        & > * {
            opacity: 0;
            animation: grid_item_enter .8s .2s ease-out forwards;
        }

        & .catchphrase {
            grid-row: 1 #{'/'} $catchphrase_span_row_pc + 1;
            grid-column: 1 #{'/'} $catchphrase_span_column_pc + 1;
        }

        & .grid-small {
            grid-column: ($catchphrase_span_column_pc + 1) / span $grid_columns_pc - $catchphrase_span_column_pc;

            &.link-about {
                grid-row: 3;
            }
            &.link-activities {
                grid-row: 4;
            }
        }
    }
}

@media screen and (max-width: $max_width + $horizontal_margin * 2) {
    .main {
        padding: 5px $horizontal_margin;

        & .grid-container {
            grid-template-rows: repeat($catchphrase_span_row_tab - 2, $grid_size) repeat(2, $grid_small_size);
            grid-template-columns: repeat(auto-fit, $grid-size);
            justify-content: center;

            & .catchphrase {
                grid-row: 1 #{'/'} $catchphrase_span_row_tab + 1;
                grid-column: 1 #{'/'} $catchphrase_span_column_tab + 1;
            }

            & .grid-small {
                grid-column: $catchphrase_span_column_tab + 1 #{'/'} -1;

                &.link-about {
                    grid-row: 3;
                }
                &.link-activities {
                    grid-row: 4;
                }
            }
        }
    }
}

@media screen and (max-width: $grid_size * 5 + $grid-gap * 4 + $horizontal_margin * 2) {
    .main {
        .grid-container {
            width: 100%;
            justify-content: center;
            grid-template-rows: repeat(2, 30vw) repeat(2, $grid_small_size);
            grid-template-columns: repeat(3, 30vw);
            grid-auto-rows: 30vw;

            & .catchphrase {
                grid-row: 1 / 3;
                grid-column: 1 / 4;
            }

            & .grid-small {
                grid-column: 1 / 4;

                &.link-about {
                    grid-row: 3;
                }
                &.link-activities {
                    grid-row: 4;
                }
            }
        }
    }
}

@keyframes grid_item_enter {
    0% {
        transform: rotate3d(-1, -1, 1, -2deg);
    }
    100% {
        opacity: 1;
    }
}
</style>
