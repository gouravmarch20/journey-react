import React, { useState } from "react"
import "./question.css"
const QuestionOption = ({ questionNo, questionName, options, setOptions }) => {
  const formatAnswer = (options) => {
    let formattedOpt = []
    options.map((option) => {
      let obj = { name: option, isSelected: false }
      formattedOpt.push(obj)
    })
    return formattedOpt
  }

  const [answerArray, setAnswerArray] = useState(formatAnswer(options))
  const handleClick = (index) => {
    console.log(index)

    const answer = [...answerArray]
    answer?.forEach((answer, indexAnswer) => {
      if (index == indexAnswer) {
        answer.isSelected = true
      } else {
        answer.isSelected = false
      }
    })
    console.log(answer)
    setAnswerArray(answer)
  }
  return (
    <div className="m-auto w-10/12	 bg-slate-200 ">
      <div className="question-no text-center rounded-[40px] bg-pink-400 w-[40px] h-[40px] m-auto text-white flex justify-center	 items-center	">
        <div>{questionNo}</div>
      </div>
      <div className="question-name text-center text-pink-500">
        {questionName}
      </div>

      <div className="question-options  flex border-2	justify-center	 items-center">
        {answerArray?.length === 0 ? (
          <div>
            <input type="text" placeholder="hello" value={"fdsadf"} />
          </div>
        ) : (
          <div className="flex justify-center	box  box-1 items-center h-[44px]">
            <div className="bg-white  flex justify-center items-center box-1 h-[40px]	 ">
            {answerArray.map((option, index) => (
              <div className="w-28  justify-center	 items-center text-center" onClick={() => handleClick(index)}>
                {option.isSelected ? (
                  <span className="text-white bg-pink-300 p-[10px]"> {option.name}</span>
                ) : (
                  <span className="text-purple-500"> {index + 1} </span>
                )}
              </div>
            ))}

          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionOption
