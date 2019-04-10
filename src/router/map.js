export default {
    '/broadcast': {
        meta: {title: '竖直方向弹幕'},
        component: (resolve)=>{
            require(['pages/broadcast'], resolve)
        }
    }
}