import { useRoutes, BrowserRouter as Router } from 'react-router-dom'
import { SearchContextProvider } from '../../context'
import { Navigate } from 'react-router-dom'
import Detail from '../Detail'
import SearchResults from '../SearchResults'
import '../../app.scss'
import Navbar from '../../components/Navbar'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/" />
    },
    {
      path: '/items',
      element: <SearchResults />
    },
    {
      path: '/items/:id',
      element: <Detail />
    }
  ]);
  return routes;
};

function App() {
  return (
    <SearchContextProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </SearchContextProvider>

  )
}

export default App
