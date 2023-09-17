import PropTypes from "prop-types";

import "../styles/ServiceCard.css";

const ServiceCard = ({
  poster,
  title,
  discountedPrice,
  actualPrice,
  incomeCovers,
}) => {
  return (
    <div className="service-card">
      <div className="service-card__image">
        <img src={poster} alt="" />
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__price">
          {discountedPrice}
          <span className="service-card__discount">{actualPrice}</span>
        </p>
      </div>
      <div className="service-card__info">
        <p>Cover income from</p>
        <ul>
          {incomeCovers.map((incomeCover, index) => (
            <li key={index} className="service-card__item">
              {incomeCover}
            </li>
          ))}
        </ul>
      </div>
      <div className="service-card__cta">
        <button className="service-card__button">BUY NOW</button>
        <a className="service-card__link" href="./">
          know more
        </a>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  discountedPrice: PropTypes.string.isRequired,
  actualPrice: PropTypes.string.isRequired,
  incomeCovers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceCard;
