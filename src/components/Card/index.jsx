import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import './card.scss'

const Card = ({ image, price, description, condition, id }) => {

  const navigate = useNavigate();
  const defaultClassName = 'card';
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/items/${id}`);
  };

  return (
    <div className={defaultClassName} onClick={handleClick} >
      <div className={`${defaultClassName}__image`}>
        <img src={image} alt={description} loading="lazy" />

      </div>
      <div className={`${defaultClassName}__details`}>
        <p className={`${defaultClassName}__price`}>${price}</p>
        <p className={`${defaultClassName}__description`}>{description}</p>
      </div>
      <div>
        <p className={`${defaultClassName}__condition`}>{t(`condition.${condition}`)}</p>
      </div>
    </div>
  )
}

export default Card
