import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Assuming you have some CSS for the card

const Card = ({ sectionCard }) => {
    return (
        <div className="card">
            <img src={sectionCard.iconUrl} alt={sectionCard.title} className="card-icon" />
            <h3 className="card-title">{sectionCard.title}</h3>
            <p className="card-text">{sectionCard.text}</p>
        </div>
    );
}

Card.propTypes = {
    sectionCard: PropTypes.shape({
        iconUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
