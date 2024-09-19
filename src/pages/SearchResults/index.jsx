import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from '../Layout'
import { SearchContext } from '../../context' 
import Card from '../../components/Card'

function SearchResults () {
  const { searchTerm, filteredProducts, updateSearchResults } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search'); 
  const [items, setItems] = useState([]); 

  useEffect(() => {
    if (query) {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
          setItems(data.results || []); 
          updateSearchResults(data.results); 
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [query, updateSearchResults]); 

  return (
    <Layout>
      <div>
        <h1>Resultados de la búsqueda para: {query}</h1>
        <div className="product-list">
          {filteredProducts.map(product => (
            <Card
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              price={product.price}
              description={product.title}
              condition={product.condition}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;