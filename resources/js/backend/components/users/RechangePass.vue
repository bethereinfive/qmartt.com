<template>
    <div>
        <div data-v-20854b52="" class="container">
                <div data-v-890639a6="" data-v-20854b52="" class="title-bar wrap" style="background: linear-gradient(var(--button1) 0%, var(--button2) 100%);">
                    <span data-v-890639a6="" class="back">
                        <img
                            data-v-890639a6=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAABDlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v3yHCAAAAWXRSTlMAAgMFBggJCwwPEBITFRYaICEnKy0xNDY6Oz1DSElSWFpbYWVpcHJzdnp8fYGCiIyTlp2fp6+ws7e4vsDFyMzP0dLT1dfb3OPk6Ons7/Hy8/T19/n6+/z9/poeTkQAAADoSURBVBgZ3cHZIkIBFAXQXbiS4eZGKJnLPCdDEhIlUyF3//+P2H9wzosXa+GfSJ/3zgJ4TNyS3IRD2KSUYcs8Uq4DmKInytUoTDMdysUITLkupToE08IrpZKEqfBBOU3AVOxTjmFb+qIcwrY6oOzDtv5DMi7DVopJxhuw7VIGa7DtUL6X4fBOWYHHHaWWgkP2mVIfg0PUptyMwyHTotxPwSFsUh5COEw2KK1pOKTrlHYEh1SN0snCIbikdGfhMFylvMzBIVmhvOXhkDih9ArwOKL0i/A4oHzm4LFN2YNLieQifOa38vhrv41dP5FpuPPwAAAAAElFTkSuQmCC"
                            alt=""
                        />
                    </span>
                    <p data-v-890639a6="" class="title">Change the password</p>
                    <span data-v-890639a6="" class="right-top-btn"><span data-v-890639a6=""></span><img data-v-890639a6="" src="" alt="" style="display: none;" /></span>
                </div>
                <div data-v-20854b52="" id="ForgetPassword">
                    <div data-v-20854b52="" id="lr">

                        <div data-v-20854b52="" class="block2">
                            <div data-v-20854b52="" class="form register">
                                <div data-v-20854b52="" class="title">Reset password</div>
                                <div data-v-20854b52="" class="ltitle">To enhance the security protection of your money, it is suggested to use a common password.</div>


                                <div data-v-20854b52="" class="item">
                                    <input data-v-20854b52="" name="password" id="password"  v-model="accountPass.old" autocomplete="off" placeholder="Please enter a old password" type="password" />
                                    <!-- <div data-v-20854b52="" class="togglePasswordBtn"></div> -->
                                </div>


                                <div data-v-20854b52="" class="item">
                                    <input data-v-20854b52="" name="password" id="password"  v-model="accountPass.newpass" autocomplete="off" placeholder="Please enter a new password" type="password" />
                                    <!-- <div data-v-20854b52="" class="togglePasswordBtn"></div> -->
                                </div>


                                <div data-v-20854b52="" class="item">
                                    <input data-v-20854b52="" name="passwordV" id="passwordV"  v-model="accountPass.confirm" autocomplete="off" placeholder="Enter the password again" type="password" />
                                    <!-- <div data-v-20854b52="" class="togglePasswordBtn"></div> -->
                                </div>
                                <div data-v-20854b52="" class="tips" style="display: none;"></div>
                            </div>
                        </div>
                    </div>
                    <div data-v-20854b52="" class="form register"><div data-v-20854b52="" id="resetPasswordBtn" @click="accountPassChange" style="cursor:pointer" class="btn">Confirm</div></div>
                </div>
            </div>





<!--
        <section id="topbar">
            <div class="title">
                <a href="javascript:void(0)" @click="$router.go(-1)"><i class="fa fa-angle-left"></i></a>
                <p>Password management</p>
            </div>
        </section>

        <section id="account-form">

                <div class="long-title">
                    <p>Change the login password</p>
                </div>

                <div class="container-fluid">
                     <form @submit.stop.prevent="accountPassChange">
                    <label> Old password:</label>
                    <input type="password" class="form-control" v-model="accountPass.old" required placeholder="Please enter the old password">


                    <label>New password:</label>
                    <input type="password" class="form-control" v-model="accountPass.newpass" required placeholder="Please enter new login password">


                    <label>Confirm password:</label>
                    <input type="password" class="form-control" v-model="accountPass.confirm" required placeholder="Please enter new password again">

                    <input type="submit" class="savedata" value="Confirm to modify the login password">

</form>
                </div>
                <div class="long-title">
                    <p>Change withdrawal password</p>
                </div>
                <div class="container-fluid">
<form @submit.stop.prevent="withdrawPassChange">
                    <label>Please enter old withdrawal password (উইথড্র  পাসওয়ার্ড দিয়ে না থাকলে old passward হিসেবে 123456 ব্যবহার করুন  )</label>
                    <input type="password" class="form-control" v-model="withdarawPass.old" required placeholder="Please enter old withdrawal password">


                    <label>Please enter new withdrawal password</label>
                    <input type="password" class="form-control" v-model="withdarawPass.newpass" required placeholder="Please enter new withdrawal password">

                    <input type="submit" class="savedata" value="Confirm to modify the withdrawal password">
</form>
                </div>



        </section> -->


    </div>
</template>

<script>
export default {
    data() {
        return {
            accountPass: {
                old: '',
                newpass: '',
                confirm: '',
            },
            withdarawPass: {
                old: '',
                newpass: ''
            }
        }
    },
    methods: {


        async accountPassChange(){




            if(this.accountPass.newpass==''&& this.accountPass.confirm==''){
                Notification.customError(`New Password and confirm password cant be empty`);
            }else{
                if(this.accountPass.newpass===this.accountPass.confirm){
                    var id = localStorage.getItem('userid');
                    var res = await this.callApi('post', `/api/admin/user/password/change?id=${id}&type=account`, this.accountPass);
                    if(res.data==0){
                        Notification.customError(`Old Password cant be macth`);
                    }else{
                        Notification.customSuccess(`Password has been Updated`);
                        this.$router.push({name:'Useraccount'});
                    }
                }else{
                    Notification.customError(`New Password and confirm password cant be macth`);
                }
            }





        },


        async withdrawPassChange(){
            var id = localStorage.getItem('userid');
            var res = await this.callApi('post', `/api/admin/user/password/change?id=${id}&type=withdraw`, this.withdarawPass);

                if(res.data==0){
                    Notification.customError(`Old Password cant be macth`);
                }else{
                    Notification.customSuccess(`Password has been Updated`);
                    this.$router.push({name:'Useraccount'});

                }

        }


    },


}
</script>
<style scoped>
input#password, input#passwordV {
    border-bottom: 1px solid var(--defaltColor) !important;
    border-radius: 0 !important;
}
</style>
