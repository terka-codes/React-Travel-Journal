import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const TravelCard = (props) => {
  return (
    <div class="travel-card">
        <img src={props.item.imageUrl} alt={`pictur of ${props.item.title}`} class="travel-card__image" />
        <div className="travel-card__text-box">
            <div class="travel-card__text-box__location">
                <FontAwesomeIcon icon={faLocationDot} class="travel-card__text-box__location__icon" />
                <p class="travel-card__text-box__location__name">{props.item.location}</p>
                <a href={props.item.googleMapsUrl} target="_blank" className="travel-card__text-box__location__maps">
                View on Google Maps
                </a>
            </div>
            <h2 class="travel-card__text-box__title">{props.item.title}</h2>
            <h4 class="travel-card__text-box__date">{props.item.startDate} - {props.item.endDate}</h4>
            <p class="travel-card__text-box__description">{props.item.description}</p>
        </div>
    </div>
  )
}

export default TravelCard