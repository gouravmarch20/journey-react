import React, { useState } from "react"

import "./MyCard.css"
import MyCardItem from "./MyCardItem"
import Modal from "../modal/Modal"
const MyCard = ({ setUserData, userData }) => {
  const [editUser, setEditUser] = useState({
    username: "",
    email: "",
    phone: "",
    link: "",
    avatarUrl: "",
    key: "",
  })

  const handleDelete = (key) => {
    setUserData(userData.filter((user) => user.key !== key))
  }
  const [isModalActive, setIsModalActive] = useState(false)
  const handleModal = (state, key) => {
    //update case
    if (key) {
      const val = userData.find((user) => user.key === key)
      setEditUser(val)
    }

    setIsModalActive(state)
  }
  const isValid = () => {
    if (
      editUser?.username &&
      editUser?.email &&
      editUser?.link &&
      editUser?.phone
    ) {
      return true
    }
  }
  const handleUpdate = (state, key) => {
    if (isValid()) {
      const newUserData = userData?.map((user) =>
        user?.key === key ? editUser : user
      )

      setUserData(newUserData)
      setIsModalActive(state)
    }
  }
  return (
    <>
      <div className="my_card_wrapper">
        <Modal
          handleModal={handleModal}
          isModalActive={isModalActive}
          editUser={editUser}
          setEditUser={setEditUser}
          handleUpdate={handleUpdate}
        />

        {userData?.map((user, index) => (
          <>
            <div className="my_card">
              <MyCardItem
                user={user}
                handleDelete={handleDelete}
                handleModal={handleModal}
              />
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default MyCard
