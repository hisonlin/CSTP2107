import React from 'react'
import PropTypes from 'prop-types'
import './UserCard.css'

const UserCard = ({ user }) => {

    const fullName = user.first_name + " " + user.last_name;

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={user.avatar} alt={fullName} />
            </div >
            <div className="info-container">
                <div className="name">{fullName}</div>
                <div className="email">{user.email}</div>

            </div>

        </div>

    )
}

UserCard.propTypes = {
    userInfo: PropTypes.any

}

export default UserCard;
