import React from 'react'
import PropTypes from 'prop-types'
import UserCard from '../UserCard/UserCard'
import './UserInfo.css'

const UserInfo =({data})=> {
  return (
    <div className='user-container'>
        {
            data.map((user, index)=>{
                return <UserCard user={user} key={index}/>
            })
        }
      
    </div>
  )
}

UserInfo.propTypes = {
    data: PropTypes.any

}

export default UserInfo;
