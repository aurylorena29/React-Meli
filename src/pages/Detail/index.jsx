import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Layout from '../../wrapper/Layout';
import Button from '../../components/Button';
import './detail.scss';

const Detail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`http://localhost:3001/api/items/${id}`);
  const { data: descriptionData } = useFetch(`https://api.mercadolibre.com/items/${id}/description`);
  const { t } = useTranslation();
  const highResImage = product?.thumbnail?.replace('-I.jpg', '-O.jpg');

  return (
    <Layout>
      {loading && <p>Cargando detalles del producto...</p>}
      {error && <p>Error al cargar el producto: {error}</p>}
      {product && (
        <div className='product-detail'>
          <div className="product-detail__container">
            <div className="product-detail__image-container">
              <img src={highResImage || product.thumbnail} alt={product.title} className="product-detail__image" />
            </div>
            <div className="product-detail__info">
              <p className="product-detail__condition">{t(`condition.${product.condition}`)}</p>
              <h1 className="product-detail__title">{product.title}</h1>
              <p className="product-detail__price">${product.price}</p>
              <Button>Comprar</Button>
            </div>
          </div>
          <div className='product-detail__container product-detail--col'>
            <h1>Descripción del producto</h1>
            <p className="product-detail__description">{descriptionData?.plain_text || product.description}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Detail;