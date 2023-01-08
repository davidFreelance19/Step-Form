import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Index, {action as actionNuevoCliente} from './pages/Index'
import Plan, {action as actionPlan} from './pages/Plan'
import Custom from './pages/Custom'
import Summary, {action as actionSummary} from './pages/Summary'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        action: actionNuevoCliente,
      },
      {
        path: '/plan',
        element: <Plan />,
        action: actionPlan
      },
      {
        path: '/customs',
        element: <Custom />
      },
      {
        path: '/summary',
        element: <Summary />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>,
)
