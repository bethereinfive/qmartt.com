<template>

        <div data-v-8c4b8248="" class="container">


    <slot></slot>



            </div>


</template>
<script>
  export default {
    created() {
        this.createlink('frontend/css/bootstrap.min.css');
    },
    data(){
        return {

        }},
    watch: {
        '$route': {
            handler(newValue, oldValue) {
                window.scrollTo(0,0);
            },
            deep: true
        }
    },
    mounted() {


    },
    methods: {
        createlink(url=''){
            let recaptchaScript = document.createElement('link')
            recaptchaScript.setAttribute('href', this.$asseturl+url)
            recaptchaScript.setAttribute('rel', 'stylesheet')
            document.head.appendChild(recaptchaScript)
        },
        createscript(url=''){
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', this.$asseturl+url)
            document.body.appendChild(recaptchaScript)
        }
    }
  }
</script>
<style>
.col-6.amount_item span {
  border: 2px solid #e8ba31;
  display: block;
  text-align: center;
  margin: 6px 0px;
  padding: 4px 3px;
  cursor: pointer;
}
</style>
