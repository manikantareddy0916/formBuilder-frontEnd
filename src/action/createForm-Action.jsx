import axios from '../config/axios'


export const startCreateForm =({formData,navigate})=>{
    return async( dispatch)=>{
        try{
         console.log('dis',formData)
          const response = await axios.post('/api/form/create',formData)
        console.log('jjjjjjjj',response.data)
        dispatch(createForm(response.data))
        navigate('/');

          
      } catch (e) {
          console.log('catch',e)
        }
    }
    
}
const createForm=(form)=>{
    return {
        type: 'ADD_FORM',
        payload: form
    }
}


//get all employees
export const startAllForms =()=>{
    return async (dispatch) =>{
        try{
            const resp = await axios.get('/api/Allforms')
            //console.log('allAdress',resp.data)
            dispatch(getAllForms(resp.data))
        }
        catch(e){
            console.log('error',e)
        }
    }
}
const getAllForms =(allForms)=>{
    return {
        type : 'ALL_FORMS',
        payload : allForms
    }
}

