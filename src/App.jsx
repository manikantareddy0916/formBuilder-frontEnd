import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Home from "./components/home"
import NewForm from "./components/newForm"
import SurveyForm from './components/surveyForm'
import { startAllForms } from './action/createForm-Action'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startAllForms());
  }, []);
  return (
    <BrowserRouter >
    <div>
        <nav>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form/create' element={<NewForm />}/>
          <Route path='/surveyForm' element={<SurveyForm />}/>
{/* 

     
          <Route path='/success' element={<Success />}/>
          <Route path='/cancel' element={<Failure />}/> */}


        </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
