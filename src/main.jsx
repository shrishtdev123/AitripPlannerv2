import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateTrip } from './create-trip'
import { Header } from './components/custom/Header'
import { Toaster } from './components/ui/sonner'
import { Trial } from './components/custom/Trial'
import { Viewtrip } from './view-trip/[tripId]'
import { Mytrips } from './mytrips'


const router=createBrowserRouter(
  [
    {path:"/",
     element:<App/>
    },
    {
      path:"/create-trip",
      element:<CreateTrip/>
    },
    {
      path:"/getdata",
      element:<Trial/>
    },
    {
      path:"/view-trip/:tripId",
      element:<Viewtrip/>
    },
    {
      path:"/my-trip",
      element:<Mytrips/>
    }


  ]

)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header/>
     <Toaster />
    <RouterProvider router={router}/>
  </StrictMode>,
)
