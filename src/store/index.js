import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import personal from './personal';
import shop from './shop';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        home,
        personal,
        shop
    }
})
