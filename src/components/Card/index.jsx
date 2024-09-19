import { useNavigate } from "react-router-dom"
import Layout from "../../pages/Layout"
import './card.scss'

function Card({ image, price, description, condition, id }) {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/items/${id}`); 
    };

  return (
    <>
      <Layout>
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <div className="card__image">
            <img src={image} alt={description} />
          </div>
          <div className="card__details">
            <p className="card__price">${price}</p>
            <p className="card__description">{description}</p>
          </div>
          <div>
            <p className="card__condition">{condition}</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Card
