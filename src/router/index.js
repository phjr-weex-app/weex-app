/**
 * Created by zwwill on 2017/8/29.
 */
import Router from 'vue-router'
import ViewHome from '../views/home.vue'
import ViewTopic from '../views/topic.vue'
import ViewClass from '../views/class.vue'
import ViewShop from '../views/shop.vue'
import ViewMy from '../views/my.vue'
import ViewLogin from '../views/login.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: ViewHome },
        { path: '/topic', component: ViewTopic },
        { path: '/class', component: ViewClass },
        { path: '/shop', component: ViewShop },
        { path: '/my', component: ViewMy },
        { path: '/login',name:'ViewLogin', component: ViewLogin }
    ]
})