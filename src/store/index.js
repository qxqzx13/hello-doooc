import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import personal from './personal';
import shop from './shop';
import petmarket from './petmarket';
import petmarkettwo from './petmarkettwo';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        home,
        personal,
        shop,
        petmarket,
        petmarkettwo
    }
})
