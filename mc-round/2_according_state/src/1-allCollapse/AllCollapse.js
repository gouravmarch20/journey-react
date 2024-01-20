import React, { useState } from "react"
import Card from "./Card"
const AllCollapse = () => {
  const [showConfig, setShowConfig] = useState({
    showObito: false,
    showNaruto: false,
    showJiraya: false,
  })
  return (
    <div>
      <Card
        heading={"obito"}
        subheading={"about me"}
        according={"he was kind, cheerful and purposeful as Naruto."}
        isVisible={showConfig.showObito}
        setShowConfig={() => {
            setShowConfig(prev => ({
                showObito: ! prev.showObito,
                showNaruto: false,
                showJiraya: false,
            }))
        
        }}
      />
      <Card
        heading={"NARUTO UZUMAKI "}
        subheading={"us"}
        according={
          "HARD WORK IS WORTHLESS FOR THOSE THAT DON’T BELIEVE IN THEMSELVES"
        }
        isVisible={showConfig.showNaruto}
        setShowConfig={() => {
            setShowConfig(prev => ({
                showObito: false,
                showNaruto: ! prev.showNaruto,
                showJiraya: false,
            }))
        }}
      />
      <Card
        heading={"Jiraiya "}
        subheading={"random -"}
        isVisible={showConfig.showJiraya}
        according={
          "A place where someone thinks of you is a place you can call home "
        }
        setShowConfig={() => {
            setShowConfig(prev => ({
                showObito: false,
                showJiraya: ! prev.showNaruto,
                showNaruto: false,
            }))
        }}

      />
    </div>
  )
}

export default AllCollapse
