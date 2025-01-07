import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout.tsx';
import Home from './screens/Home.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
