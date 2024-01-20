import React from "react"
import "./Card.css"
const Card = () => {
  return (
    <div className="card_container">
      <a href="#" class="card_image_container">
        <img
          src="https://source.unsplash.com/random/600×400?nutrition"
          alt="card 1 image"
          class="card_image"
          loading="lazy"
        />
      </a>
      <div className="card_title_container">
        <p className="card_title">Lorem ipsum dolor </p>
        <p className="card_desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptas porro omnis ullam, repellat accusamus natus corrupti eius
          suscipit dolorem odio in!
        </p>
      </div>

      {/*  */}
      <div className="card_footer_container">
        <div className="author_container">
          <div className="author_avatar_container">
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?John?size=64"
              alt=""
              className="author_avatar"
            />
          </div>
          <div className="author_info_container">
            <span>gourav k </span>
            <span>date</span>
          </div>
        </div>
        <div className="card_tag_container">tag</div>
      </div>
    </div>
  )
}

export default Card
