// plugins/jquery.js

import Vue from 'vue';
import jQuery from 'jquery';

// 在 Vue 实例中全局注册 jQuery
Vue.prototype.$jQuery = jQuery;
Vue.prototype.$ = jQuery;
Vue.prototype.jQuery = jQuery;

window.$ = jQuery;
window.jQuery = jQuery;
window.$jQuery = jQuery;
