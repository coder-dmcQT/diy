export default {
    namespaced:true,
    state:{
        decroration_type_index:0
    },
    mutations:{
        /**
         * 改变当前customizer的修饰种类索引
         * @param {object} state 位于本namespace下的state
         * @param {number} payload 需要改变的新索引
         */
        changeDecrorationTypeIndex(state,payload){
            if(state.decroration_type_index != payload)
            state.decroration_type_index = payload;
        }
    }
}