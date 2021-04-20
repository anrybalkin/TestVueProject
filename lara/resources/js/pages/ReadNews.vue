<template>
    <div class="article">
        <h2>{{ cat["title"] }}</h2>
        <p>
            {{ cat["text"] }}
        </p>
        <img :src="/images/ + cat['img']" alt="" />
        <span>{{ cat["source"] }}</span>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "ReadArticle",
    props: ["title", "img", "text", "source"],
    created() {
        this.load();
    },
    data() {
        return {
            isLoading: false,
            cat: []
        };
    },
    methods: {
        load() {
            this.isLoading = true;
            axios
                .get(`/api/singlepage/` + this.$route.params.idPost)
                .then(response => {
                    this.isLoading = false;
                    this.cat = response.data;
                });
        }
    }
};
</script>
<style lang="scss">
.article {
    border-radius: 24px;
    margin: 80px auto 80px 20px;
}
</style>
