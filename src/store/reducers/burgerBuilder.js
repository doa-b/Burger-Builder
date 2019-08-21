import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const burgerBuilder = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const newIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updatedIngredients = updateObject(state.ingredients, newIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] };
            return updateObject(state, updatedState);

        case actionTypes.REMOVE_INGREDIENT:
            const newIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
            const updatedIngs = updateObject(state.ingredients, newIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] };
            return updateObject(state, updatedSt);

        case actionTypes.REMOVE_ALL_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    ...state.ingredients,
                    salad: 0,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
                },
                totalPrice: 4
            });

            return {
                ...state, // does not create deep clones
                ingredients: {
                    ...state.ingredients,
                    salad: 0,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
                },
                totalPrice: 4
            };

        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 4,
                error: false
            });

            case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });

        default:
            return state;
    }
};

export default burgerBuilder;
