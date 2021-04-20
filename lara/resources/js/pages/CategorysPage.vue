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
            <h2>Choose source info</h2>
        </div>
    </main>
</template>
<script>
import CategoryItemComponent from "../components/CategoryItemComponent";
import axios from "axios";
export default {
    name: "NewsPageComponent",
    components: { CategoryItemComponent },
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
    }
    .headersection {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .seemore {
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
        }
    }
    .categoris {
        display: flex;
        justify-content: space-between;
    }
}
</style>
