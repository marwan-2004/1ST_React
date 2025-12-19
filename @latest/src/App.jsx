
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'


const rebo_name='1-st-react'

let route=createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
  {index:true,element:1-st-react},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
  {path:'*',element:<NotFound/>}
  

  ]},
  
],{
  basename:`/${rebo_name}`
}
)
function App() {
  return <>

  <RouterProvider router={route}/> 
  
  </>
}

export default App
