<template>
    <div class="catchphrase">
        <div class="catchphrase-text" :style="style">{{ text }}</div>
    </div>
</template>

<script>
import config from "~/contents/indexConfig.json";

export default {
    name: "PageIndexCatchphrase",
    data: () => ({
        index: 0,
        list: config.catchphrases
    }),
    computed: {
        current() {
            return this.list[this.index];
        },
        text() {
            return this.current.text || "";
        },
        style() {
            return this.current.style || "";
        }
    }
}
</script>
