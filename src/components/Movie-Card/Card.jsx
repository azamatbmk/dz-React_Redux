/* eslint-disable react/prop-types */
import './Card.css'


const Card = ({poster, title, rating}) => {

  
    return (
        <div className='card-wrapper'>
            <div className='rating'>
                <img src="public\gold_star_icon.svg" alt="Звездочка" />
                <span>{rating}</span>
            </div>
            <img className='card-wrapper__img' src={poster} alt="Постер фильма" />
            <h2>{title}</h2>
            <div className='bottom-section'>
                <img src="public\like_icon.svg" alt="" />
                <span>В избранное</span>
            </div>
        </div>
    )
};

export default Card;