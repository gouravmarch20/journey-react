import React from "react"
import "./Modal.css"
import { CloseOutlined } from "@ant-design/icons"
const Modal = ({
  handleModal,
  isModalActive,
  editUser,
  setEditUser,
  handleUpdate,
}) => {
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEditUser((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <div className={`${isModalActive ? "modal_wrapper" : "modal_hidden"}  `}>
      <section className="modal">
        <div className="modal_main">
          <h2 className="modal_heading">Edit Info </h2>
          <div className="modal_close_icon" onClick={() => handleModal(false)}>
            <CloseOutlined />
          </div>
        </div>
        {/* modal body */}
        <div className="modal_body">
          {/* username  */}
          <div className="input_wrapper">
            <div className="input_label">
              <label htmlFor="username">
                <span className="required">*</span>
                Name:
              </label>
            </div>
            <div className="input_wrapper_2">
              <input
                type="text"
                name="username"
                placeholder="enter name"
                value={editUser?.username}
                id="username"
                required
                className={`input_container ${
                  editUser?.username ? "" : "input_label_error"
                }`}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input_wrapper">
            <div className="input_label"></div>

            <p className={` ${editUser?.username ? "" : "error_msg"}`}>
              This field is required
            </p>
          </div>
          {/* email */}
          <div className="input_wrapper">
            <div className="input_label">
              <label htmlFor="email">
                <span className="required">*</span>
                Email:
              </label>
            </div>
            <div className="input_wrapper_2">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={editUser?.email}
                id="email"
                required
                className="input_container"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input_wrapper">
            <div className="input_label">
              <label htmlFor="phone">
                <span className="required">*</span>
                Phone:
              </label>
            </div>
            <div className="input_wrapper_2">
              <input
                type="tel"
                required
                placeholder="phone"
                name="phone"
                value={editUser?.phone}
                id="phone"
                className="input_container"
                onChange={handleChange}
              />
            </div>
          </div>

          {/*  */}

          <div className="input_wrapper">
            <div className="input_label">
              <label htmlFor="link">
                <span className="required">*</span>
                Website:
              </label>
            </div>
            <div className="input_wrapper_2">
              <input
                required
                type="text"
                placeholder="enter url"
                value={editUser?.link}
                onChange={handleChange}
                name="link"
                id="link"
                className="input_container"
              />
            </div>
          </div>
          {/*  */}
        </div>
        {/*  modal action*/}
        <div className="modal_action">
          <button
            type="button"
            className="btn"
            onClick={() => handleModal(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-blue"
            onClick={() => handleUpdate(false, editUser?.key)}
          >
            Ok
          </button>
        </div>
      </section>
    </div>
  )
}

export default Modal
