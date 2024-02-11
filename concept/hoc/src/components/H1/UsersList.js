import React, { useEffect, useState } from "react"
import H1 from "../../HOC/H1Search"

const UsersList = ({ data }) => {
  return (
    <div>
      <div>
        {" "}
        {data.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>{user.name}</strong>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const SearchUsers = H1(UsersList, "users")
