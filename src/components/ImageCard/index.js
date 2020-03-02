import React from 'react';
import "./style.css";
// import PropTypes from 'prop-types';

function ImageCard(props) {
    return (

        <button className="img-container" data-id={props.id} onClick={() => { props.clickImage(props.id); props.shuffle() }}>
            <img src={props.image} alt={props.name} className="img-thumbnail"></img>

        </button>

    )
}

// ImageCard.propTypes = {
//     images: PropTypes.array.isRequired
// }

export default ImageCard;