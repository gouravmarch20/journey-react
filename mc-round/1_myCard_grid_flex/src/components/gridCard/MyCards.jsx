import React from "react"
import Card from "./Card"

const MyCards = () => {
  return (
    <div className="container">
       <header class="header_container">
            <h1 class="header_title"> CodeHelp Blogs</h1>
            <p class="header_desc">
                Utilize this space to incorporate a captivating subheading crafted by ChatGPT, adding depth and intrigue to your blog.
            </p>
        </header>
      <main className="main_container">
        {[1, 2, 3, 4, 5, 6, 7].map(() => {
          return <Card />
        })}

      
      </main>
    </div>
  )
}

export default MyCards
