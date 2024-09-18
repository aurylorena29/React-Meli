import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search'); 


  return (
    <Layout>
      <div>
        <h1>Resultados de la búsqueda para: {query}</h1>
      </div>
    </Layout>
  );
};

export default SearchResults;