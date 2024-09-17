import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search'); // Obtener el parámetro de búsqueda

  // Aquí iría la lógica para obtener los resultados de búsqueda según `query`

  return (
    <div>
      <h1>Resultados de la búsqueda para: {query}</h1>
      {/* Mostrar resultados de la búsqueda aquí */}
    </div>
  );
};

export default SearchResults;