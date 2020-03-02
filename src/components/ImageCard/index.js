import React from 'react';
import "./style.css";
// import PropTypes from 'prop-types';

function ImageCard(props) {
    return (

        <div className="img-container d-flex flex-row">
            <div className="row">
                <div className="col-sm">

                    <button data-id={props.id} onClick={() => { props.clickImage(props.id); props.shuffle() }}>
                        <img src={props.image} alt={props.name} className="img-thumbnail"></img>

                    </button>
                </div>

            </div>
        </div>

    )
}

// ImageCard.propTypes = {
//     images: PropTypes.array.isRequired
// }

export default ImageCard;