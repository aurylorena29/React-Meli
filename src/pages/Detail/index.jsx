import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL

  // Aquí iría la lógica para obtener los detalles del producto usando `id`

  return (
    <div>
      <h1>Detalle del producto {id}</h1>
      {/* Mostrar los detalles del producto aquí */}
    </div>
  );
};

export default Detail;
