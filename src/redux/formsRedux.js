const initialState={
    form :[] , allForms: []
}

export default function allFormsReducer(state = initialState, action){
        switch(action.type){
            case 'ADD_FORM' :{
               
                return{...state, form:[...state.form, action.payload]}
            }
            case 'ALL_FORMS':{
                return {...state, allForms: action.payload}
            }
           
           
            default:{
                return { ...state }
            }
        }
}