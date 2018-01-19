import Router         from 'vue-router';
import LoginView      from '@/views/login/login.vue';
import TestView       from '@/views/test/test1.vue';
import RegisterView   from '@/views/register/register.vue';
import IndexView      from '@/views/index/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
        name: 'IndexView',
        component: IndexView
    },
    {
      path:'/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path:'/test',
      name: 'TestView',
      component: TestView
    },
      {
          path:'/register',
          name: 'RegisterView',
          component: RegisterView
      }
  ]
})
