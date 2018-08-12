const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/selectDemoIndex.vue'], resolve)
}];
export default routers;