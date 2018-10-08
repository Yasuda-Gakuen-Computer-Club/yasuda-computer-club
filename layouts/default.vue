<template>
    <div>
        <CommonHeader/>
        <nuxt/>
    </div>
</template>

<script>
import CommonHeader from "~/components/CommonHeader.vue";

export default {
    components: { CommonHeader }
}
</script>

<style lang="scss" src="~/assets/sass/common.scss">
</style>
