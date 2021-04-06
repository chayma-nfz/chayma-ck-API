import React from 'react'
import { Card } from 'react-bootstrap'

import './User.css'

const User = ({ user }) => {
  return (
    <Card className="chayma-user"  >
      <Card.Header>{user.id}</Card.Header>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <span>{user.usermane}</span>
          <span>{user.email}</span> 
          <br/>
         <span>{user.website}</span>
         <br/>
         <span>{user.phone}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default User
