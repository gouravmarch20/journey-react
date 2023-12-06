import React, { useState } from "react"
import Card from "./Card"
const CleanAllCollapseCode = () => {
  const [showConfig, setShowConfig] = useState("obito")
  return (
    <div>
      <Card
        heading={"obito"}
        subheading={"about me"}
        according={"he was kind, cheerful and purposeful as Naruto."}
        isVisible={showConfig === "obito"}
        setShowConfig={() => {
          if (showConfig == "obito") {
            setShowConfig("")
          } else {
            setShowConfig((prev) => "obito")
          }
        }}
      />
      <Card
        heading={"NARUTO UZUMAKI "}
        subheading={"us"}
        according={
          "HARD WORK IS WORTHLESS FOR THOSE THAT DON’T BELIEVE IN THEMSELVES"
        }
        isVisible={showConfig === "naruto"}
        setShowConfig={() => {
          if (showConfig == "naruto") {
            setShowConfig("")
          } else {
            setShowConfig((prev) => "naruto")
          }
        }}
      />
      <Card
        heading={"Jiraya "}
        subheading={"random -"}
        isVisible={showConfig === "jiraya"}
        according={
          "A place where someone thinks of you is a place you can call home "
        }
        setShowConfig={() => {
          if (showConfig == "naruto") {
            setShowConfig("")
          } else {
            setShowConfig((prev) => "jiraya")
          }
        }}
      />
    </div>
  )
}

export default CleanAllCollapseCode
