import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Detail from '../Detail'
import SearchResults from '../SearchResults'
import NotFound from '../NotFound';
import '../../app.scss'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/items',
      element: <SearchResults />
    },
    {
      path: '/items/:id',
      element: <Detail />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ]);

  return routes;
};

function App() {


  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
