import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout'

const Detail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <Layout>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
          <p>Precio: ${product.price}</p>
          <p>Condición: {product.condition}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </Layout>
  );
};

export default Detail;