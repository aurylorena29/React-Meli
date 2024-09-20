import React, { useContext, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context'
import { useFetch } from '../../hooks/useFetch'
import Layout from '../../wrapper/Layout'
import Card from '../../components/Card'


const SearchResults = () => {
  const { searchTerm, updateSearchResults, filteredProducts } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || searchTerm;
  const navigate = useNavigate();

  const { data: items, loading, error } = useFetch(`http://localhost:3001/api/items?search=${query}`);

  useEffect(() => {
    if (items.length) {
      updateSearchResults(items); 
    } 
  }, [items]); 

  return (
    <Layout>
    <div>
      <h1>Resultados de la búsqueda para: {query}</h1>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error}</p>}
      <div className="product-list">
        
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              price={product.price}
              description={product.title}
              condition={product.condition}
            />
          ))
        }
      </div>
    </div>
  </Layout>
  );
}

export default SearchResults;
