import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  return (
    <section className='min-h-[100vh]'>
      <RouterProvider router={ routes } />
    </section>
  )
}

export default App
