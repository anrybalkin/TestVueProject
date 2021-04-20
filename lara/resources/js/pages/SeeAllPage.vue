<template>
    <main>
        <div class="wrapper">
            <h1 class="title">Explore channels</h1>
            <section class="categoris">
                <CategoryItemComponent
                    v-for="Item in cat"
                    :key="Item.id"
                    v-bind="Item"
                ></CategoryItemComponent>
            </section>
            <div class="headersection">
                <h2 class="title" v-if="this.$route.params.typeNews == 1">
                    Today’s Headlines
                </h2>
                <h2 class="title" v-else>
                    Featured News
                </h2>
            </div>
            <section class="todaynews">
                <TodayItem
                    v-for="Item in news"
                    :key="Item.id"
                    v-bind="Item"
                ></TodayItem>
            </section>
        </div>
    </main>
</template>
<script>
import axios from "axios";
import TodayItem from "../components/TodayItemComponent";
import CategoryItemComponent from "../components/CategoryItemComponent";

export default {
    name: "NewsPageComponent",
    components: { TodayItem, CategoryItemComponent },
    props: ["source"],
    created() {
        this.load();
    },
    data() {
        return {
            isLoading: false,
            news: [],
            cat: []
        };
    },
    /*computed: {
        source() {
            return this.$route.params.source;
        }
    },*/
    methods: {
        load() {
            this.isLoading = true;
            axios
                .get("/api/seeall/" + this.$route.params.typeNews)
                .then(response => {
                    this.isLoading = false;
                    this.news = response.data;
                });
            axios.get(`/api/category`).then(response => {
                this.isLoading = false;
                this.cat = response.data;
            });
        }
    }
};
</script>
<style lang="scss">
main {
    border-radius: 24px;
    .wrapper {
        flex-direction: column;
        margin: 80px 0 20px 30px;
        .headersection {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                font-family: "Open Sans";
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 32px;
            }
            .seemore {
                a {
                    display: flex;
                    align-items: center;
                    width: 70px;
                    text-decoration: none;
                    color: #503e9d;
                }
            }
        }

        .categoris {
            display: flex;
            justify-content: space-between;
        }

        .todaynews {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 12px;
        }

        .featuredNews {
            display: flex;
            gap: 10px;
        }
    }
}
</style>
