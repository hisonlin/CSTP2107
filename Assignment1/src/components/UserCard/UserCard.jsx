import React from 'react'
import PropTypes from 'prop-types'
import './UserCard.css'
import { Card, Flex, Avatar, Box, Text } from '@radix-ui/themes';

const UserCard = ({ user }) => {

    const fullName = user.first_name + " " + user.last_name;

    return (
        // <div className="card-container">
        //     <div className="image-container">
        //         <img src={user.avatar} alt={fullName} />
        //     </div >
        //     <div className="info-container">
        //         <div className="name">{fullName}</div>
        //         <div className="email">{user.email}</div>

        //     </div>

        // </div>

        <Card className='card' style={{ background: '#e2dfdf'}}>
            <Flex gap="3" align="center" >
                
                <Avatar
                    size="8"
                    src={user.avatar}
                    radius="full"
                    fallback={fullName} //The fallback element to render when an image is not available.
                />
                <Box>
                    <Text as="div" size="5" weight="bold">
                        {fullName}
                    </Text>
                    <Text as="div" size="2" color="blue">
                        {user.email}
                    </Text>
                </Box>
            </Flex>
        </Card>

    )
}

UserCard.propTypes = {
    userInfo: PropTypes.any

}

export default UserCard;
