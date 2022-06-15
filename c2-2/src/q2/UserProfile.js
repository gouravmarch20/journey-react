import React, { useState } from 'react'
import { members } from './data'
const UserProfile = () => {
  const [currentUserProfie, setCurrentUserProfie] = useState([])
  return (
    <div>
      {console.log(currentUserProfie)}
      {currentUserProfie && currentUserProfie.password?.length >= 9 ? (
        <div>
          <h1>{currentUserProfie.first_name}</h1>
          <h4>{currentUserProfie.date_of_birth}</h4>
          <h5>{currentUserProfie.subscription.status}</h5>
          <h3>{currentUserProfie.subscription.plan}</h3>
        </div>
      ) : currentUserProfie && currentUserProfie.password?.length <= 9 ? (
        <h1>faker profile</h1>
      ) : null}
      {members.map(member => {
        const { first_name } = member
        return (
          <div>
            <p>{first_name}</p>
            <button onClick={() => setCurrentUserProfie(member)}>Check</button>
          </div>
        )
      })}
    </div>
  )
}

export default UserProfile
