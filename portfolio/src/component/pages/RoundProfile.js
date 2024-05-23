import React from 'react';
import "../css/RoundProfile.css"
import profile from "../images/profile.jpeg"

const RoundProfile = ({ imageUrl, name }) => {
    return (
        <div className="round-profile">
            <img src={profile} alt={name} className="round-profile__image" />
            <p className="round-profile__name">{name}</p>
        </div>
    );
};

export default RoundProfile;
