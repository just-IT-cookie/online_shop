import { createStore } from "vuex";

export default createStore({
  state: {
    items_ids: [],
  },
  mutations: {
    add_item_id(state, id) {
      state.items_ids.push(id);
      localStorage.setItem(id, id);
    },
  },
  actions: {
    getData() {
      let items_ids_tmp = [];
      for (let i = 0; i < localStorage.length; i++) {
        items_ids_tmp.push(localStorage.key(i));
      }
      return items_ids_tmp;
    },
  },
  modules: {},
});
