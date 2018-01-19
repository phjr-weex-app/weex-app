import App from './index.vue';
import router from './router/index';
import store from '@/store/index';
import axios from 'axios';
import Vuex from 'vuex';
import mixins from './mixins';

import { appRequire, myAxios } from './assets/require.js'

const modal = weex.requireModule('modal')
if (WXEnvironment.platform == 'Web') {
  modal.toast({ message: 'web端' })
  Vue.prototype.$http = myAxios
} else {
  modal.toast({ message: 'app' })
  Vue.prototype.$http = appRequire
}

Vue.prototype.apiUrl = 'http://112.74.31.159:8233/smy-worker-web';

// register global mixins.
Vue.mixin(mixins);

new Vue(
  Vue.util.extend({
    el: '#root',
    router }, App)
)

/**
 * 暂时注释，否则每次修改后会回到首页
 */

// router.push({path: '/'})
