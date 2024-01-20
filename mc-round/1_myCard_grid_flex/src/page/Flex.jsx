import React , {useState }from "react"
import MyCard from "../components/card/MyCard"
import { data } from "../assets/data"
import Loader from "../components/loader/Loader"

const Flex = () => {
  const [userData, setUserData] = useState(data)
  const [isUserDataLoading, setIsUserDataLoading] = useState(true)
//   let loading = true
  const handle = () =>
    userData.length === 0 ? (
      <h2 className="no_data_msg">No data found </h2>
    ) : (
      <MyCard userData={userData} setUserData={setUserData} />
    )
  setTimeout(() => {
    setIsUserDataLoading(false)
  }, 1000)
  return (
    <div>
      {isUserDataLoading ? (
        <>
          <Loader />
        </>
      ) : (
        handle()
      )}
    </div>
  )
}

export default Flex
