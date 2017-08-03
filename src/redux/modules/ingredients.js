import database from '../fire';

export const FETCH_INGREDIENTS_PENDING = 'ingredients/get/pending';
export const FETCH_INGREDIENTS_SUCCESS = 'ingredients/get/success';
export const ADD_INGREDIENTS_PENDING = 'add/get/pending';
export const ADD_INGREDIENTS_SUCCESS = 'add/get/success';


const INITIAL_STATE = {ingredients: []};

export function ingredientReducer(state = INITIAL_STATE, action = {}) {

  switch(action.type) {
    case FETCH_INGREDIENTS_SUCCESS:
      return Object.assign({}, state, {
        ingredients: action.ingredients,
        isPending: false
      })

    case FETCH_INGREDIENTS_PENDING:
      return Object.assign({}, state, {
        isPending: true
      })

    case ADD_INGREDIENTS_SUCCESS:
      const ingredients = Object.assign({}, state.ingredients, action.ingredient)
      return Object.assign({}, state, {
        ingredients: ingredients,
        isPending: false
      })

    default:
      return state;
  }
}


const fetchIngredientsPending = () => ({ type: FETCH_INGREDIENTS_PENDING });
const fetchIngredientsDone = (ingredients) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  ingredients: ingredients
});


const addIngredientsPending = () => ({ type: ADD_INGREDIENTS_PENDING });
const addIngredientsSuccess = (ingredient) => ({
  type: ADD_INGREDIENTS_SUCCESS,
  ingredient: ingredient
});


export function fetchIngredients() {
    return dispatch => {
      dispatch(fetchIngredientsPending());
      return database.ref('/ingredients').once('value', snap => {
        const ingredients = snap.val();
        dispatch(fetchIngredientsDone(ingredients))
      })
      .catch((error) => {
        console.log(error);
        // TODO: Show this error on frontend
      });
    };
}


export function addIngredient({ name, tags=[] }) {
    const ingredient = {
      name: name,
      tags: tags
    }

    return dispatch => {
      dispatch(addIngredientsPending());
      const ingredientRef = database.ref('/ingredients');
      ingredientRef.push(ingredient).then((data) => {
        const key = data.key
        const ingredientPayload = {};
        ingredientPayload[key] = ingredient;
        dispatch(addIngredientsSuccess(ingredientPayload));
      }).catch((error) => {
        console.log(error);
        //TODO: Show the error in the front end
      });
    };
}
