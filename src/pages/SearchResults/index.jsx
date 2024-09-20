import React, { useContext, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context'
import { useFetch } from '../../hooks/useFetch'
import Layout from '../../wrapper/Layout'
import Card from '../../components/Card'
import './searchResult.scss'

const SearchResults = () => {
  const { searchTerm, updateSearchResults, filteredProducts } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || searchTerm;

  const { data: items, loading, error } = useFetch(`http://localhost:3001/api/items?search=${query}`);


  useEffect(() => {
    if (items.length) {
      updateSearchResults(items);
    }
  }, [items]);

  return (
    <Layout>
      <div>
        <p className='search__title'>Resultados de la búsqueda para: <span>{query}</span></p>
        {loading && <p>Cargando productos...</p>}
        {error && <p>Error al cargar productos: {error}</p>}
        <div className="product-list">
          {filteredProducts.map((product) => {
            const highResImage = product.thumbnail?.replace('-I.jpg', '-O.jpg');

            return (
              <Card
                key={product.id}
                id={product.id}
                image={highResImage || product.thumbnail}
                price={product.price}
                description={product.title}
                condition={product.condition}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default SearchResults;
