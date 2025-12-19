import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'


const REPO_NAME = '1-st-react'  

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <h1>Home Page</h1> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ],
  {
    basename: `/${REPO_NAME}`
  }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
