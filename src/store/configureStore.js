import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import allFormsReducer from '../redux/formsRedux'

export function configureStore(){
    const store= createStore(combineReducers({
        
        allForms : allFormsReducer,
    

    }),applyMiddleware(thunk))
    return store
}