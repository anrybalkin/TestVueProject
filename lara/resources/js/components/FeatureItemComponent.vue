<template>
    <div class="featuredItem">
        <img :src="/images/ + img" class="imgF" alt="" />
        <h5 class="titleF">
            <router-link :to="/singlepage/ + id">{{ title }}</router-link>
        </h5>
        <span class="sourceF"
            ><router-link :to="/explore/ + source">{{
                source.replace("_", " ")
            }}</router-link></span
        >
        <span class="timeF"
            ><img src="/Images/clock.svg" alt="clock" /><time
                :datetime="time"
                >{{ formattedDate }}</time
            ></span
        >
    </div>
</template>
<script>
import moment from "moment";
export default {
    name: "FreatureItem",
    props: ["id", "title", "img", "source", "time"],
    computed: {
        formattedDate() {
            var toLocal = moment.utc(this.time);
            return moment(toLocal)
                .local()
                .format("hh:mm a");
        }
    }
};
</script>
<style lang="scss">
.featuredItem {
    margin-right: 2px;
    background-color: white;
    border-radius: 15px;
    padding: 6px;
    display: grid;
    grid-template-columns: auto;
    grid-template-areas: "imgF imgF" "titleF sourceF" "titleF timeF";
    align-items: center;
    justify-items: center;

    .imgF {
        grid-area: imgF;
    }
    .titleF {
        grid-area: titleF;
        justify-self: center;
        width: 224px;
        font-size: 14px;
    }

    .sourceF {
        grid-area: sourceF;
        width: 75px;
        background: rgba(80, 62, 157, 0.1);
        border-radius: 4px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-self: center;
        justify-content: center;
        a {
            font-style: normal;
            font-weight: 600;
            font-size: 11px;
            line-height: 16px;
            text-align: center;
            color: #503e9d;
            text-decoration: none;
        }
    }

    .timeF {
        grid-area: timeF;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #878787;

        time {
            padding-left: 7px;
        }
    }
}
</style>
