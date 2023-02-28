<template>
    <div>






        <header>

        <div class="heeeeee">
     <p> normal</p>
    <hr class="hr-line">
        </div>

    </header>
    <form @submit.stop.prevent="onSubmit">

        <div  class="d-flex flex-style flex-wrap my-5">
           <!-- <p  class="money-style" :class="{ 'active':form.amount == 400 }" @click="form.amount = 400">400</p> -->
           <p  class="money-style" :class="{ 'active':form.amount == 500 }" @click="form.amount = 500">500</p>
           <p  class="money-style" :class="{ 'active':form.amount == 1000 }" @click="form.amount = 1000">1000</p>
           <p  class="money-style" :class="{ 'active':form.amount == 2000 }" @click="form.amount = 2000">2000</p>
           <p  class="money-style" :class="{ 'active':form.amount == 5000 }" @click="form.amount = 5000">5000</p>
           <p  class="money-style" :class="{ 'active':form.amount == 10000 }" @click="form.amount = 10000">10000</p>
           <p  class="money-style" :class="{ 'active':form.amount == 25000 }" @click="form.amount = 25000">25000</p>
           <p  class="money-style" :class="{ 'active':form.amount == 100000 }" @click="form.amount = 100000">100000</p>
           <p  class="money-style" :class="{ 'active':form.amount == 300000 }" @click="form.amount = 300000">300000</p>
           <!-- <p  class="money-style active">Custom</p> -->
        </div>
       <div class="text-center">
        <input class="form-control mb-3" type="number" v-model="form.amount" placeholder="Type ammount">

        <button class="btn btn-primary  w-75" disabled v-if="con">Please Wait ....</button>
        <button class="btn btn-primary  w-75" type="submit" v-else>Recharge</button>

       </div>



    </form>




                <div class="copyPopup" v-if="popup">
                    <span> Number copied success</span>
                </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
               popup:false,
            form: {
                amount: '',
            },
            row: {},
            settings: {},
            payMethods: '',
            amount: 0,
            step: 1,
            copyMessage:'',
            rates:'',
            con:false,
        }
    },
    methods: {

        async setting(){
            var resN = await this.callApi('get',`/api/admin/setting`,[])
              this.settings = resN.data
        },
         randomLetter(length) {
                let result = 'S'+this.dateformatglobal()[10]+this.dateformatglobal()[11]+this.dateformatglobal()[12]+Math.floor(Math.random() * (999999999999 - 11111111111));
                // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                // const charactersLength = characters.length;
                // let counter = 0;
                // while (counter < length) {
                // result += characters.charAt(Math.floor(Math.random() * charactersLength));
                // counter += 1;
                // }





                return result;
            },
        async onSubmit() {

            if (this.settings.min_deposit > Number(this.form.amount)) {
                Notification.customError(`Minimum deposit amount ${this.settings.min_deposit}`);
            } else {
                this.form['orderid'] = this.randomLetter(20);
                localStorage.setItem('rechargeData',JSON.stringify(this.form))
                var regTimer = new Date(new Date().getTime() + 300000);
                localStorage.setItem('regTimer',regTimer);
                this.$router.push({ name: 'rechargepage' });
            }


        },



    },
    mounted() {
        this.setting();

    },
}
</script>
<style scoped>
.mainitem {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.money-style {
    text-align: center;
    width: 31%;
    border-radius: 5px;
    background-color: #eceded;
    color: #000;
    font-size: 15px;
    margin: 7px 1%;
    height: 50px;
    box-sizing: border-box;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.active {
    color: #fff;
    background: linear-gradient(60deg,#0074BD,#C6E037);
}
button.btn.btn-primary.w-75 {
    background: linear-gradient(60deg,#0074BD,#C6E037);
    border: #1ab49e;
    height: 50px;
}
</style>
