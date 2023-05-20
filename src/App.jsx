
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './Blogs'
import Details from './Details'
import Create from './Create'


function App() {
 
//  console.log(isFetching);

  return (
    
  <div className=' container '>
    <Routes>
    <Route path='/' element={<Blogs></Blogs>}> </Route>
    <Route path='/details/:id' element={<Details></Details>}> </Route>
    <Route path='/create' element={<Create></Create>}></Route>

  </Routes>
  </div>
    
  )
}

export default App
