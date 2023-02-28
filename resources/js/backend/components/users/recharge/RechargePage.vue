<template>
    <div>







  <form @submit.stop.prevent="onSubmit">

  <div class="d-flex mx-3 my-3 mb-3">
    <div class="w-50 " style="display: flex;align-items: center;">
      <img :src="$asseturl+'Recharge/onepay.png'" width="30px" alt=""> <span style="    font-size: 22px;
    font-weight: 600;">OnePay</span>
    </div>
    <div class="text-end w-50" style="font-size: 26px;
    font-family: sans-serif;">
       <b>{{ time }} </b>

    </div>

  </div>
<div>
<p class="bg-warning mx-3 ps-4 py-2 rounded-top-5 pt-3" style="margin-bottom: 9px;;font-size: 12px;border-top-left-radius: 2em!important; border-top-right-radius: 2em !important;">অর্ডার আইডি : {{ form.orderid }}</p>
<div>
  <p class="bg-warning fs-1 fw-medium mx-3 pt-2 py-5 rounded-bottom-5 text-center" style="border-bottom-right-radius: 2rem !important;border-bottom-left-radius: 2rem !important;">{{ form.amount }} TK</p>
</div>

</div>
<div class="mx-4 mt-3">
  <p class="ms-1">আপনার একাউন্ট</p>
  <input class="form-control mb-3 onepaynumberInput" type="number" v-model="form.sender"  placeholder="01*********" minlength="11" maxlength="11" required>

  <small style="color: white;
    background: #000000a8;
    padding: 9px 16px;
    border-radius: 14px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);" v-if="accounterror">{{ accounterror }}</small>

</div>
<div class="mx-4 ">
  <p class="ms-1">পেমেন্ট চ্যানেল </p>
  <select class="form-select py-2 rounded-5 onepaynumberInput" aria-label="Default select example"  v-model="form.method" required>
    <option selected>আপনার পেমেন্ট চ্যানেল নির্বাচন করুন</option>
    <option v-for="pay in row" :key="'pay' + pay.id" :value="pay.id">{{ pay.name }}</option>
  </select>
  <button class="bg-secondary fw-bold btn btn-primary mt-4 w-100 py-2" type="submit">পেমেন্টে যান</button>

</div>




</form>











    </div>
</template>

<script>
export default {
    data(){
        return {
              row: {},
              time:'05:00',
              copyMessage:'111111',
              form:{
                method: '',
                amount: '',
                sender: '',
                screenshot: '',
                trx: '',
              },
              timeout:0,
              menual:false,
              accounterror:'',
        }
    },
    methods: {
          async getData() {


            var res = await this.callApi('get', `/api/admin/withdraw/gateway`, []);
            this.row = res.data;

        },

    copyURL() {
      var Url = this.$refs.mylink;
      Url.innerHTML = window.location.href;
      console.log(Url.innerHTML)
      Url.select();
      document.execCommand("copy");
    },

    countdown(){


        if(localStorage.getItem('regTimer')){
            var regTimer = localStorage.getItem('regTimer')

        }else{
            var regTimer = new Date(new Date().getTime() + 300000);
            localStorage.setItem('regTimer',regTimer);

        }


        // Set the end date



  var endDate = new Date(regTimer).getTime();

  // Update the count down every 1 second
  var x = setInterval(()=> {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the end date
    var distance = endDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(seconds)
    // Display the result in the element with id="countdown"

    if(minutes<10){
        minutes = minutes.toString().padStart(2, '0')
    }
    if(seconds<10){
        seconds = seconds.toString().padStart(2, '0')
    }

    this.time = minutes + ":" + seconds + " ";
    this.timeout = 0;


    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      this.time = "0:00";
      this.timeout = 1;
    }
    if(this.menual){
    console.log(this.menual)
        clearInterval(x);
    }
    if(this.timeout==1){
      this.$router.push({ name: 'rechargeFailed' });
    }


  }, 1000);




    },




    async onSubmit() {


        console.log(this.form.sender.length)
        if(this.form.sender.length==11){
            localStorage.setItem('rechargeData',JSON.stringify(this.form))
            this.menual = true
            this.countdown(this.menual);
            this.$router.push({ name: 'rechargecheckout' });
            this.accounterror = '';
        }else{
            this.accounterror = 'আপনার একাউন্ট অবৈধ';
            setTimeout(() => {
                this.accounterror = '';
            }, 3000);

            // Notification.customError(`আপনার একাউন্ট অবৈধ `);

        }






    },

    },
    mounted() {
            this.getData();
            this.countdown(this.menual);
            this.form = JSON.parse(localStorage.getItem('rechargeData'));
            // console.log(localStorage.getItem('rechargeData'))
            if(this.timeout==1){
              this.$router.push({ name: 'rechargeFailed' });
            }
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
</style>
