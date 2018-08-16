// let routeMap = new Map();
import selectDemo from './views/demoIndex';
import blankPage from './views/blankPage';
import initCustProps from './views/initCustProps';
import initCustProps1 from './views/initCustProps1';
import mxGraphIndex from './views/mxGraphIndex';
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
    }, {
        path: 'initCustProps',
        component: initCustProps
    }, {
        path: 'initCustProps1',
        component: initCustProps1
    }, {
        path: './mxGraphIndex',
        component: mxGraphIndex
    }]
}, {
    path: './blankPage',
    component: blankPage
}];
export default routers;