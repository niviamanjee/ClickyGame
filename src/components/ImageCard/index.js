import React from 'react';
import "./style.css";

function ImageCard(props) {
    return (

        <div className="img-container">
            <button data-id={props.id} onClick={() => { props.clickImage(props.id); props.shuffle() }}>
                <img src={props.image} alt={props.name} className="img-thumbnail"></img>

            </button>
        </div>

    )
}

export default ImageCard;