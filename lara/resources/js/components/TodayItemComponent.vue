<template>
    <div class="todayItem">
        <img class="imgNews" :src="/images/ + img" alt="" />
        <div class="textWrapper">
            <h5>
                <router-link :to="/singlepage/ + id">{{ title }}</router-link>
            </h5>

            <div class="raiting">
                <span class="like"
                    ><img src="/images/icon.svg" alt="like" />
                    {{ thousand2K(like) }}</span
                >
                <span class="dislike"
                    ><img src="/images/disagree.svg" alt="disagree" />
                    {{ thousand2K(dislike) }}</span
                >
            </div>
            <span class="tag"
                ><router-link :to="/explore/ + source">{{
                    source.replace("_", " ")
                }}</router-link></span
            >
            <span class="time"
                ><img src="/images/clock.svg" alt="clock" /><time
                    :datetime="time"
                    >{{ formattedDate }}</time
                ></span
            >
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "TodayItem",
    props: ["id", "title", "img", "source", "like", "dislike", "time"],
    computed: {
        formattedDate() {
            var toLocal = moment.utc(this.time);
            return moment(toLocal)
                .local()
                .format("hh:mm a");
        }
    },
    methods: {
        thousand2K(num) {
            if (num >= 0 && num < 1000) {
                return num;
            } else {
                return num / 1000 + "k";
            }
        }
    }
};
</script>

<style lang="scss">
.todayItem {
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 96px auto;
    grid-template-rows: auto;
    grid-template-areas: "img title";
    .imgNews {
        grid-area: img;
        width: 96px;
        height: 96px;
        object-fit: cover;
        border-radius: 15px;
    }

    .textWrapper {
        margin-left: 24px;
        display: grid;
        grid-template-columns: auto;
        grid-template-areas:
            "title title"
            "raiting raiting"
            "tag time";
        align-items: center;
        h5 {
            margin: 0 0 0 0;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            grid-area: title;
        }
        .raiting {
            grid-area: raiting;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
        }
        .like {
            margin-right: 20px;
        }
        .tag {
            grid-area: tag;
            width: 75px;
            background: rgba(80, 62, 157, 0.1);
            border-radius: 4px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #503e9d;
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
        .time {
            grid-area: time;
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
}
</style>
