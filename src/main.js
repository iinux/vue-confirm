import Vue from 'vue'
import App from './App.vue'
import confirmRegistry from './components/plugins/confirm/index'

Vue.use(confirmRegistry)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
