<template>

        <div data-v-8c4b8248="" class="container">
    <!-- <section id="call">
      <img :src="$asseturl+'frontend/img/phone.png'" alt="phone" />
    </section> -->


    <slot></slot>

    <div data-v-64546047="" data-v-8c4b8248="" class="footer">
                    <div data-v-64546047="" class="h"></div>
                    <div data-v-64546047="" class="main">
                        <router-link :to="{name:'Authuser'}" data-v-64546047="" aria-current="page" class="router-link-exact-active router-link-active">
                            <div data-v-64546047="" class="item">
                                <img
                                    data-v-64546047=""
                                    :src="$asseturl+'frontend2/static/img/home.png'"
                                    alt=""
                                />
                                <span data-v-64546047="" class="on">Home</span>
                            </div>
                        </router-link>


                        <router-link :to="{name:'memberSystem'}" data-v-64546047=""  class="">
                            <div data-v-64546047="" class="item">
                                <img
                                    data-v-64546047=""
                                    :src="$asseturl+'frontend2/static/img/invite.png?ver=1.0.0'"
                                    alt=""
                                />
                                <span data-v-64546047="" class="">Plans</span>
                            </div>
                        </router-link>


                        <router-link data-v-64546047="" :to="{name:'Usertask'}" class="">
                            <div data-v-64546047="" class="item">
                                <img
                                    data-v-64546047=""
                                    :src="$asseturl+'frontend2/static/img/jobs.png'"
                                    alt=""
                                />
                                <span data-v-64546047="" class="">Jobs </span>
                            </div>
                        </router-link>
                        <router-link :to="{name:'UserTeam'}" data-v-64546047=""  class="">
                            <div data-v-64546047="" class="item">
                                <img
                                    data-v-64546047=""
                                    :src="$asseturl+'frontend2/static/img/team.png'"
                                    alt=""
                                />
                                <span data-v-64546047="" class="">Team</span>
                            </div>
                        </router-link>
                        <router-link :to="{name:'Useraccount'}" data-v-64546047=""  class="">
                            <div data-v-64546047="" class="item">
                                <img
                                    data-v-64546047=""
                                    :src="$asseturl+'frontend2/static/img/account.png'"
                                    alt=""
                                />
                                <span data-v-64546047="" class="">Accounts</span>
                            </div>
                        </router-link>
                    </div>
                </div>

                <div data-v-8c4b8248="" class="new_novice" style="display: none;">
                    <div data-v-8c4b8248="" class="hm"></div>
                    <div data-v-8c4b8248="" class="content">
                        <div data-v-8c4b8248="" class="top">
                            <img data-v-8c4b8248="" :src="$asseturl+'static/img/bg06.417c4e86.png'" alt="" />
                            <p data-v-8c4b8248="">Join in Web FX</p>
                            <p data-v-8c4b8248="">Join Web FX to make money whenever and wherever</p>
                        </div>
                        <div data-v-8c4b8248="" class="bottom">
                            <p data-v-8c4b8248="">Congratulations!</p>
                            <p data-v-8c4b8248="">Congratulations to you! A ৳1000 cash bonus received</p>
                            <div data-v-8c4b8248="" class="btn">Click to collect</div>
                        </div>
                    </div>
                </div>
                <!----><!----><!----><!---->
                <div data-v-8c4b8248="" class="lotteryPopup" style="display: none;">
                    <img
                        data-v-8c4b8248=""
                        src="data:image/png;base64,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"
                        alt=""
                        class="close2_icon"
                    />
                    <div data-v-8c4b8248="" class="lotteryPopup_con">
                        <p data-v-8c4b8248="" class="title_cls">phone pieces exchange for free phones</p>
                        <p data-v-8c4b8248="" class="lotteryPopupImg_txt"><span data-v-8c4b8248="">*Every 9 pieces collected can be exchanged for a cell phone</span></p>
                        <p data-v-8c4b8248="" class="lotteryPopup_button">Participate now</p>
                    </div>
                </div>

            </div>


<!--
<section style="padding: 40px;"></section>
        <section id="menus">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 p-0" style="width: 20% !important;">
                        <div class="menu">
                            <router-link :to="{name:'Authuser'}">
                                <img :src="$asseturl+'frontend/img/home.png'" alt="Home">
                                <img :src="$asseturl+'frontend/img/HomeA.png'" alt="Home" class="activeimg">
                                <p>Home</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-3 p-0" style="width: 20% !important;">
                        <div class="menu">
                            <router-link :to="{name:'UserTeam'}">
                                <img :src="$asseturl+'frontend/img/team.png'" alt="Home">
                                <img :src="$asseturl+'frontend/img/TeamA.png'" alt="Home" class="activeimg">
                                <p>Team</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-3 p-0" style="width: 20% !important;">
                        <div class="menu">
                            <router-link :to="{name:'Usertask'}">
                                <img :src="$asseturl+'frontend/img/Task.png'" alt="Home">
                                <img :src="$asseturl+'frontend/img/TaskA.png'" alt="Home" class="activeimg">
                                <p>Tasks</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-3 p-0" style="width: 20% !important;">
                        <div class="menu">
                            <a :href="$asseturl+'Dream_Land.apk'">
                                <img :src="$asseturl+'frontend/img/android.png'" alt="Home">
                                <img :src="$asseturl+'frontend/img/TaskA.png'" alt="Home" class="activeimg">
                                <p>App</p>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 p-0" style="width: 20% !important;">
                        <div class="menu">
                            <router-link :to="{name:'Useraccount'}">
                                <img :src="$asseturl+'frontend/img/profile.png'" alt="Home">
                                <img :src="$asseturl+'frontend/img/AccountA.png'" alt="Home" class="activeimg">
                                <p>Account</p>
                            </router-link>
                        </div>
                    </div>


                </div>
            </div>
        </section> -->


</template>
<script>
  export default {
    created() {

        // this.createlink('frontend/css/bootstrap.min.css');
        this.createlink('frontend2/css/chunk-elementUI-228e3e39.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/app-017397ff.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.1548.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.2384.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.2619.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.9174.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.5414.713245b3.css?ver=1.0.2');
        this.createlink('frontend2/css/chunk.8726.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.8547.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.6430.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.1709.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.7406.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.6743.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.6158.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.2910.713245b3.css?ver=1.0.1');
        this.createlink('frontend2/css/chunk.3737.713245b3.css?ver=1.0.1');

        // this.createscript('frontend/js/bootstrap.bundle.min.js');
        // this.createscript('frontend/js/bootstrap.min.js');
    },
    data(){
        return {

        }},
    watch: {
        '$route': {
            handler(newValue, oldValue) {
                window.scrollTo(0,0);
            },
            deep: true
        }
    },
    mounted() {


    },
    methods: {
        createlink(url=''){
            let recaptchaScript = document.createElement('link')
            recaptchaScript.setAttribute('href', this.$asseturl+url)
            recaptchaScript.setAttribute('rel', 'stylesheet')
            document.head.appendChild(recaptchaScript)
        },
        createscript(url=''){
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', this.$asseturl+url)
            document.body.appendChild(recaptchaScript)
        }
    }
  }
</script>
<style>
.col-6.amount_item span {
  border: 2px solid #e8ba31;
  display: block;
  text-align: center;
  margin: 6px 0px;
  padding: 4px 3px;
  cursor: pointer;
}
</style>
