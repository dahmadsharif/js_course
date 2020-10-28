import { createReducer, on } from '@ngrx/store';
import { addToCart } from './cart.actions';



export const initialCart = []

const _cartReducer = createReducer(initialCart, 
	on(addToCart, (state, payload) => {
		const updateState = [...state, payload];
	return updateState;
}));

export function cartReducer(state, action) {
	return _cartReducer(state, action);
}