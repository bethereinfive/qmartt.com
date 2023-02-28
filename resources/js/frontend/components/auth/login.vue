<template>


<div data-v-8c1d3ba0="" class="container">
                <!-- <div data-v-8c1d3ba0="" class="selectLang">
                    <span data-v-8c1d3ba0="">English(U.K)</span><i data-v-8c1d3ba0=""></i>
                </div> -->
                <div data-v-8c1d3ba0="" id="login">
                    <p data-v-8c1d3ba0="" class="title">Welcome Mid Valleyy</p>
                    <p data-v-8c1d3ba0="" class="ltitle">The platform that yields record high income</p>
                    <div data-v-8c1d3ba0="" class="main">
                        <div data-v-8c1d3ba0="" class="nav">
                            <!-- <div data-v-8c1d3ba0="" class="item on">Phone number</div> -->
                            <!-- <div data-v-8c1d3ba0="" class="item">E-mail</div> -->
                        </div>
                        <div data-v-8c1d3ba0="" class="form">
                            <div data-v-8c1d3ba0="" class="item phone"><span data-v-8c1d3ba0="">+880</span><input data-v-8c1d3ba0="" v-model="form.mobile" type="text" name="phone" id="phone" placeholder="Phone number" autocomplete="off" /></div>
                            <!---->
                            <div data-v-8c1d3ba0="" class="item">
                                <input data-v-8c1d3ba0="" name="password" placeholder="Password" v-model="form.password" autocomplete="off" type="password" />
                                <div data-v-8c1d3ba0="" class="togglePasswordBtn"></div>
                            </div>
                        </div>
                        <a data-v-8c1d3ba0="" href="/page?title=Welcome&amp;src=https%3A%2F%2Fserviceim.live%2Fkefu%2F6315c50f124b4%3Flang%3Den-GB" class="forgetPassword">Forget password?</a>
                        <div data-v-8c1d3ba0="" id="loginbtn"  v-if="loadLogin">Please wait....</div>
                        <div data-v-8c1d3ba0="" id="loginbtn" v-else  @click='login'>Sign in</div>

                        <div data-v-8c1d3ba0="" class="register"><router-link :to="{name:'register'}" data-v-8c1d3ba0="" class="">Register</router-link></div>
                        <div data-v-8c1d3ba0="" class="register"><a :href="$asseturl+'Mid_Valley.apk'" data-v-8c1d3ba0="" class="">Download Our Android app</a></div>

                    </div>
                </div>
            </div>








<!--
 <section id="bigbg">

    <div class="form login">
        <div class="text-center">

            <img style="width: 46px;float: center;" :src="$asseturl+'frontend/img/logos.png'" alt="">
        </div>

        <h2 class="text-center" style="font-size:30px">Welcome</h2>
        <h2 class="text-center mb-5">Dream Land</h2>
        <form @submit.prevent='login'>
           <div class="input"> <input type="tel" placeholder="Enter phone number" v-model="form.mobile" required><span><img :src="$asseturl+'frontend/img/user.png'" ></span></div>
           <div class="input"> <input type="password" placeholder="Enter Password" v-model="form.password" required><span><img :src="$asseturl+'frontend/img/pass.png'" ></span></div>



           <input id="form-submit" type="button" v-if="loadLogin" value="Looding....."
           class="submit">
            <input id="form-submit" type="submit" v-else value="LOGIN NOW" class="submit">




<router-link :to="{name:'register'}" class="reg">Register</router-link>
        </form>
    </div>
</section> -->




</template>

<script>
export default {

	created(){

        this.addcountry();
        this.countryList();
	},

	data () {
		return {

            emailLogin: "",
            passwordLogin: "",
            emailReg: "",
            passwordReg: "",
            confirmReg: "",
            emptyFields: false,
            loading: false,
			form: {
				mobile: '',
				password: ''
			},
			country:'',
			errors:{},
			codes:{},
            loadLogin:false
		}
	},
	methods:{


        async countryList() {
            var res = await this.callApi('get', `${this.$asseturl}CountryCodes.json`, []);
            // console.log(res)
            this.codes = res.data
        },
        async addcountry() {
            this.form.mobile = this.country
        },

        login() {
            this.loadLogin = true

            if (this.form.mobile == "" || this.form.password == "") {
                Notification.customError('All field are required!');
                this.loadLogin = false
                this.emptyFields = true;
            } else {

                axios.post('/login', this.form)
                    .then(res => {


                        if (res.data == 0) {
                            Notification.customError('Please Enter Valid Phone Number and Password');
                            this.loadLogin = false
                        } else if (res.data == 422) {
                            Notification.customError('Your Account Has Been Banded!');
                            this.loadLogin = false
                        } else if (res.data == 444) {
                            Notification.customError('You Cant Login Multiple account same device!');
                            this.loadLogin = false
                            localStorage.setItem('dmdevice',1)
                        } else {




                            localStorage.setItem('dmdevice',1)
                            User.responseAfterLogin(res)
                            if (res.data.role == 'admin') {
                                window.location.href = '/dashboard/adddmin'
                            } else {
                                window.location.href = '/dashboard/user'
                            }

                            Notification.customSuccess('Signed in successfully Complete');

                            // this.$router.push({name: 'home'})
                            // window.location.href = '/dashboard'
                            this.loadLogin = false

                        }
                    })
                    .catch(error => this.loadLogin = false)



            }





        },


        blur(id){
        const child = document.getElementById(id);
            if(this.form[id]==''){
                child.parentNode.classList.remove("blursuccess");
                child.parentNode.classList.add("blurerror");
            }else{
                child.parentNode.classList.remove("blurerror");
                child.parentNode.classList.add("blursuccess");
            }

        },




	}
}
</script>

<style lang="css" scoped>
div#loginbtn {
    cursor: pointer;
}
section.vh-100 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
}
.blurerror input {
    border: 1px solid red !important;
}
.blurerror label {
    color:red !important;
}
.blursuccess input {
    border: 1px solid green !important;
}
.blursuccess label {
    color:green !important;
}
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
*,
*:focus{outline: none}

/* .form{
  width: 500px;
  margin: 0 auto;
  margin-top: 150px;
  font-family: sans-serif;
  background: #fff
} */
.form-item{
  position: relative;
  margin-bottom: 15px
}
.form-item input{
  display: block;
  width: 100%;
  height: 40px;
  background: transparent;
  border: solid 1px #ccc;
  transition: all .3s ease;
  padding: 0 15px
}
.form-item input:focus{
  border-color: blue
}
.form-item label{
  position: absolute;
  cursor: text;
  z-index: 2;
  top: 13px;
  left: 10px;
  font-size: 12px;
  font-weight: bold;
  background: #fff;
  padding: 0 10px;
  color: #999;
  transition: all .3s ease
}
.form-item input:focus + label,
.form-item input:valid + label{
  font-size: 11px;
  top: -5px
}
.form-item input:focus + label{
  color: blue
}

</style>

