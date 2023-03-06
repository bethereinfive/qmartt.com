<template>
    <div>



        <div data-v-43965e0e="" class="container">
                <div data-v-43965e0e="" id="me">
                    <div data-v-43965e0e="" class="top">
                        <div data-v-43965e0e="" id="user_message">
                            <div data-v-43965e0e="" class="left">
                                <div data-v-43965e0e="" id="avatar">
                                    <img data-v-43965e0e="" :src="$asseturl+'frontend2/static/img/smallLogo.png'" alt="" />
                                </div>
                                <div data-v-43965e0e="" id="message">
                                    <p data-v-43965e0e="">{{ row.user.mobile }}</p>
                                    <p data-v-43965e0e="" style="color:white">{{ row.user.username }}</p>
                                </div>
                            </div>


                            <!-- <div data-v-43965e0e="" class="ic">

                                <div data-v-43965e0e="" class="customer">
                                    <a data-v-43965e0e="" target="_blank" href="https://t.me/MidValleyCustomer1" class="item">
                                        <img
                                            data-v-43965e0e=""
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA81BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9YqtblAAAAUHRSTlMABAgMEBMUFxgbHB8gIyQnKCssLzAzNDg8P0BDR0hMUFNUV1hbXF9gY2doa29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+1jt2t4AAAN3SURBVBgZ7cFtW9pmAIbhK4S5qGiZUqrdaNfWl7YDhCZACKwQiYBI8tz//9cshGMOK0jrsY89T366d3DRGkzupLvJoHVxwA/Yb070wLi5z/c57hulJn238flzw+1PlDL9Y7bbDSSZ/rnDPee8byQFu2xxNpfmjR0y1v6+RWanMZfmZzwl15GMlwfs9+1RrFQ8ar+3gbxnpI7FRnYo3ZSAl0GiFUnwEiiNpdBmAzuUAhteDJSaduuXb95c1rtTpQYvwO5Joc1auVDywKob6e5LkXvFL3PJ1AFPCi3WaUse2AMprud4IFePpYENntRmjTOpB04kDfd4ZG8oRQ70pTMe2ZlrYmOPJM9iDcuTrm3sie52+JYvU4a+dMUGDakPr4x8vnFk1IKa1GajtlSFtkyRhwLN8xRiXVtsZI0U7+EkCnjASeSBr6TIE4pGPnhKHFZVpT0OjTye5MkcUpCqrAo1BFeJw5OcRC6EClmRl6owU5cturqFmpTnPxXpiJJUYYuKVKIkVfjXr9VrxVCTsdnCNqpCouvqL2Q+xpIi6Chiq0gduJEUfyR1pYUeDBWwVU9D+FsLVSgZLfgwVputOroBXwumRFcZH6ZqsFVDU/CV8Zkq48NYbbbq6AZ8ZaZoqQdDBSxYrGWxEGgIfS1xq8wIfEWkynF0yiOnUVwmFakDI2VuCZSZQ02JDbyVFP21y4rdaiTpLWAb1SBWpsuJlo4oSxUgN9NC1Pr0+/H+/vEfn1qRFmY5oCKVONLSCXjKfIKZuqSutNYVqa5mUFXGA6ymUWoArhIHyI21xjgHOIlcGCplmhYLRTe8k8lzaNQkVY71SFwi5cocsifNQrfIPed2ZIGv5JDUm0TfSCqkDhP54CpxeKyQKLRIvZrpgdkrUlaouEB+ri7r1KQWC/mOVnTyLLSkGrRkjljrq1QjU3DHyozdApma9BVeGnVYz44k12LJef3u3WuHJcuTIhv7RnOHDZyxNNjlkd2BdONAIL1jI3sgzWs5HsjV5tLABk/yeYLVMNKsecC9g+ZMMlcWeNLQ4klHQ6Wm3drF6elFrTtValCEXFe6ttnmdS/RiqR3AvwWSaHNd9j54EexUnHU+ZAH8k0j+TbfLV8o5OHPW43f12fS/JIfVTZaCvb4YS1l+mWeoa2FLzzLiVKmxPOcz3T7lmfb4af/xT+qmA0NbiF6sgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div> -->
                        </div>



                        <div data-v-43965e0e="" class="block2">
                            <div data-v-43965e0e="" class="total">
                                <p data-v-43965e0e=""><span data-v-43965e0e="">৳</span>{{ row.user.balance }}</p>
                                <p data-v-43965e0e="">Total amount</p>
                            </div>
                            <div data-v-43965e0e="" class="btns">
                                <a href="/dashboard/user/Recharge"  data-v-43965e0e="" class="btn">Recharge</a>
                                <router-link :to="{name:'Withdraw'}" data-v-43965e0e="" class="btn">Withdraw</router-link>
                            </div>
                        </div>

                        <div data-v-43965e0e="" class="block3">
                            <div data-v-43965e0e="" class="left">
                                <p data-v-43965e0e="">Join us customer service</p>
                                <!-- <p data-v-43965e0e="">Don't miss the tips to yield high income</p> -->
                            </div>
                            <a target="_blank" :href="settings.telesupport2" data-v-43965e0e="" class="btn">Join Now</a>
                        </div>

                        <!-- <div data-v-43965e0e="" class="behalf">
                            <p data-v-43965e0e="" class="p1"><span data-v-43965e0e="">Top up for your friends</span></p>
                            <div data-v-43965e0e="" class="p2">
                                <p data-v-43965e0e="">Get <span data-v-43965e0e="">5%</span> cash bonus on top-up amount</p>
                            </div>
                            <div data-v-43965e0e="" class="go">GO</div>
                        </div> -->
                    </div>
                    <!-- <a data-v-43965e0e="" href="/page?title=Welcome&amp;src=https%3A%2F%2Fserviceim.live%2Fkefu%2F6315c815d19ff%26u_cust_id%3D3725086%26u_cust_name%3D_3725086&amp;pageName=me" class="kfBanner">
                        <i data-v-43965e0e="" class="kfIcon"></i>
                        <p data-v-43965e0e="">Receive <span data-v-43965e0e="" class="double">double</span> earings</p>
                    </a> -->
                    <!---->
                    <div data-v-43965e0e="" class="links">


                        <router-link data-v-43965e0e="" :to="{name:'bankAccount'}" class="item"><p data-v-43965e0e="">Personsal info</p></router-link>

                        <router-link data-v-43965e0e="" :to="{name:'memberSystem'}" class="item">
                            <p data-v-43965e0e="">Membership system</p>
                            <span data-v-43965e0e="" class="new_cls">{{ row.plans.name }}</span>
                        </router-link>
                        <!-- <div data-v-43965e0e="" class="item"><p data-v-43965e0e="">Invite friends to double the income</p></div> -->
                        <!-- <a data-v-43965e0e="" href="/page?title=City%20partern&amp;src=https%3A%2F%2Fh5.webfxx.com%2FcityPartner%2Findex.html%3Flang%3Den-GB" class="item">
                            <p data-v-43965e0e="">City partern</p>
                            <span data-v-43965e0e="" class="new_cls">New</span>
                        </a> -->
                        <router-link data-v-43965e0e="" :to="{name:'orders'}" class="item"><p data-v-43965e0e="">Order history</p></router-link>
                        <router-link data-v-43965e0e="" :to="{name:'accountDetails'}" class="item"><p data-v-43965e0e="">Details of invoice</p></router-link>
                        <router-link data-v-43965e0e="" :to="{name:'WithdrawHistory'}" class="item"><p data-v-43965e0e="">Top up and withdraw</p></router-link>
<!--
                        <div data-v-43965e0e="" class="item" style="">
                            <p data-v-43965e0e="" class="showlangClsBox" style="display: none;"><span data-v-43965e0e="" class="showlangCls showlangClsActive">English(U.K)</span><span data-v-43965e0e="" class="showlangCls">বাংলা</span></p>
                            <p data-v-43965e0e="" class="showNameCls">Language choice<span data-v-43965e0e="">English(U.K)</span></p>
                        </div> -->

                        <router-link data-v-43965e0e="" :to="{name:'RechangePass'}" class="item"><p data-v-43965e0e="">Change the password</p></router-link>




                        <a v-if="settings.telegroup" data-v-43965e0e=""  :href="settings.telegroup" class="item"><p data-v-43965e0e="">Official Telegram Group</p></a>
                        <a v-if="settings.telesupport1" data-v-43965e0e=""  :href="settings.telesupport1" class="item"><p data-v-43965e0e="">Official Telegram Channel</p></a>
                        <a v-if="settings.telesupport2" data-v-43965e0e=""  :href="settings.telesupport2" class="item"><p data-v-43965e0e="">Customer Service</p></a>
                        <a v-if="settings.telesupport3" data-v-43965e0e=""  :href="settings.telesupport3" class="item"><p data-v-43965e0e="">Customer Service</p></a>

                        <router-link data-v-43965e0e="" :to="{name:'invite'}" class="item"><p data-v-43965e0e="">Invite</p></router-link>

                        <!-- <a data-v-43965e0e="" href="/page?title=Introduction&amp;src=https%3A%2F%2Fh5.webfxx.com%2Fcertificate%2Findex.html" class="item"><p data-v-43965e0e="">Introduction</p></a> -->
                        <!-- <a data-v-43965e0e="" href="/page?title=Play%20guide&amp;src=https%3A%2F%2Fh5.webfxx.com%2FhowToPlay%2Findex.html" class="item"><p data-v-43965e0e="">Play guide</p></a> -->
                        <!-- <a data-v-43965e0e="" href="#" class="item"><p data-v-43965e0e="">About us</p></a> -->
                        <router-link :to="{name:'logout'}" data-v-43965e0e="" class="item"><p data-v-43965e0e="">Sign out</p></router-link>
                    </div>
                </div>


            </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            settings:{},
              row: {
                plans:{},
                deposit:{},
                depositamount:0,
                user:{},
                withdraw:{},
                withdrawamount:0,
                refercount:0,
            },
        }
    },
    methods: {
          async getData() {
             var id = localStorage.getItem('userid');
             var resN = await this.callApi('get',`/api/admin/setting`,[])
              this.settings = resN.data

            var res = await this.callApi('get', `/api/admin/user/${id}`, []);
            this.row = res.data;

        },



    },
    mounted() {
            this.getData();

    },
}
</script>
