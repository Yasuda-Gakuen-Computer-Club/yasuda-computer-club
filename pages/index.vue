<template>
    <div>
        <header class="header">
            <h1 class="site-title">安田学園コンピュータークラブ</h1>
        </header>
        <main class="main">
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
.header {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid $theme_color;

    & .site-title {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        color: $theme_color;
        font-family: "GSanSerif-B";
        font-weight: normal;
    }
}
</style>
