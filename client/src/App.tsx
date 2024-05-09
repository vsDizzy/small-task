import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ListFiles } from './components/ListFiles/ListFiles'
import { listFilesLoader } from './components/ListFiles/listFilesLoader'
import { RouteError } from './components/RouteError'

function App() {
  const router = createBrowserRouter([
    {
      path: '/*',
      loader: listFilesLoader,
      element: <ListFiles />,
      errorElement: <RouteError />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
