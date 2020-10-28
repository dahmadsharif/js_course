import { createAction, props } from '@ngrx/store';

export const addToCart = createAction('addToCart', props<{
    category: string, 
    currency: string, 
    images: string, 
    label: string, 
    quantity: string, 
    subCategory: string, 
    _id: string, 
}>());