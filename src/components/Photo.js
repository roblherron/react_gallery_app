import React from 'react';

const Photo = (props) => {
    const url = `https://live.staticflickr.com/${props.data.server}/${props.data.farm}/${props.data.id}_${props.data.secret}.jpg`;
    return (
    <li className="photo-container">
        <img src={url} alt="" className="photo-container"/>
    </li>)
};


export default Photo;