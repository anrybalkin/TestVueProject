<template>
    <aside>
        <nav>
            <span class="logo"><img src="/images/logo.svg" alt="logo"/></span>
            <ul>
                <router-link to="/">
                    <li class="listitem">
                        <div class="list-item-block">
                            <span class="homeitem"></span>
                            <span class="textnav">Home</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="/explore">
                    <li class="listitem">
                        <div class="list-item-block">
                            <span class="feeditem"></span>
                            <span class="textnav">Explore</span>
                        </div>
                    </li>
                </router-link>
                <li class="listitem">
                    <div class="list-item-block">
                        <span class="bookmarkitem"></span>
                        <span class="textnav">Saved</span>
                    </div>
                </li>
                <li class="listitem">
                    <div class="list-item-block">
                        <span class="subscribeitem"></span>
                        <span class="textnav">Subscribe</span>
                    </div>
                </li>
                <li class="listitem">
                    <div class="list-item-block iconwithtext">
                        <span class="msgitem"></span
                        ><span class="textnav">Messages</span
                        ><span class="num-msg">2</span>
                    </div>
                </li>
                <li class="listitem">
                    <div class="list-item-block">
                        <span class="settingsitem"></span>
                        <span class="textnav">Settings</span>
                    </div>
                </li>
            </ul>
            <div class="logout">
                <span class="logoutspan"></span>
                <span class="textnav">Logout</span>
            </div>
            <hr />
            <SpecialComponent></SpecialComponent>
        </nav>
    </aside>
</template>
<script>
import SpecialComponent from "./SpecialComponent";

export default {
    name: "Navigation",
    components: { SpecialComponent }
};
</script>
<style lang="scss">
aside {
    width: 304px;
    background: #f8f8f8;
    border-radius: 0px 24px 24px 0px;
    nav {
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        padding: 33px 16px 0 16px;
    }

    .logo {
        display: flex;
        align-self: center;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .listitem {
        position: relative;
        width: 100%;
        height: 56px;
        margin-top: 5px;
    }

    .list-item-block {
        display: flex;
        align-items: center;
        position: absolute;
        top: 15px;
        left: 10px;
    }

    .iconwithtext {
        position: relative;
    }

    .num-msg {
        position: absolute;
        right: 20px;
        top: 0;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        color: white;
        background-color: #503e9d;
        text-align: center;
    }

    .homeitem,
    .feeditem,
    .bookmarkitem,
    .subscribeitem,
    .msgitem,
    .settingsitem,
    .logoutspan {
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }

    .logout {
        margin: 50px auto 0 auto;
        display: flex;
        align-items: center;
        width: 100%;
        height: 56px;
    }

    .logoutspan {
        background-image: url(../../images/logoutG.svg);
        margin-left: 15px;
    }

    .homeitem {
        background-image: url(../../images/HomeG.svg);
    }
    .feeditem {
        background-image: url(../../images/FeedG.svg);
    }
    .bookmarkitem {
        background-image: url(../../images/BookmarkG.svg);
    }
    .subscribeitem {
        background-image: url(../../images/DocumentG.svg);
    }
    .msgitem {
        background-image: url(../../images/MsgG.svg);
    }
    .settingsitem {
        background-image: url(../../images/SettingsG.svg);
    }

    .logout:hover {
        cursor: pointer;
        background: rgba(80, 62, 157, 0.3);
        border-radius: 12px;
        .logoutspan {
            background-image: url(../../images/logoutP.svg);
        }
        .textnav {
            color: #503e9d;
        }
    }

    .listitem:hover {
        cursor: pointer;
        background: rgba(80, 62, 157, 0.3);
        border-radius: 12px;
        .textnav {
            opacity: 1;
            color: #503e9d;
        }
        .homeitem {
            background-image: url(../../images/HomeP.svg);
        }
        .feeditem {
            background-image: url(../../images/FeedP.svg);
        }
        .bookmarkitem {
            background-image: url(../../images/BookmarkP.svg);
        }
        .subscribeitem {
            background-image: url(../../images/DocumentP.svg);
        }
        .msgitem {
            background-image: url(../../images/MsgP.svg);
        }
        .settingsitem {
            background-image: url(../../images/SettingsP.svg);
        }
    }

    hr {
        border: 1px solid rgba(135, 135, 135, 0.5);
        width: 90%;
    }
}
</style>
