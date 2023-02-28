<template>
    <div>

        <div data-v-ca518944="" class="container">
                <div data-v-ca518944="" class="titlebar">
                    <img
                        data-v-ca518944=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAABDlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v3yHCAAAAWXRSTlMAAgMFBggJCwwPEBITFRYaICEnKy0xNDY6Oz1DSElSWFpbYWVpcHJzdnp8fYGCiIyTlp2fp6+ws7e4vsDFyMzP0dLT1dfb3OPk6Ons7/Hy8/T19/n6+/z9/poeTkQAAADoSURBVBgZ3cHZIkIBFAXQXbiS4eZGKJnLPCdDEhIlUyF3//+P2H9wzosXa+GfSJ/3zgJ4TNyS3IRD2KSUYcs8Uq4DmKInytUoTDMdysUITLkupToE08IrpZKEqfBBOU3AVOxTjmFb+qIcwrY6oOzDtv5DMi7DVopJxhuw7VIGa7DtUL6X4fBOWYHHHaWWgkP2mVIfg0PUptyMwyHTotxPwSFsUh5COEw2KK1pOKTrlHYEh1SN0snCIbikdGfhMFylvMzBIVmhvOXhkDih9ArwOKL0i/A4oHzm4LFN2YNLieQifOa38vhrv41dP5FpuPPwAAAAAElFTkSuQmCC"
                        alt=""
                        class="go_icon"
                    />

                </div>


                <div data-v-11b69460="" data-v-ca518944="" class="container" style="">
                    <div data-v-11b69460="" id="rw">
                        <div data-v-11b69460="" class="nav2">
                            <div data-v-11b69460="" class="nav3"><span data-v-11b69460="" @click="tabs('topup')" style="cursor: pointer;" :class="{ 'on': topupTab }" >Top up</span><span style="cursor: pointer;" :class="{ 'on': withdrawTab }"  @click="tabs('Withdraw')" data-v-11b69460="" class="">Withdraw</span></div>
                        </div>


                        <div data-v-11b69460="" id="details" v-if="topupTab">
                            <div data-v-11b69460="" class="lists">
                                <div data-v-11b69460="">


                                    <div data-v-11b69460="" class="list tr isi" v-for="Withrech in Withrow" :key="'rech'+Withrech.id">
                                        <div data-v-11b69460="" class="left"><span data-v-11b69460="">{{ Withrech.status }}</span><span data-v-11b69460="">{{ dateformatglobal(Withrech.created_at)[6] }}</span></div>
                                        <div data-v-11b69460="" class="right">
                                            <span data-v-11b69460="">৳{{ Withrech.amount }}</span>
                                            <div data-v-11b69460="" class="op" style="display: none;"><div data-v-11b69460="" class=""></div></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>



                        <div data-v-11b69460="" id="details" v-else-if="withdrawTab">
                            <div data-v-11b69460="" class="lists">
                                <div data-v-11b69460="">

                                    <div data-v-11b69460="" class="list tr isi" v-for="rech in row" :key="'rech'+rech.id">
                                        <div data-v-11b69460="" class="left"><span data-v-11b69460="">{{ rech.status }}</span><span data-v-11b69460="">{{ dateformatglobal(rech.created_at)[6] }}</span></div>
                                        <div data-v-11b69460="" class="right">
                                            <span data-v-11b69460="">৳{{ rech.amount }}</span>
                                            <div data-v-11b69460="" class="op" style="display: none;"><div data-v-11b69460="" class=""></div></div>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        </div>



                    </div>

                    <!----><!---->
                </div>
            </div>



<!--

        <section id="topbar">
            <div class="title">
                <a href="javascript:void(0)" @click="$router.go(-1)"><i class="fa fa-angle-left"></i></a>
                <p>Withdraw History</p>
            </div>
        </section>




        <section id="listmenu">


            <div role="feed" class="van-list" aria-busy="true">

                <div class="recordDiv p-3" v-for="rech in row" :key="'rech'+rech.id">
                    <h3>Withdraw amount： {{ rech.amount }}</h3>
                    <p>Order Number： {{ rech.trx }}</p>
                    <p>Withdraw status： {{ rech.status }}</p>
                    <p>Date： {{ dateformatglobal(rech.created_at)[6] }}</p>
                    <p>Remarks： - </p>
                </div>

            </div>

        </section> -->

    </div>
</template>

<script>
export default {
    data(){
        return {
              row: {},
              Withrow: {},
              topupTab:true,
              withdrawTab:false,

        }
    },
    methods: {


        tabs(name){
            if(name=='topup'){
                if(this.topupTab){
                    if(!this.withdrawTab){

                    }else{

                        this.topupTab=false;
                    }
                    // this.withdrawTab=true
                }else{

                    this.topupTab=true

                }
                this.withdrawTab=false
            }else

            if(name=='Withdraw'){



                if(this.withdrawTab){

                    if(this.withdrawTab){

                    }else{
                        this.withdrawTab=false

                    }

                    // this.topupTab=true;
                }else{
                    this.withdrawTab=true

                }
                this.topupTab=false
            }

            },

          async getData() {
            var id = localStorage.getItem('userid');
            var res = await this.callApi('get', `/api/admin/withdrawal?id=${id}`, []);
            this.row = res.data;
            var Withrowres = await this.callApi('get', `/api/admin/deposit?id=${id}`, []);
            this.Withrow = Withrowres.data;
        },

    copyURL() {
      var Url = this.$refs.mylink;
      Url.innerHTML = window.location.href;
      console.log(Url.innerHTML)
      Url.select();
      document.execCommand("copy");
    }

    },
    mounted() {
            this.getData();

    },
}
</script>
