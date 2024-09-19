import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Layout from '../Layout'
import Button from '../../components/Button'
import './detail.scss'

const Detail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`http://localhost:3001/api/items/${id}`); 

  return (
    <Layout>
      {loading && <p>Cargando detalles del producto...</p>}
      {error && <p>Error al cargar el producto: {error}</p>}
      {product && (
        <div className="product-detail">
          <div className="product-detail__image-container">
            <img src={product.thumbnail} alt={product.title} className="product-detail__image" />
          </div>
          <div className="product-detail__info">
            <h1 className="product-detail__title">{product.title}</h1>
            <p className="product-detail__price">Precio: ${product.price}</p>
            <Button>Comprar</Button>
            <p className="product-detail__condition">Condición: {product.condition}</p>
            <p className="product-detail__description">{product.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Detail;
