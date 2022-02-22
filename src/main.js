import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from './router/routes';


// export const bus = new Vue();

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

Vue.filter('chtext', function(val) {
    if (val == false) {
        return "Undone"
    }
    if (val == true) {
        return "Done"
    }
    if (val == "Done") {
        return "Done"
    }
    if (val == "Undone") {
        return "Undone"
    }
})

Vue.directive('textColor', (el, binding) => {
    el.style.fontWeight = 'bold';
    el.style.fontSize = '14px';
    if (binding.value == "High") {
        el.style.color = 'orange'
    } else if (binding.value == "Low") {
        el.style.color = 'yellow'
    } else {
        el.style.color = 'aqua'
    }
})

Vue.config.productionTip = false

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')