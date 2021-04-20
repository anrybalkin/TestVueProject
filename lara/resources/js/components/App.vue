<template>
    <div id="application">
        <AppNavigation></AppNavigation>
        <!-- <AppNews></AppNews> -->
        <router-view :key="$route.path"></router-view>
    </div>
</template>

<script>
import AppNavigation from "./NavigationComponent";
// import AppNews from "../pages/News";

export default {
    name: "App",
    components: {
        AppNavigation
        // AppNews
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

body {
    background: #e5e5e5;
    font-family: "Open Sans", sans-serif;
    #application {
        display: flex;
        margin: 0;
        background: rgba(255, 255, 255, 0.5);
        .wrapper {
            display: flex;
        }
    }
}
</style>
