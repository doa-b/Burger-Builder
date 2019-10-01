import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const purchaseBurgerSucces = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
};

export const fetchOrdersSucces = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
        error: error
    }
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
};

export const deleteOrderStart = () => {
    return {
        type: actionTypes.DELETE_ORDER_START
    }
};

export const deleteOrderSuccess = () => {
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS
    }
};

export const deleteOrderFailed = (error) => {
    return {
        type: actionTypes.DELETE_ORDER_FAILED
    }
};


// export const deleteOrder = (orderId) => {
//     return {
//         type: actionTypes.DELETE_ORDER,
//         orderId: orderId
//     }
// };

// asynchronous actionCreators

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                // console log(response.data);
                dispatch(purchaseBurgerSucces(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        // console log(userId);
        dispatch(fetchOrdersStart());
        // const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        // axios.get('/orders.json' + queryParams)
        axios.get('/orders.json', {
            params: {
                auth: token,
                orderBy: '"userId"',
                equalTo: `"${userId}"`,
            }
        })
            .then(res => {
                // we get back an object
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push(
                        {
                            ...res.data[key],
                            id: key
                        });
                }
                dispatch(fetchOrdersSucces(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err))
            });
    }};

export const deleteOrder = (token, orderId) => {
    return dispatch => {
        dispatch(deleteOrderStart());
        axios.delete('/orders/' + orderId + '.json?auth=' + token)
            .then(response => {
                dispatch(deleteOrderSuccess());
            })
            .catch(error => {
                dispatch(deleteOrderFailed(error));
            });
    };
};