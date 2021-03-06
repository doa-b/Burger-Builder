import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
    deleted: false
};

const purchaseBurgerSucces = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
};

const fetchOrdersSucces = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return updateObject(state, {purchased: false});
        case actionTypes.PURCHASE_BURGER_START: return updateObject(state, {loading: true});
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSucces(state,action);
        case actionTypes.PURCHASE_BURGER_FAIL: return updateObject(state, {loading: false});
        case actionTypes.FETCH_ORDERS_START: return updateObject(state, {loading: true, deleted: false});
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSucces(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return updateObject(state, {loading: false});
        case actionTypes.DELETE_ORDER_START: return updateObject(state, {loading: true});
        case actionTypes.DELETE_ORDER_SUCCESS: return updateObject(state, {loading: false, deleted: true});
        case actionTypes.DELETE_ORDER_FAILED: return updateObject(state, {loading: false});
        default: return state;
    }
};

export default reducer;