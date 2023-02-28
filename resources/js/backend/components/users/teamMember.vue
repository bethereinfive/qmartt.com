<template>
    <section id="listmenu">
        <div id="level">
            <div class="container-fluid">
                <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" :class="{active:level1}" @click="teamLavel('1st')" id="pills-home-tab"
                            data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"
                            aria-controls="pills-home" aria-selected="true">Level 1</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" :class="{active:level2}" @click="teamLavel('2nd')" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Level 2</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" :class="{active:level3}" @click="teamLavel('3rd')" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Level 3</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"  v-if="level1">
                        <ul>
                            <li class="li1" v-for="member in row.level1" :key="'level1'+member.id">
                                <span style="font-size: 21px;"> Username : {{ member.username }} </span> <br />
                                <span> Recharge : <Counting :member-id="member.id" member-type="Recharge"></Counting>
                                </span> <br />
                                <span> Withdraw : <Counting :member-id="member.id" member-type="withdraw"></Counting>
                                </span> <br />
                                <span> Task progress : <Counting :member-id="member.id" member-type="task"></Counting>
                                </span> <br />
                                <span> Join Date : {{ dateformatglobal(member.created_at)[6] }} </span>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" v-else-if="level2">
                        <ul>
                            <li class="li1" v-for="member in row.level2[0]" :key="'level12'+member.id">
                                <span style="font-size: 21px;"> Username : {{ member.username }} </span> <br />
                                <span> Recharge : <Counting :member-id="member.id" member-type="Recharge"></Counting>
                                </span> <br />
                                <span> Withdraw : <Counting :member-id="member.id" member-type="withdraw"></Counting>
                                </span> <br />
                                <span> Task progress : <Counting :member-id="member.id" member-type="task"></Counting>
                                </span> <br />
                                <span> Join Date : {{ dateformatglobal(member.created_at)[6] }} </span>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" v-else-if="level3">
                        <ul>
                            <li class="li1" v-for="member in row.level3[0]" :key="'level3'+member.id">
                                <span style="font-size: 21px;"> Username : {{ member.username }} </span> <br />
                                <span> Recharge : <Counting :member-id="member.id" member-type="Recharge"></Counting>
                                </span> <br />
                                <span> Withdraw : <Counting :member-id="member.id" member-type="withdraw"></Counting>
                                </span> <br />
                                <span> Task progress : <Counting :member-id="member.id" member-type="task"></Counting>
                                </span> <br />
                                <span> Join Date : {{ dateformatglobal(member.created_at)[6] }} </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Counting from './counting.vue';
export default {
    components: {
        Counting
    },
    data() {
        return {
            row: {
                level1: {},
                level2: {},
                level3: {},
            },
            datas: {
                Recharge: 0,
                withdraw: 0,
                task: 0,
            },
            level1: true,
            level2: false,
            level3: false,
        }
    },
    methods: {
        teamLavel(level) {
            if (level == '1st') {
                this.level1 = true;
                this.level2 = false;
                this.level3 = false;
            } else if (level == '2nd') {
                this.level1 = false;
                this.level2 = true;
                this.level3 = false;
            } else if (level == '3rd') {
                this.level1 = false;
                this.level2 = false;
                this.level3 = true;
            }
        },
        async getData() {
            var id = localStorage.getItem('userid');
            var res = await this.callApi('get', `/api/user/multi/refer?id=${id}`, []);
            this.row = res.data;
        },
    },
    mounted() {
        this.getData();
        // console.log(this.getRecharge(3,'Recharge'));
        // this.getRecharge(member.id,'Recharge');
        // this.getRecharge(member.id,'withdraw');
        // this.getRecharge(member.id,'task');
    },
}
</script>
<style scoped>
ul#pills-tab {
    display: flex;
    justify-content: space-evenly;
}
ul#pills-tab li button {
    width: 100%;
    border: 1px solid var(--defaltColor);
    cursor: pointer;
}
ul#pills-tab li {
    width: 100%;
}
ul#pills-tab li button.active {
    background: var(--defaltColor);
    color: white;
}
.li1 {
    border-bottom: 2px solid black;
}
</style>
