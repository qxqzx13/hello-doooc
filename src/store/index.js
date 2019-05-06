import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import personal from './personal';
import shop from './shop';
import petmarket from './petmarket';
import petmarkettwo from './petmarkettwo';
import food from './food';
import daily from './daily';
import login from './login';

Vue.use(Vuex);

export default new Vuex.Store({
    mutations:{
        OUT_LOGIN(state){
            sessionStorage.userName = null;
            sessionStorage.userId = null;
        }
    },
    modules:{
        home,
        personal,
        shop,
        petmarket,
        petmarkettwo,
        food,
        daily,
        login
    }
})
