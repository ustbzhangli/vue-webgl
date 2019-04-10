<style>
.root__page{
    padding-top: 60px;
}
.scroll__box{
    width: 750px;
    height: 400px;
    overflow: hidden;
    padding: 0 10px;
    margin: 0 auto;
    border: 1px solid #f00;
}
.scroll__item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    font-size: 30px;
}
.scroll__content{
    animation: 5s rowup linear infinite normal;
}
</style>

<template>
    <Layout class="root__page">
        <section class="scroll__box" ref="scrollBox">
            <ul class="scroll__content" ref="scrollContent">
                <li class="scroll__item" v-for="(item,index) in scrolllist" :key="index">
                    <p class="name">{{item.name}}</p>
                    <p class="number">{{item.number}}</p>
                </li>
            </ul>
            <ul class="scroll__content" ref="scrollContent">
                <li class="scroll__item" v-for="(item,index) in scrolllist" :key="index">
                    <p class="name">{{item.name}}</p>
                    <p class="number">{{item.number}}</p>
                </li>
            </ul>
        </section>
        
        
    </Layout>
</template>
<script>
export default {
    data() {
        return {
            scrolllist:[{
                name: '哈哈哈大',
                number: 100001
            },{
                name: '哈哈哈大',
                number: 100002
            },{
                name: '哈哈哈大',
                number: 100003
            },{
                name: '哈哈哈大',
                number: 100004
            },{
                name: '哈哈哈大',
                number: 100005
            },{
                name: '哈哈哈大',
                number: 100006
            },{
                name: '哈哈哈大',
                number: 100007
            },{
                name: '哈哈哈大',
                number: 100008
            },{
                name: '哈哈哈大',
                number: 100009
            },{
                name: '哈哈哈大',
                number: 1000010
            },{
                name: '哈哈哈大',
                number: 1000011
            }],
            scrolllist2:[{
                name: '哈哈哈大',
                number: 100001
            },{
                name: '哈哈哈大',
                number: 100002
            },{
                name: '哈哈哈大',
                number: 100003
            },{
                name: '哈哈哈大',
                number: 100004
            },{
                name: '哈哈哈大',
                number: 100005
            },{
                name: '哈哈哈大',
                number: 100006
            }]
        }
    },
    mounted() {
        this.setScrollHeight()
    },
    methods: {
         addKeyFrames(y) {
            let style = document.createElement('style');
            style.type = 'text/css';
            let keyFrames =
                '\
            @-webkit-keyframes rowup {\
                0% {\
                    -webkit-transform: translate3d(0, 0, 0);\
                    transform: translate3d(0, 0, 0);\
                }\
                100% {\
                    -webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                    transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                }\
            }\
            @keyframes rowup {\
                0% {\
                    -webkit-transform: translate3d(0, 0, 0);\
                    transform: translate3d(0, 0, 0);\
                }\
                100% {\
                    -webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                    transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
                }\
            }';
            style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, y);
            this.$refs.scrollBox.appendChild(style);
        },
        setScrollHeight() {
            this.$nextTick(()=>{
                let height = `-${window.getComputedStyle(this.$refs.scrollContent).height}`
                this.addKeyFrames(height)
            })
        }
    }
}
</script>
