import React, { useState } from "react"
import QuestionOption from "./QuestionOption"

const questionBank = [
  {
    question:
      'On a scale from "Really Bad" to "Amazing," how would you rate this interview experience?',

    answers: ["Really Bad", "Not Good", "Ok", "Good", "Amazing"],
  },

  {
    question:
      "To what extent did the interviewee assist you during the session?",

    answers: ["Not at all", "A little bit", "Yes"],
  },

  {
    question:
      'Evaluate your performance in the interview using the scale from "Really Bad" to "Amazing."',

    answers: ["Really Bad", "Not Good", "Ok", "Good", "Amazing"],
  },

  {
    question: "Were you nervous before the interview?",

    answers: ["No", "A little bit", "Not really", "Yes"],
  },

  {
    question:
      "What specific steps or changes do you recommend to enhance the quality of our interviews?",
    
  },
]

const App = () => {
  const [data, setData] = useState(questionBank)
  const [options, setOptions] = useState({
    opt1: false,
    opt2: false,
    opt3: false,
    opt4: false,
  })

  return (
    <div>
      <div>
        {
          data?.map( (ques ,index) => (
            <QuestionOption
            questionNo={index+1}
            questionName={ques.question}
            options={ques?.answers  || []}
            setOptions={setOptions}
          />
          ))
        }
      
      </div>
    </div>
  )
}

export default App
