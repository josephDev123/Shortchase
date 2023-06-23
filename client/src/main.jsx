import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import {RouterProvider} from "react-router-dom";
import { routes } from './utils/routes';
import { useQuery, QueryClient,QueryClientProvider} from 'react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={routes} />  
    </QueryClientProvider>
 
  </React.StrictMode>
)
