import React, { useState } from "react"
import {
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
} from "@ant-design/icons"
import "./MyCardItem.css"
const MyCardItem = ({ user, handleDelete, handleModal }) => {
  const { username, email, phone, link, avatarUrl, key } = user
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="myCardItem_wrapper" key={key}>
      <div className="myCardItemImage_wrapper">
        <img
          src={`${
            avatarUrl
              ? avatarUrl
              : "https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
          }`}
          alt="Avatar"
          className="myCardItem_image"
          loading="lazy"
        />
      </div>

      <div className="myCardItem_body">
        <h3 className="heading">{username}</h3>

        <p className="myCardItem_body_content">
          {" "}
          <span>
            <MailOutlined />
          </span>{" "}
          <span className="myCardItem_body_content_text">{email}</span>
        </p>
        <p className="myCardItem_body_content">
          {" "}
          <span>
            <PhoneOutlined />
          </span>
          <span className="myCardItem_body_content_text">{phone}</span>
        </p>
        <p className="myCardItem_body_content">
          {" "}
          <span>
            <GlobalOutlined />
          </span>
          <span className="myCardItem_body_content_text">{link}</span>
        </p>
      </div>

      <ul className="myCardItem_action">
        <li className="myCardItem_action_btn">
          <button>
            <HeartOutlined
              onClick={() => setIsLiked((prev) => !prev)}
              className={`${isLiked ? "icon_heart" : "icon_heart_black"} `}
            />
          </button>
        </li>
        <li className="myCardItem_action_btn">
          <button
            onClick={() => {
              handleModal(true, key)
            }}
          >
            <EditOutlined className="icon_edit" />
          </button>
        </li>
        <li className="myCardItem_action_btn">
          <button onClick={() => handleDelete(key)}>
            <DeleteOutlined className="icon_trash" />
          </button>
        </li>
      </ul>
    </div>

  )
}

export default MyCardItem
