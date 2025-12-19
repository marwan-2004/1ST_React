
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'




let route=createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
  {path:'1ST_React',element:<About/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
  {path:'*',element:<NotFound/>}
  

  ]},
  
]


)
function App() {
  return <>

  <RouterProvider router={route}/> 
  
  </>
}

export default App
