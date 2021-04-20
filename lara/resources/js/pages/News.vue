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
            <div class="headerSection">
                <h2 class="title">Today’s Headlines</h2>
                <span class="seeMore"
                    ><router-link to="/seeall/1">See all ></router-link></span
                >
            </div>
            <section class="todayNews">
                <TodayItem
                    v-for="Item in news"
                    :key="Item.id"
                    v-bind="Item"
                ></TodayItem>
            </section>
            <div class="headerSection">
                <h2 class="title">Featured News</h2>
                <span class="seeMore"
                    ><router-link to="/seeall/2">See all ></router-link></span
                >
            </div>
            <section class="featuredNews">
                <FeatureItem
                    v-for="Item in newsF"
                    :key="Item.id"
                    v-bind="Item"
                ></FeatureItem>
            </section>
        </div>
    </main>
</template>
<script>
import axios from "axios";
import TodayItem from "../components/TodayItemComponent";
import FeatureItem from "../components/FeatureItemComponent";
import CategoryItemComponent from "../components/CategoryItemComponent";

export default {
    name: "NewsPageComponent",
    components: { TodayItem, FeatureItem, CategoryItemComponent },
    created() {
        this.load();
    },
    data() {
        return {
            isLoading: false,
            news: [],
            newsF: [],
            cat: []
        };
    },
    methods: {
        load() {
            this.isLoading = true;

            axios.get(`/api/gettodaynews`).then(response => {
                this.isLoading = false;
                this.news = response.data;
            });
            axios.get(`/api/getfeaturednews`).then(response => {
                this.isLoading = false;
                this.newsF = response.data;
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
    width: calc(98% - 304px);

    .wrapper {
        flex-direction: column;
        margin: 80px 0 20px 30px;
        .headerSection {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .seeMore {
            a {
                display: flex;
                align-items: center;
                width: 70px;
                text-decoration: none;
                color: #503e9d;
            }
        }

        .title {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            margin-top: 42px;
        }

        .categoris {
            display: flex;
            justify-content: space-between;
        }

        .todayNews {
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
