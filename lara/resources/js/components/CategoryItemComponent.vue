<template>
    <router-link :to="/explore/ + source.toLowerCase()">
        <div class="catitem">
            <img :src="/images/ + img" :alt="source.toLowerCase()" />
            <span class="source">{{ source.replace("_", " ") }}</span>
        </div>
    </router-link>
</template>
<script>
export default {
    name: "CategoryItemComponent",
    props: ["img", "source", "update"]
};
</script>
<style lang="scss">
.catitem {
    cursor: pointer;
    display: flex;
    background: #f7f7f7;
    box-shadow: 0px 6px 30px rgba(65, 84, 152, 0.08);
    border-radius: 12px;
    flex-direction: column;
    width: 152px;
    height: 158px;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        margin-bottom: 30px;
    }

    .source {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #182135;
        position: absolute;
        bottom: 16px;
    }
}
</style>
