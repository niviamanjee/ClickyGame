import React from 'react';
import "./style.css";

function ImageCard(props) {
    return (

        <div className="img-container">
            <img src={props.image} alt={props.name} class="img-thumbnail"></img>
            <button data-id={props.id} onClick={() => props.clickImage(props.id)} className="btn btn-danger">
                Squeken Squeker
            </button>
        </div>

    )
}

export default ImageCard;