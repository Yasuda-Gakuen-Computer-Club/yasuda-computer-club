<template>
    <div class="page-index-catch-phrase">
        <div
            class="text"
            :style="style"
            v-html="text"></div>
    </div>
</template>

<script>
import config from "~/contents/indexConfig.json";

export default {
    name: "PageIndexCatchphrase",
    data: () => ({
        random: Math.random(),
        list: config.catchphrases
    }),
    computed: {
        current() {
            const {list} = this;
            return list[Math.floor(this.random * list.length)];
        },
        text() {
            return (this.current.text || "").replace(/\n/g, "<br>");
        },
        style() {
            return this.current.style || "";
        }
    }
}
</script>

<style lang="scss" scoped>
.page-index-catch-phrase {
    background-image: url("~assets/images/catch-image_1.jpg");
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;

    @include corner($background_color, 20px);

    & .text {
        font-family: "Folk Medium", serif;
        font-size: 3em;
        color: #FFF;
    }
}
</style>
