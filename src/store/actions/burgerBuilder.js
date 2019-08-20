import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

// synchronous actionCreators

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const removeAllIngredients = () => {
    return {
        type: actionTypes.REMOVE_ALL_INGREDIENTS
    }
};

export const setIngrediensts = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

// asynchronous actionCreators

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
                .then( response => {
                    dispatch(setIngrediensts(response.data));
                })
                .catch(error => {
                    dispatch (fetchIngredientsFailed());
                } )

    }
};