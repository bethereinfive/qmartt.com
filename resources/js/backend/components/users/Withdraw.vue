<template>
    <div>
        <div data-v-4cd34ac9="" class="contentMoney">
            <div data-v-890639a6="" data-v-4cd34ac9="" class="title-bar wrap" textcolor="#FFF"
                style="background: linear-gradient(var(--button1) 0%, var(--button2);">
                <span data-v-890639a6="" class="back">
                    <img data-v-890639a6=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAAAXNSR0IArs4c6QAAAqBJREFUWEft11uIT1EUx/Hvj4hISig8KEoReVDKKGVcmtwypWR4oXnBgzI1JZeaSXkZHjyM8oBI8kBKyDUpIlKiKOWJoohcc1tatadOu6Y55/z3+fefsp73Oedz1r6stcUgCQ0SJ/+hqWeqrhk1s7HASWAxcBXYIOl7np+qG9TMxgE3gTkZWIeknoaBmtkk4BowM0LtlHSwIaBmNhW4DkyLQHeBJQ0x9WY2IyCnRMhbwCpJX/Nk08dUtkbNbHaY7okR5gqwVtKPvMjKoGY2D3CQb6BsXADWSfpVBFkJ1MyagEvAmAhzBtgo6U9RZHKomTUDnrVREeY4sEXS3zLIpFAzawHOASMiTK+krWWBfc8l2Uxm1gr41A6LQD2SOmpFJsmombUBJ4ChEahb0t4UyJqhZtYOHAGGZEAGeGnMVXHy/kjpqTezHYBjsu9w5DZJvXkBeceVgprZHqAr+ogfO+2SjuX9eJFxhaFmthvojj7yG9gkyTdUJVEG+hkYHWnaJJ2uRBheWgb6BPA6no3bwEpJX6rCloHOCg3whAh1H1gu6VMV2MJQR4T27QYwOUI9ApZJ+pAaWwoasN4Qe9c+PUI9BZolvUuJLQ0N2P6uGM8D9k0qbE3QgB0fbpRzI9TLsAxepcDWDA1YvwZ7ozw/Qr0OmX1RKzYJNGD9bL0ILIpQbwP2WS3YZNCAHQmc92MqQr0Hlkp6XBabFBqww4GzwJoI9TGcsw/KYJNDA9Z701PA+gjl5XeFpDtFsZVAA9Z71KPA5gj1DVgtyQtG7qgM2icws8PA9kjkd/pWSZfzSiuHhuweADoj1E+gSdLDPNi6QAN2F7A/QnVJ2tdQ0ID168uhDKxFkheKAaNuGc2s2QXAQuBekd1fd+iAqetnwKCB/gPXJcMp9a46GgAAAABJRU5ErkJggg=="
                        alt="" />
                </span>
                <p data-v-890639a6="" class="title">Withdraw</p>
                <span data-v-890639a6="" class="right-top-btn">
                    <span data-v-890639a6=""></span>
                    <img data-v-890639a6=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAAAXNSR0IArs4c6QAABBRJREFUWEftmGnIlVUUhZ9FVFDRAA2UFUbQgBWNEEUzNGBlNoiShPWnhNQIqSgkgyKMgiZSoh/NJRFYkNL0L4rAwgjLImgUJBrJRooVS857uff1Tt/97isY7T8f3z17n3edtffZe58tthPRdoKT/wZQ20cCuzbI+l/ABkn521d6Mmr7WeAyYKdBm0xi/R/gTWCmpN/67dMVqO0jgA8aBtmOa4akl0cBejzwXjF8EXh7Eqz1Mj0amFcW50p6ZrJAF0u6b9xAbV8JPP0/0HEx2xijtnPxZgH7jQB2o6TEekuaBHorcNcIICuThZIeqv5pEug1wApgxxHA/g3kZq9sHGg+YPvkEV3/taT3t4nrR2Cxr0mTrj8GeG4IRv8AHpO0tB/SJoHeDywaktnvgEMkbe6lb/sioCqbF0p6ZSyVyfZUYDlwwACwYXS5pMcHHcr2PUXnZkkeC9BBH216vVf31N6UtGq97YuBvWugNklaPQio7Xgi/W3sExKfSfpkkF21PjRQ2zcBy7psnJ5ynqSqwehQsX05cANwHLBL22Ka5a9KOK0YtR/dilHb1wEPAzvUwOaDsyS9VMuT+wKJ03O72NTPuwGYLSk9cFcZmtGS8M8A9qntlGT+bg1k3BzgJ5bf073nVr8B/ADsBaQfvQQ4qOjkEp5Z32vCrh82lmzn6bIGOLvYJH7nS4qb62GxO7AEWADsDCStnSTpi7ruhBgdBqzthcADRXeVpJmVne1pQBqTFIS8ybaI7VuAO0uIdNg0wqjtsPIpcDDwLXCYpJ/bAAXcnLI2RVKalQpsvHA+kBA4td4bjJVR2+cArxZmlkgKSy2xvQqYAfyUUtz+TLZ9FvB6sV0q6Y5223EDvRGo3ldhpeNROABovLEJ2BNYLWl6k0CTZ5Nv4+5pkjbWGK1c/0tx74e19Y+BPNXXSzqqSaBx9W3A7wXo5zUgc0tuTS7+BjhP0kdtcfplie91klIgWjJu188HHim7B8Rr9Uxh+95SqSqwpyUd2d4DyMGSY1dKmt0k0CTxDC7yXHlU0rXdUprtxHFaxoBdJOlB21cBTxT9BZJSBZthtOTEtcAJwJ/AsZJSHrcS20ny0bseSJpaBxxewmaqpKS3CQHNhejZAGcaB1wt6ccC9IJSPsPqemC6pMReV7EdveeBS4vCMkkpAB3SK0anAAnylLhhpMNVthOniddISmcu2AuSwnJLbJ8O3A2cUn58J6VXUpL+YKCFmZzw9iHmo6nLV1SMVrvbfqpUocRhWsHU8beA6GeIEXAHtk0ME9u5gN93Y6bRibPtxeWwu/VxS9rETPIyoOgZYo0CLZ7ZH8jwIh46FLaM4/M+ShlNK/ikpGrE2fM8jQOtxWRawOTJzZJ+HSb4K51tCnQiwOq6/wLGrxJH9mwckwAAAABJRU5ErkJggg=="
                        alt="" />
                </span>
            </div>
            <div data-v-4cd34ac9="" class="payNav">
                <div data-v-4cd34ac9="" class="payBox">
                    <span data-v-4cd34ac9="" class="IsAct"> Withdraw </span>
                    <!---->
                </div>
            </div>
            <!---->
            <div data-v-4cd34ac9="">
                <div data-v-4cd34ac9="" id="withdrawal">

                    <!--  <div data-v-4cd34ac9="" class="rules">
                        <p data-v-4cd34ac9="" class="title">Instruction for withdrawal</p>
                        <div data-v-4cd34ac9="" class="content">
                            <p data-v-4cd34ac9="">1. উড্র টাইম ৭২ ঘন্টা.</p>
                            <p data-v-4cd34ac9="">2. প্রসেসিং টাইম ২৪ ঘন্টা.</p>
                            <p data-v-4cd34ac9="">3. মিনিমাম উড্র ৩০০ টাকা.</p>
                        </div>
                    </div> -->

                    <div data-v-4cd34ac9="" class="bankTabBar_box">
                        <!-- <p data-v-4cd34ac9="" class="title">Choose the type</p> -->
                        <div data-v-4cd34ac9="" class="bank_sel">
                            <div class="form-group">
                                <label for="">Withdraw Method</label>
                                <select class="form-control" v-model="form.method" @change="charageCount" disabled
                                    required>
                                    <option value="">Select</option>
                                    <option v-for="pay in row"
                                        :to="{ name: 'RechargePage', params: { method: pay.id } }" :key="'pay' + pay.id"
                                        :value="pay.id">{{ pay.name }}</option>
                                </select>
                            </div>
                            <div class="form-group mb-3" v-if="gateways">
                                <label for="">{{ gateways.name }} Number</label>
                                <input type="number" class="form-control" v-model="form.recieved_number" disabled>
                            </div>
                            <!-- <p data-v-4cd34ac9="" class="active_sle">BKash</p>
                                <p data-v-4cd34ac9="" class="">Nagad</p> -->
                        </div>
                        <div data-v-4cd34ac9="" class="amount">
                            <p data-v-4cd34ac9="" class="title">Withdraw amount</p>
                            <div data-v-4cd34ac9="" class="input-block">
                                <input data-v-4cd34ac9="" v-model="form.amount" @input="checkAmount(form.amount)"
                                    type="text" placeholder="Please enter the withdraw amount" />
                                <div data-v-4cd34ac9="" class="after">৳</div>
                            </div>
                            <p data-v-4cd34ac9="" class="tips">Amount available for withdrawal <span data-v-4cd34ac9="">
                                    ৳{{ parseFloat(Number(user.user.balance)-Number(user.new_regitration)).toFixed(2)
                                    }}</span></p>
                        </div>
                        <div data-v-4cd34ac9="" @click="onSubmit" class="comfirm">Confirm</div>
                    </div>
                    <!-- <div data-v-4cd34ac9="" class="message">
                            <div data-v-4cd34ac9="" class="message_tips">
                                <i data-v-4cd34ac9=""></i><span data-v-4cd34ac9="">The platform assumes the legal responsibility to protect the privacy of its users and never discloses their data.</span>
                            </div>
                        </div>
                        <div data-v-4cd34ac9="" class="rules">
                            <p data-v-4cd34ac9="" class="title">Instruction for withdrawal</p>
                            <div data-v-4cd34ac9="" class="content">
                                <p data-v-4cd34ac9="">1. If you encounter any problems when withdrawing money, please contact the online customer service.</p>
                                <p data-v-4cd34ac9="">2. The amount you request to withdraw will get to your account the next working day.</p>
                            </div>
                        </div> -->
                </div>
            </div>
        </div>
        <!--
        <section id="topbar">
            <div class="title">
                <a href="javascript:void(0)" @click="$router.go(-1)"><i class="fa fa-angle-left"></i></a>
                <p>Withdraw</p>
            </div>
        </section>
        <section id="reclist">
            <div class="details">
                <div class="container-fluid">
                    <div v-if="step == 1">
                        <div class="form-group">
                            <label for="">Withdraw Method</label>
                            <select class="form-control" v-model="form.method" @change="charageCount" disabled required>
                                <option value="">Select</option>
                                <option v-for="pay in row" :to="{ name: 'RechargePage', params: { method: pay.id } }"
                                    :key="'pay' + pay.id" :value="pay.id">{{  pay.name  }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">Withdraw Amount</label>
                            <input type="tel" class="form-control" @input="checkAmount(form.amount)"
                                v-model="form.amount">
                        </div>
                        <p> Available Balance : {{  user.user.balance - 300  }} </p>
                        <div class="form-group mb-3" v-if="gateways">
                            <label for="">{{  gateways.name  }} Number</label>
                            <input type="number" class="form-control" v-model="form.recieved_number" readonly>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-info" v-if="bankcardAlert" disabled >Wait...</button>
                            <button class="btn btn-info" v-else @click="nextFun(2)">Next</button>
                        </div>
                        <p style="color: red;text-align: center;font-size: 17px;">প্রত্যাহার সময় সপ্তাহের সোমবার থেকে শুক্রবার সকাল
                            ১০:০০ থেকে সন্ধা ০৫:০০ টা পর্যন্ত </p>
                        <p style="color: red;text-align: center;font-size: 17px;">প্রত্যাহার প্রসেসিং ফি {{ gateways.percent_charge }}% এবং
                            প্রত্যাহার ২৪ ঘন্টার মধ্যে একাউন্ট এ পৌছাবে</p>
                    </div>
                    <form @submit.stop.prevent="onSubmit" v-else-if="step == 2">
                        <h4 class="d-block bg-success text-white p-1 my-3">Payment Info</h4>
                        <div class="patment_info">
                            <ul class="list-unstyled">
                                <li class="li"><span>{{  gateways.name  }} Account</span><span>{{  form.recieved_number
                                        }}</span></li>
                                <li class="li"><span>Amount</span><span>{{  form.amount  }}</span></li>
                                <li class="li"><span>Charge</span><span>{{  charge  }}</span></li>
                                <li class="li"><span>Payable Amount</span><span>{{  Payable  }}</span></li>
                                <li class="li"><span>New balance</span><span>{{  balance  }}</span></li>
                            </ul>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-secondary" @click="nextFun(1)">Previous</button>
                            <button class="btn btn-info" type="button" disabled v-if="con">Wait....</button>
                            <button class="btn btn-info" type="submit" v-else>Confirm Withdraw</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
 -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                method: '',
                amount: '',
                recieved_number: '',
                trx: '',
            },
            row: {},
            user: { user: {} },
            con: false,
            step: 1,
            gateways: {},
            charge: 0,
            Payable: 0,
            balance: 0,
            copyMessage: '',
            bankcardAlert: true,
        }
    },
    methods: {
        checkAmount(amount) {
            if (amount > this.user.user.balance - this.user.new_regitration) {
                Notification.customError(`You can't Withdraw ${amount}.Because your account balance is ${this.user.user.balance - 300}`);
                this.form.amount = '';
            }
            // else  if(Number(this.form.amount)<Number(this.gateways.min_amount)) {
            //     Notification.customError('Minimum Withdrawal Amount '+this.gateways.min_amount+' BDT');
            // }
            else {
                this.form.amount = amount;
            }
        },
        async charageCount() {
            var res = await this.callApi('get', `/api/admin/withdraw/charge/${this.form.method}`, []);
            this.gateways = res.data;
        },
        FileSelected($event, parent_index) {
            let file = $event.target.files[0];
            if (file.size > 5048576) {
                Notification.image_validation();
            } else {
                let reader = new FileReader;
                reader.onload = event => {
                    this.form[parent_index] = event.target.result
                    // console.log(event.target.result);
                };
                reader.readAsDataURL(file)
            }
            //   console.log($event.target.result);
        },
        async getData() {
            var res = await this.callApi('get', `/api/admin/withdraw/gateway`, []);
            this.row = res.data;
            var id = localStorage.getItem('userid');
            var result = await this.callApi('get', `/api/admin/user/${id}`, []);
            this.user = result.data;
            this.form.method = this.user.user.Bank_Name
            this.form.recieved_number = this.user.user.Bank_account
            this.charageCount()
            this.bankcardAlert = false
        },
        async nextFun(step) {
            if (step == 2) {
                if (this.form.method == '') {
                    Notification.customError('Method is required');
                } else {
                    if (this.form.amount == '') {
                        Notification.customError('Amount is required');
                    } else {
                        if (Number(this.form.amount) < Number(this.gateways.min_amount)) {
                            Notification.customError('Minimum Withdrawal Amount ' + this.gateways.min_amount + ' BDT');
                        } else {
                            this.step = step;
                            var charge = ((this.form.amount * this.gateways.percent_charge) / 100);
                            // console.log(charge)
                            this.charge = charge;
                            this.Payable = this.form.amount - charge;
                            this.balance = this.user.user.balance - this.form.amount;
                        }
                    }
                }
            } else {
                this.step = step;
            }
        },
        async onSubmit() {
            this.con = true
            if (this.form.method == '') {
                Notification.customError('Method is required');
            } else {
                if (this.form.amount == '') {
                    Notification.customError('Amount is required');
                } else {
                    if (Number(this.form.amount) < Number(this.gateways.min_amount)) {
                        Notification.customError('Minimum Withdrawal Amount ' + this.gateways.min_amount + ' BDT');
                    } else {
                        var id = localStorage.getItem('userid');
                        var charge = ((this.form.amount * this.gateways.percent_charge) / 100);
                        // console.log(charge)
                        this.charge = charge;
                        this.Payable = this.form.amount - charge;
                        this.balance = this.user.user.balance - this.form.amount;
                        this.form['user_id'] = id;
                        this.form['curency'] = this.gateways.currency;
                        this.form['rate'] = this.gateways.rate;
                        this.form['charge'] = this.charge;
                        this.form['final_amount'] = this.balance;
                        this.form['after_charge'] = this.Payable;
                        var res = await this.callApi('post', `/api/admin/withdrawal`, this.form);
                        if (res.data == 422) {
                            Notification.customError('Falied! withdraw cant be proccess.You must make a reachage first!');
                        } else if (res.data == 444) {
                            Notification.customError('Falied! withdraw cant be proccess.');
                        } else {
                            Notification.customSuccess(`Withdraw Successfuly Complete`);
                            this.$router.push({ name: 'WithdrawHistory' });
                        }
                    }
                }
            }
            }
        },
        mounted() {
            this.getData();
            setTimeout(() => {
                if (!this.form.method) {
                    // alert('Please add Bank card first');
                    // this.$router.push({ name: 'bankAccount' });
                }
            }, 5000);
            // 10:00<10:01
            // console.log(User.dateformat()[9]);

             if(User.dateformat()[9]<=13){
                 if(User.dateformat()[9]>=10){
            setTimeout(() => {
                if (!this.form.method) {
                    alert('Please add Bank card first');
                    this.$router.push({ name: 'bankAccount' });
                }
            }, 5000);
                 }else{
                 alert('প্রত্যাহার সময় সকাল ১০:০০ থেকে দুপুর ০২:০০ টা পর্যন্ত')
                    this.$router.push({ name: 'Authuser' });
                 }
             }else{
                 alert('প্রত্যাহার সময় সকাল ১০:০০ থেকে দুপুর ০২:০০ টা পর্যন্ত')
                 this.$router.push({ name: 'Authuser' });
             }
        },
    }

</script>
<style>
.mainitem {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.form-control {
    width: 100%;
    border: 0;
}
.form-group {
    margin-top: 17px;
}
</style>
