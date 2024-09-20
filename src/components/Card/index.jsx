import { useNavigate } from "react-router-dom"
import Layout from "../../wrapper/Layout"
import './card.scss'

const  Card = ({ image, price, description, condition, id }) => {

    const navigate = useNavigate();
    const defaultClassName = 'card';

    const handleClick = () => {
      navigate(`/items/${id}`); 
    };

  return (
    <>
      <Layout>
        <div className={defaultClassName} onClick={handleClick} >
          <div className={`${defaultClassName}__image`}>
            <img src={image} alt={description} loading="lazy"/>
          </div>
          <div className={`${defaultClassName}__details`}>
            <p className={`${defaultClassName}__price`}>${price}</p>
            <p className={`${defaultClassName}__description`}>{description}</p>
          </div>
          <div>
            <p className={`${defaultClassName}__condition`}>{condition}</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Card
