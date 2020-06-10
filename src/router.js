// let routeMap = new Map();
import selectDemo from './views/demoIndex';
import blankPage from './views/blankPage';
import initCustProps from './views/initCustProps';
// import mxGraphIndex from './views/initCustProps';
// routeMap.set('selectDemo', selectDemo)
// routeMap.set('blankPage', blankPage)

const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    redirect: 'demoIndex',
    children: [{
        path: 'demoIndex',
        component: selectDemo
    }, {
        path: 'initCustProps',
        component: initCustProps
    }]
}, {
    path: './blankPage',
    component: blankPage
}];
export default routers;