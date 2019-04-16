<style>
.scroll__box{
    overflow: hidden;
}
.scroll__item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    font-size: 30px;
}

</style>

<template>
        <section class="scroll__box" ref="scrollBox">
            <ul class="scroll__one" ref="scrollOne" v-if="scrollListOne">
                <li class="scroll__item" v-for="(item,index) in scrollListOne" :key="index">
                    <p class="name">{{item.name}}</p>
                    <p class="number">{{item.number}}</p>
                </li>
            </ul>
            <ul class="scroll__two" ref="scrollTwo" v-if="scrollListTwo">
                <li class="scroll__item" v-for="(item,index) in scrollListTwo" :key="index">
                    <p class="name">{{item.name}}</p>
                    <p class="number">{{item.number}}</p>
                </li>
            </ul>   
        </section>
        
        
</template>
<script>
export default {
    props: {
        initData: {
            type: Array
        },
        animationTime: {
            default: '5s',
            type: String
        },
        amount: {
            default: 5,
            type: Number
        }
    },
    data() {
        return {
            allData: [],
            scrollListOne: [],
            scrollListTwo: [],
            timer: null
        }
    },
    created() {
        this.allData = this.initData
        this.getScrollList()
    },
    mounted() {
        this.setScrollHeight()
    },
    methods: {
        getScrollList(){
            const amount = this.amount
            let i = 0
            let init = true
            let arr = this.initData
            function addData() {
                if(init){
                    this.scrollListOne = this.allData.slice(amount*i,amount*(i+1))
                    i++
                    if(this.allData.slice(amount*i,amount*(i+1)).length<this.amount){
                        this.allData = this.allData.concat(arr)
                    }
                    this.scrollListTwo = this.allData.slice(amount*i,amount*(i+1))
                    i++
                    init = false
                }else{
                    if(this.allData.slice(amount*i,amount*(i+1)).length<this.amount){
                        this.allData = this.allData.concat(arr)
                    }
                    this.scrollListOne = this.allData.slice(amount*i,amount*(i+1))
                    i++;
                    if(this.allData.slice(amount*i,amount*(i+1)).length<this.amount){
                        this.allData = this.allData.concat(arr)
                    }
                    setTimeout(()=>{
                        this.scrollListTwo = this.allData.slice(amount*i,amount*(i+1))
                        i++
                    },parseFloat(this.animationTime)*500)
                }
                this.timer = setTimeout(addData.bind(this),parseFloat(this.animationTime)*1000)
            }
            addData.call(this)
        },
        addKeyFrames(y,double) {
            let style = document.createElement('style');
            style.type = 'text/css';
            let scrollOne = 
            '.scroll__one{\
                    position: relative;\
                    animation:ANIMATIONTIME rowup linear infinite normal;\
                    -webkit-animation: ANIMATIONTIME rowup linear infinite normal;\
                }';
            let scrollTwo = 
            '.scroll__two{\
                    animation:ANIMATIONTIME flowup linear infinite normal;\
                    -webkit-animation:ANIMATIONTIME flowup linear infinite normal;\
                    animation-delay: HALFTIME;\
                    -webkit-animation-delay: HALFTIME;\
                }'
            let rowupKeyFrames =
                '@-webkit-keyframes rowup {\
                0% {\
                    -webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                    transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                }\
                100% {\
                    -webkit-transform: translate3d(0, -A_DYNAMIC_VALUE, 0);\
                    transform: translate3d(0, -A_DYNAMIC_VALUE, 0);\
                }\
            }\
            @keyframes rowup {\
                0% {\
                    -webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                    transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                }\
                100% {\
                    -webkit-transform: translate3d(0, -A_DYNAMIC_VALUE, 0);\
                    transform: translate3d(0, -A_DYNAMIC_VALUE, 0);\
                }\
            }';

            let flowupKeyFrames =
                '\
            @-webkit-keyframes flowup {\
                0% {\
                    -webkit-transform: translate3d(0, 0, 0);\
                    transform: translate3d(0, 0, 0);\
                }\
                100% {\
                    -webkit-transform: translate3d(0, -DOUBLE, 0);\
                    transform: translate3d(0, -DOUBLE, 0);\
                }\
            }\
            @keyframes flowup {\
                0% {\
                    -webkit-transform: translate3d(0, 0, 0);\
                    transform: translate3d(0, 0, 0);\
                }\
                100% {\
                    -webkit-transform: translate3d(0, -DOUBLE, 0);\
                    transform: translate3d(0, -DOUBLE, 0);\
                }\
            }';
            let halfTime = parseFloat(this.animationTime)/2+'s'
            let scrollOneCss = scrollOne.replace(/ANIMATIONTIME/g, this.animationTime)
            let mid = scrollTwo.replace(/HALFTIME/g, halfTime)
            let scrollTwoCss = mid.replace(/ANIMATIONTIME/g, this.animationTime)
            let rowupCss = rowupKeyFrames.replace(/A_DYNAMIC_VALUE/g, y);
            let flowupCss = flowupKeyFrames.replace(/DOUBLE/g, double);
             style.innerHTML = scrollOneCss+scrollTwoCss+rowupCss+flowupCss
            this.$refs.scrollBox.appendChild(style);
        },
        setScrollHeight() {
            this.$nextTick(()=>{
                let height = `${window.getComputedStyle(this.$refs.scrollOne).height}`
                let double =parseInt(height)*2+'px'
                this.addKeyFrames(height,double)
            })
        },
        
    },
    beforeDestroy() {
        if(this.timer){
            clearTimeout(this.timer)
        }
    },
}
</script>
