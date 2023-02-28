<template>
    <div>





        <div data-v-a4cbac46="" class="container">
                <div data-v-890639a6="" data-v-a4cbac46="" class="title-bar wrap" style="background: linear-gradient(var(--button1) 0%, var(--button2) 100%);">
                    <span data-v-890639a6="" class="back">
                        <img
                            data-v-890639a6=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAABDlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v3yHCAAAAWXRSTlMAAgMFBggJCwwPEBITFRYaICEnKy0xNDY6Oz1DSElSWFpbYWVpcHJzdnp8fYGCiIyTlp2fp6+ws7e4vsDFyMzP0dLT1dfb3OPk6Ons7/Hy8/T19/n6+/z9/poeTkQAAADoSURBVBgZ3cHZIkIBFAXQXbiS4eZGKJnLPCdDEhIlUyF3//+P2H9wzosXa+GfSJ/3zgJ4TNyS3IRD2KSUYcs8Uq4DmKInytUoTDMdysUITLkupToE08IrpZKEqfBBOU3AVOxTjmFb+qIcwrY6oOzDtv5DMi7DVopJxhuw7VIGa7DtUL6X4fBOWYHHHaWWgkP2mVIfg0PUptyMwyHTotxPwSFsUh5COEw2KK1pOKTrlHYEh1SN0snCIbikdGfhMFylvMzBIVmhvOXhkDih9ArwOKL0i/A4oHzm4LFN2YNLieQifOa38vhrv41dP5FpuPPwAAAAAElFTkSuQmCC"
                            alt=""
                        />
                    </span>
                    <p data-v-890639a6="" class="title">Order history</p>
                    <span data-v-890639a6="" class="right-top-btn"><span data-v-890639a6=""></span><img data-v-890639a6="" src="" alt="" style="display: none;" /></span>
                </div>
                <div data-v-a4cbac46="" id="OrderRecord">
                    <div data-v-a4cbac46="" class="top">
                        <div data-v-a4cbac46="" class="assets">
                            <div data-v-a4cbac46="" class="left">
                                <p data-v-a4cbac46=""><span data-v-a4cbac46="">৳</span>{{ row.user.balance }}</p>
                                <p data-v-a4cbac46="">Total amount</p>
                            </div>
                            <div data-v-a4cbac46="" class="right">
                                <p data-v-a4cbac46="">({{ Number(row.plans.totalorder)-Number(row.user.task) }}/{{ row.plans.totalorder }})</p>
                                <p data-v-a4cbac46="">Orders of today</p>
                            </div>
                        </div>

                    </div>
                    <div data-v-a4cbac46="" class="recors_list">
                        <div data-v-a4cbac46="">


                            <div data-v-a4cbac46="" class="item" v-for="task in row.task" :key="'task'+task.id">
                                <p data-v-a4cbac46=""><span data-v-a4cbac46="">{{ dateformatglobal(task.created_at)[6] }}</span><span data-v-a4cbac46=""></span></p>
                                <div data-v-a4cbac46="" class="data">
                                    <div data-v-a4cbac46="" class="block">
                                        <p data-v-a4cbac46=""><span data-v-a4cbac46="">৳</span>{{ row.user.balance }}</p>
                                        <p data-v-a4cbac46="">Total amount of orders</p>
                                    </div>
                                    <div data-v-a4cbac46="" class="block">
                                        <p data-v-a4cbac46=""><span data-v-a4cbac46="">৳</span>{{ task.task_comisition }}</p>
                                        <p data-v-a4cbac46="">Tasks income</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>





 <!-- <section id="topbar">
            <div class="title">
                <a href="javascript:void(0)" @click="$router.go(-1)"><i class="fa fa-angle-left"></i></a>
                <p>Order Record</p>
            </div>
        </section>

        <section id="listmenu">


            <div role="feed" class="van-list" aria-busy="true">

                <div class="recordDiv p-3" v-for="task in row.task" :key="'task'+task.id">
                    <p>Date： {{ dateformatglobal(task.created_at)[6] }}</p>
                    <p>Task Comisition：  {{ task.task_comisition }} TK</p>
                </div>

            </div>
        </section>
 -->


    </div>
</template>

<script>
export default {
    data(){
        return {
              row: {},

        }
    },
    methods: {
          async getData() {
   var id = localStorage.getItem('userid');
            var res = await this.callApi('get', `/api/admin/task?id=${id}`, []);
            this.row = res.data;

        },



    },
    mounted() {
            this.getData();

    },
}
</script>

<style>
.recordDiv.p-3 {
  border-bottom: 1px solid white;
}
</style>
