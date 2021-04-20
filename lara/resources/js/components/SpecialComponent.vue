<template>
    <div class="Special">
        <div class="Special-block">
            <img class="closeSpecial" src="/images/Close.png" alt="" />
            <img
                src="/images/32px-icon-inside.png"
                alt=""
                class="pictureSpecial"
            />
            <div>
                <h5 class="titleSpecial">
                    Subscribe to our<br />
                    new plan <span>$25</span>
                </h5>
                <p class="descriptionSpecial">
                    It is a limited time offer that will expire soon.
                </p>
            </div>
            <button class="btnSpecial">
                Subscribe now <img src="/images/Arrow-right.png" alt="" />
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "SpecialComponent"
};
</script>
<style lang="scss">
.Special {
    width: 240px;
    height: 324px;
    margin: 20px auto;
    background: #ffffff;
    box-shadow: 0px 32px 96px -8px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    .Special-block {
        width: 80%;
        height: 80%;
        margin: 25px auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .closeSpecial {
            position: absolute;
            top: 0;
            right: 0;
            width: 12px;
            height: 12px;
        }

        .closeSpecial:hover {
            cursor: pointer;
        }

        .pictureSpecial {
            width: 64px;
            height: 64px;
        }
        .titleSpecial {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #182135;
            margin-bottom: 0;
        }

        .titleSpecial {
            span {
                color: #fb6d3a;
            }
        }

        .descriptionSpecial {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #626264;
        }

        .btnSpecial {
            background-color: #503e9d;
            border: none;
            outline: none;
            border-radius: 10px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            color: #f7fafc;
            display: flex;
            align-items: center;
            width: 176px;
            height: 48px;
            justify-content: center;
        }

        .btnSpecial:hover {
            cursor: pointer;
        }

        .btnSpecial {
            img {
                margin-left: 5px;
            }
        }
    }
}
</style>
