// let routeMap = new Map();
import selectDemoIndex from './views/selectDemoIndex';
// routeMap.set('selectDemo', selectDemoIndex)

const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/selectDemoIndex',
    meta: {
        title: '自定义下拉框组件'
    },
    component: selectDemoIndex
}];
export default routers;