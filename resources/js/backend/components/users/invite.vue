<template>
    <div>

        <div data-v-211d8b7d="" class="top">
                    <div data-v-211d8b7d="" class="title">Invitation with rewards</div>
                    <div data-v-211d8b7d="" class="con">
                        <p data-v-211d8b7d="" class="money">৳{{ row.new_regitration }}</p>
                        <p data-v-211d8b7d="" class="p1">The value of each friend who tops up</p>
                        <p data-v-211d8b7d="" class="p2" @click="copyref">Invite now</p>
                    </div>

                    <!-- <div data-v-211d8b7d="" class="rules">Rules</div> -->
                </div>


                <div class="copyPopup" v-if="popup">
                    <span> Refer link copied success</span>
                </div>



<!--
        <section id="bigbg" class="qr">
            <div class="container-fluid">
                <a href="javascript:void(0)" @click="$router.go(-1)"><i class="fa fa-angle-left"></i></a>
                <div class="QR  text-center">

                    <img :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl='+ref+'&choe=UTF-8'" :alt='ref'/>
                </div>
                <form action="" class="link">
                    <div class="row">
                        <input disabled type="url" v-model="ref">
                        <input type="button" value="copy" class="copy" @click="copyref">
                    </div>
                </form>


                <div class="copyPopup" v-if="popup">
                    <span> Refer link copied success</span>
                </div>
            </div>
        </section> -->


    </div>
</template>

<script>
export default {

    data() {
        return {
            ref: 'https://midvalleyy.com/register',
            row:{},
            popup:false
        }
    },
    methods: {

          async getData() {
             var id = localStorage.getItem('userid');
            var res = await this.callApi('get', `/api/admin/user/${id}`, []);
            this.ref = 'https://midvalleyy.com/register?ref='+res.data.user.username
            this.row = res.data;

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
        this.getData();
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
