import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';

const Detail = () => {
  const { id } = useParams(); 

  return (
    <Layout>
      <div>
        <h1>Detalle del producto {id}</h1>
        
      </div>
    </Layout>
  );
};

export default Detail;
