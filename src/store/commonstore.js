import { createStore } from "redux";
import { reducer } from './../reducer/typesprintingcrud';

export const store = createStore(reducer);
store.subscribe(() => {
    console.log('Store is subscribed ',store.getState());
})