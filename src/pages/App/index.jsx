import { useRoutes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../Home'
import Detail from '../Detail'
import SearchResults from '../SearchResults'
import NotFound from '../NotFound';
import '../../app.scss'
import Navbar from '../../components/Navbar';

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
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
