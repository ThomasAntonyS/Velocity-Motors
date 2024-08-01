import userContext from '../../Context/userContext'
import React, { useContext } from 'react'


const Profile = () => {

  const {user,loggedIn} = useContext(userContext)

  return (
    <div>
      <p>Hi</p>
      <p>{user}</p>
      {
        (loggedIn)? <p>Logged in</p> : <p>Not logged in</p>
      }
    </div>
  )
}

export default Profile