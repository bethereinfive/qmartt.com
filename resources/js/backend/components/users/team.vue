<template>


        <div data-v-58cf559a="" class="container">
            <div data-v-43965e0e="" id="me">
                    <div data-v-43965e0e="" class="top">
        <div data-v-890639a6="" data-v-0e5e6fd2="" class="title-bar wrap" style="background: transparent;">
                    <span data-v-890639a6="" class="back">
                        <img
                            data-v-890639a6=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAABDlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v3yHCAAAAWXRSTlMAAgMFBggJCwwPEBITFRYaICEnKy0xNDY6Oz1DSElSWFpbYWVpcHJzdnp8fYGCiIyTlp2fp6+ws7e4vsDFyMzP0dLT1dfb3OPk6Ons7/Hy8/T19/n6+/z9/poeTkQAAADoSURBVBgZ3cHZIkIBFAXQXbiS4eZGKJnLPCdDEhIlUyF3//+P2H9wzosXa+GfSJ/3zgJ4TNyS3IRD2KSUYcs8Uq4DmKInytUoTDMdysUITLkupToE08IrpZKEqfBBOU3AVOxTjmFb+qIcwrY6oOzDtv5DMi7DVopJxhuw7VIGa7DtUL6X4fBOWYHHHaWWgkP2mVIfg0PUptyMwyHTotxPwSFsUh5COEw2KK1pOKTrlHYEh1SN0snCIbikdGfhMFylvMzBIVmhvOXhkDih9ArwOKL0i/A4oHzm4LFN2YNLieQifOa38vhrv41dP5FpuPPwAAAAAElFTkSuQmCC"
                            alt=""
                            style="display: none;"
                        />
                    </span>
                    <p data-v-890639a6="" class="title">team</p>
                    <span data-v-890639a6="" class="right-top-btn"><span data-v-890639a6=""></span><img data-v-890639a6="" src="" alt="" style="display: none;" /></span>
                </div>
                <div data-v-0e5e6fd2="" id="team">
                    <div data-v-0e5e6fd2="" class="top">
                        <div data-v-0e5e6fd2="" class="message">
                            <div data-v-0e5e6fd2="" class="left">
                                <!-- <p data-v-0e5e6fd2=""><span data-v-0e5e6fd2="" id="code">{{ row.user.username }}</span><span data-v-0e5e6fd2="" data-clipboard-target="#code" class="copybtn">Copy</span></p> -->
                                <p data-v-0e5e6fd2="">
                                    <span data-v-0e5e6fd2="" id="link">{{ ref }}</span><span data-v-0e5e6fd2="" data-clipboard-target="#link" class="copybtn" @click="copyref">Copy</span>
                                </p>
                            </div>
                            <div data-v-0e5e6fd2="" class="right">
                                <p data-v-0e5e6fd2=""><span data-v-0e5e6fd2="">First Level Friends:</span><span data-v-0e5e6fd2="">{{ lavel[0].comission }}%</span></p>
                                <p data-v-0e5e6fd2=""><span data-v-0e5e6fd2="">Second Level Friends:</span><span data-v-0e5e6fd2="">{{ lavel[1].comission }}%</span></p>
                                <p data-v-0e5e6fd2=""><span data-v-0e5e6fd2="">Third Level Friends:</span><span data-v-0e5e6fd2="">{{ lavel[2].comission }}%</span></p>
                            </div>
                        </div>
                        <!-- <div data-v-0e5e6fd2="" class="cadenPH">
                            <div data-v-0e5e6fd2="" class="content">
                                <div data-v-0e5e6fd2="" class="swiper-container swiper-container-initialized swiper-container-vertical">
                                    <div data-v-0e5e6fd2="" class="swiper-wrapper" style="transition-duration: 300ms; transform: translate3d(0px, -1.00663e8px, 0px);">
                                        <p data-v-0e5e6fd2="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="99" style="height: 3.35544e7px;">130*****379 obtains team commission of ৳ 50.96</p>

                                    </div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div data-v-0e5e6fd2="" class="total">
                        <div data-v-0e5e6fd2="" class="data">
                            <div data-v-0e5e6fd2="" class="item">
                                <p data-v-0e5e6fd2="">{{ row.total_member }}</p>
                                <p data-v-0e5e6fd2="">Number of team members</p>
                            </div>
                            <div data-v-0e5e6fd2="" class="item">
                                <p data-v-0e5e6fd2=""><span data-v-0e5e6fd2="">৳</span>{{ row.total_ActiveMember_deposit }}</p>
                                <p data-v-0e5e6fd2="">Total team Recharge</p>
                            </div>
                            <div data-v-0e5e6fd2="" class="item">
                                <p data-v-0e5e6fd2=""><span data-v-0e5e6fd2="">৳</span>{{ row.refer_commisition }}</p>
                                <p data-v-0e5e6fd2="">Total team commission</p>
                            </div>
                        </div>
                    </div>
                    <div data-v-0e5e6fd2="" class="lvs">




                        <div data-v-0e5e6fd2="" class="item">
                            <div data-v-0e5e6fd2="" class="left">
                                <span data-v-0e5e6fd2="" class="lv"></span>
                                <div data-v-0e5e6fd2="" class="left2">
                                    <div data-v-0e5e6fd2="" class="left22">
                                        <div data-v-0e5e6fd2="" class="bonus">
                                            <p data-v-0e5e6fd2="">0</p>
                                            <p data-v-0e5e6fd2="">Commission</p>
                                        </div>
                                        <div data-v-0e5e6fd2="" class="size">
                                            <p data-v-0e5e6fd2="">0</p>
                                            <p data-v-0e5e6fd2="">Team size</p>
                                        </div>
                                    </div>
                                    <div data-v-0e5e6fd2="" class="cmsRate"><span data-v-0e5e6fd2="">Commission rate</span><span data-v-0e5e6fd2="">{{ lavel[0].comission }}%</span></div>
                                </div>
                            </div>
                            <!-- <a data-v-0e5e6fd2="" href="/level?level=1" class=""><div data-v-0e5e6fd2="" class="details">Details</div></a> -->
                        </div>
                        <div data-v-0e5e6fd2="" class="item">
                            <div data-v-0e5e6fd2="" class="left">
                                <span data-v-0e5e6fd2="" class="lv"></span>
                                <div data-v-0e5e6fd2="" class="left2">
                                    <div data-v-0e5e6fd2="" class="left22">
                                        <div data-v-0e5e6fd2="" class="bonus">
                                            <p data-v-0e5e6fd2="">0</p>
                                            <p data-v-0e5e6fd2="">Commission</p>
                                        </div>
                                        <div data-v-0e5e6fd2="" class="size">
                                            <p data-v-0e5e6fd2="">0</p>
                                            <p data-v-0e5e6fd2="">Team size</p>
                                        </div>
                                    </div>
                                    <div data-v-0e5e6fd2="" class="cmsRate"><span data-v-0e5e6fd2="">Commission rate</span><span data-v-0e5e6fd2="">{{ lavel[1].comission }}%</span></div>
                                </div>
                            </div>
                            <!-- <a data-v-0e5e6fd2="" href="/level?level=2" class=""><div data-v-0e5e6fd2="" class="details">Details</div></a> -->
                        </div>
                        <div data-v-0e5e6fd2="" class="item">
                            <div data-v-0e5e6fd2="" class="left">
                                <span data-v-0e5e6fd2="" class="lv"></span>
                                <div data-v-0e5e6fd2="" class="left2">
                                    <div data-v-0e5e6fd2="" class="left22">
                                        <div data-v-0e5e6fd2="" class="bonus">
                                            <p data-v-0e5e6fd2="">0</p>
                                            <p data-v-0e5e6fd2="">Commission</p>
                                        </div>
                                        <div data-v-0e5e6fd2="" class="size">
                                            <p data-v-0e5e6fd2="">0</p>
                                            <p data-v-0e5e6fd2="">Team size</p>
                                        </div>
                                    </div>
                                    <div data-v-0e5e6fd2="" class="cmsRate"><span data-v-0e5e6fd2="">Commission rate</span><span data-v-0e5e6fd2="">{{ lavel[2].comission }}%</span></div>
                                </div>
                            </div>
                            <!-- <a data-v-0e5e6fd2="" href="/level?level=3" class=""><div data-v-0e5e6fd2="" class="details">Details</div></a> -->
                        </div>



                        <team-member></team-member>






                    </div>
                </div>
                <div data-v-0e5e6fd2="" class="join"><img data-v-0e5e6fd2="" src="static/img/right_en-GB.c670d888.gif" alt="" /></div>


                <div class="copyPopup" v-if="popup">
                    <span> Refer link copied success</span>
                </div>

<!--
        <section id="topbar">
            <div class="title">
                <a href="javascript:void(0)" @click="$router.go(-1)"><i class="fa fa-angle-left"></i></a>
                <p>Team Report</p>
            </div>
        </section>

        <section id="listmenu">
            <div class="container-fluid">
                <div class="row mt-5">
                    <div class="col-md-6">


                        <router-link :to="{ name: 'teamdetails' }">
                            <div class="card">
                                <div class="card-body">
                                    Team details
                                </div>
                            </div>
                        </router-link>


                    </div>
                    <div class="col-md-6">


                        <router-link :to="{ name: 'teamMember' }">
                            <div class="card">
                                <div class="card-body">
                                    Team members
                                </div>
                            </div>
                        </router-link>


                    </div>

                </div>
            </div>
        </section> -->


    </div>
    </div>
    </div>
</template>

<script>


import TeamMember from './teamMember.vue';

export default {
    components: { TeamMember},
    data(){
        return {
            row:{},
            lavel:
                [{"id":1,"name":"Level1","task_commisition":"8","comission":"10","created_at":null,"updated_at":"2022-08-30T19:50:53.000000Z"},{"id":2,"name":"Level2","task_commisition":"4","comission":"5","created_at":null,"updated_at":"2022-08-30T19:51:11.000000Z"},{"id":3,"name":"Level3","task_commisition":"2","comission":"2","created_at":null,"updated_at":"2022-08-30T19:51:19.000000Z"}],
                ref: 'https://midvalleyy.com/register',

            popup:false
        }
    },
    methods: {
        async lavellist(){
            var res = await this.callApi('get',`/api/admin/level`,[]);
            this.lavel = res.data;

            var id = localStorage.getItem('userid');
            var resD = await this.callApi('get',`/api/front/teamdetails?id=${id}`,[]);
            this.row = resD.data;
            this.ref = 'https://midvalleyy.com/register?ref='+resD.data.user.username
// console.log(window.location)
        },


        copyref() {


            navigator.clipboard.writeText(this.ref);
            this.popup = true

            setTimeout(() => {
                this.popup = false
            }, 1000);
            }
    },
    mounted() {
        this.lavellist();
    },
}
</script>

<style scoped>

    .copyPopup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: #000000b5;
      padding: 27px;
    }
    .copyPopup span {
      display: block;
      font-size: 25px;
      color: white;
    }
    </style>
