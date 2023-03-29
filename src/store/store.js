import { configureStore } from '@reduxjs/toolkit';
import  modalReducer  from './modalReducer';


// create store
export const store = configureStore({
	reducer: {
		modal: modalReducer
	}
});