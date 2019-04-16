<style>
.root__page{
    padding-top: 60px;
}
.broadcast__box{
    width: 750px;
    height: 400px;
    overflow: hidden;
    padding: 0 10px;
    margin: 0 auto;
    border: 1px solid #f00;
}

</style>

<template>
    <Layout class="root__page">
        <Broadcast :initData="initData" class="broadcast__box" :amount="7" animationTime="6s"></Broadcast>
        
        
    </Layout>
</template>
<script>
import Broadcast from 'components/broadcast'
export default {
    components:{
        Broadcast
    },
    data() {
        return {
            initData: [],
        }
    },
    created() {
        for(let i=0;i<33;i++){
            this.initData.push({
                name: '哈哈哈大',
                number: 10001+i
            })
        }
    },
    
}
</script>
