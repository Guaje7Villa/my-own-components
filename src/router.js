// let routeMap = new Map();
import selectDemo from './views/demoIndex';
import blankPage from './views/blankPage';
// routeMap.set('selectDemo', selectDemo)
// routeMap.set('blankPage', blankPage)

const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [{
        path: 'demoIndex',
        component: selectDemo
    }]
}, {
    path: './blankPage',
    component: blankPage
}];
export default routers;