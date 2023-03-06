<template>
    <div>








  <form @submit.stop.prevent="onSubmit">


    <header>


      <div class="heeeeee" style="background: #419EFF; color: #fff;">
   <p>পেমেন্ট তথ্য</p> </div>


</header>

    <div class="text-center mt-4">
    <img src="https://checkout-bdt.onepay.news/static/img/pixlogo.2432dd36.png" alt="" style="width: 70px;">
    <p>One Pay</p>
</div>


<div class="mx-3">
  <div class="mx-3 text-end"><a href="javascript:void(0)" @click="$router.go(-1)" class="text-decoration-none text-warning-emphasis">একাউন্ট সুইচ করতে ক্লিক করুন</a></div>

</div>
<div class="border border-top-0 mb-4 mx-3 rounded">
  <p class="bg-primary px-3 py-1 text-white mt-2" v-if="row.name=='Bkash'"> স্টেপ ১. বিকাশ ইনফর্মেশন </p>
  <p class="bg-primary px-3 py-1 text-white mt-2" v-else-if="row.name=='Nagad'"> স্টেপ ১. নগদ ইনফর্মেশন </p>
  <p class="bg-primary px-3 py-1 text-white mt-2" v-else-if="row.name=='Rocket'"> স্টেপ ১. রকেট ইনফর্মেশন </p>
  <div class="d-flex justify-content-between mx-4">

    <p class="fs-6 text-body-secondary" v-if="row.name=='Bkash'">বিকাশ একাউন্ট</p>
    <p class="fs-6 text-body-secondary" v-else-if="row.name=='Nagad'">নগদ একাউন্ট</p>
    <p class="fs-6 text-body-secondary" v-else-if="row.name=='Rocket'">রকেট একাউন্ট</p>



    <p style="font-size: 17px;"> {{ paymentNumber }}</p>




  </div>

  <hr class="mx-4" style="border: 1px dashed;">

  <div class="d-flex justify-content-between mx-4 fw-bold">
    <p class="fs-6 "> পরিমাণ</p>
    <p class="fs-4 text-danger"> {{ form.amount }} TK</p>
  </div>

</div>
<!-- <hr class="mx-4"> -->

<div class="border border-top-0 mb-4 mx-3 rounded">
  <p class="bg-primary px-3 py-1 text-white mt-2" v-if="row.name=='Bkash'"> ধাপ 2. বিকাশ ট্রান্সফারের মাধ্যমে আপনি যে পরিমাণ রিচার্জ করতে চান তা আমাদের কাছে ট্রান্সফার করুন। </p>
  <p class="bg-primary px-3 py-1 text-white mt-2" v-else-if="row.name=='Nagad'"> ধাপ 2. নগদ ট্রান্সফারের মাধ্যমে আপনি যে পরিমাণ রিচার্জ করতে চান তা আমাদের কাছে ট্রান্সফার করুন। </p>
  <p class="bg-primary px-3 py-1 text-white mt-2" v-else-if="row.name=='Rocket'"> ধাপ 2. রকেট ট্রান্সফারের মাধ্যমে আপনি যে পরিমাণ রিচার্জ করতে চান তা আমাদের কাছে ট্রান্সফার করুন। </p>
  <p class="ms-3 my-3">
    <span>অর্থপ্রদানের পরে অনুগ্রহ করে আপনার [লেনদেন আইডি] অনুলিপি<br>করুন</span>
  </p>
</div>
<div class="border border-top-0 mb-4 mx-3 rounded">
  <p class="bg-primary px-3 py-1 text-white mt-2">
    ধাপ 3। রিচার্জ সম্পূর্ণ করতে অনুগ্রহ করে লেনদেন আইডি লিখুন
  </p>
  <div class="text-center">

    <img v-if="row.name=='Bkash'" :src="$asseturl+'Recharge/bkash_tnxid_2.png'" alt="" class="w-25">
    <img v-else-if="row.name=='Nagad'" :src="$asseturl+'Recharge/nagad_tnxid_1.jpg'" alt="" class="w-25">
    <img  v-else-if="row.name=='Rocket'" src="" alt="" class="w-25">

  </div>
  <div class="mx-4 ">
    <p class="ms-1" v-if="row.name=='Bkash'">১০ সংখ্যার লেনদেন আইডি</p>
    <p class="ms-1" v-else-if="row.name=='Nagad'">৮ সংখ্যার লেনদেন আইডি</p>
    <p class="ms-1" v-else-if="row.name=='Rocket'">১০ সংখ্যার লেনদেন আইডি</p>
    <input class="form-control mb-3 onepaynumberInput" v-model="form.trx" type="text" placeholder="*********">
  </div>

</div>
<div class="mb-5 mx-3">
  <button type="button" class="btn btn-secondary btn-sm px-3 py-2 rounded-4" style="    padding: 7px 8px !important;   margin-top: 10px;" @click="onCancel">অর্ডার বাতিল করুন</button>
<button type="button" class=" btn btn-primary btn-sm px-3 py-2 rounded-4" style="     padding: 7px 8px !important;   margin-top: 10px;" @click="onSubmit">অর্ডার নিশ্চিত করুন</button>
</div>



</form>











    </div>
</template>

<script>
export default {
    data(){
        return {
              row: {},
              copyMessage:'111111',
              form:{
                method: '',
                amount: '',
                sender: '',
                screenshot: '',
                trx: '',
              },

              bkash: [],
              nagad: [],
              rocket: [],

              settings: {},
              paymentNumber:''
        }
    },
    methods: {
          async getData() {

            var res = await this.callApi('get',`/api/admin/setting/1`,[]);
            this.settings = res.data;

           this.bkash = this.settings.bkash;
           this.nagad = this.settings.nagad;
           this.rocket = this.settings.rocket;




            var res = await this.callApi('get', `/api/admin/withdraw/gateway/${this.form.method}`, []);
            this.row = res.data;
            if(this.row.name=='Bkash'){
                const random = Math.floor(Math.random() * this.bkash.length);
                this.paymentNumber = this.bkash[random];
            }else if(this.row.name=='Nagad'){
                const random = Math.floor(Math.random() * this.nagad.length);
                this.paymentNumber = this.nagad[random];
            }else if(this.row.name=='Rocket'){
                const random = Math.floor(Math.random() * this.rocket.length);
                this.paymentNumber = this.rocket[random];
            }

        },



        async onSubmit() {
            this.con = true
                var id = localStorage.getItem('userid');
                this.form['user_id'] = id;
                var res = await this.callApi('post', `/api/admin/deposit`, this.form);
                Notification.customSuccess(`Recharge Successfuly Complete`);


                this.$router.push({ name: 'rechargesuccess' });

        },
        onCancel(){
            localStorage.removeItem('regTimer');
            this.$router.push({ name: 'rechargeFailed' });
        }

    },
    mounted() {
        this.form = JSON.parse(localStorage.getItem('rechargeData'));
            this.getData();









            // console.log(localStorage.getItem('rechargeData'))

    },
}
</script>

<style>
.li {
    display: flex;
    justify-content: space-between;
}
.onepaynumberInput:focus {
    box-shadow: 0px 0px 0px black !important;
}
.onepaynumberInput {
    border: 1px solid black !important;
    border-radius: 26px !important;
    margin: 10px 0px !important;
}
.heeeeee {
    width: 100%;
    height: 45px;
    font-size: 16px;
    color: #4a4a4a;
    text-align: center;
    padding-top: 8px;
    font-weight: 700;
}
</style>
