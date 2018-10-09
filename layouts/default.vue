<template>
    <div>
        <CommonHeader/>
        <nuxt class="main"/>
    </div>
</template>

<script>
import CommonHeader from "~/components/CommonHeader.vue";

export default {
    components: { CommonHeader }
}
</script>

<style lang="scss">
@import url("~/assets/sass/common.scss");

.main {
    max-width: $max_width;
    margin: 0 auto;
    padding: 0 20px;
}
</style>
