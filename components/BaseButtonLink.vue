<template>
    <nuxt-link
        :to="to"
        class="link">
        <slot/>
    </nuxt-link>
</template>

<script>
export default {
    name: "BaseButtonLink",
    props: {
        to: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $theme_color;
    color: $theme_color;
    letter-spacing: 5px;
    transition: .5s;

    @include corner($theme_color, 15px, 3px);
}
</style>
