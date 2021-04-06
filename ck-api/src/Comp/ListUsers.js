import React, { useState, useEffect } from 'react'
import './ListUsers.css'
import User from './User'
import axios from "axios";


const ListUsers = () => {

  const [users, setUsers] = useState([]);
  

  const getUsers = () => {
   axios 
    .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(`error ${error}`))
  };

  useEffect(() => {
    getUsers()
  }, []);


  return (

    <div>
      <h1>Welcome, this is the checkpoint APIs </h1>
      
      <div className="list"  >
          {
            users.map(user => <User user={user} /> )
            }
        </div>
      
    </div>
  )
}

export default ListUsers
