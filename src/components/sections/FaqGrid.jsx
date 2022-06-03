import React, { useState, useEffect } from "react";
import FaqCard from "../UI/FaqCard";
const faqQuestions = "./FAQ.json"


function FaqGrid() {
    
    const [questionsData, setQuestionsData] = useState([]);
    useEffect(() => {
        fetch(faqQuestions)
          .then((res) => res.json())
          .then((data) => {
            setQuestionsData(data);
            // console.log("MY QUESIONS", data);
          });
      }, []);

  return <div>
      {questionsData.map((oneQuestion) =>( <FaqCard qContent={oneQuestion.Questions} aContent={oneQuestion.Answers}/>))}
      
  </div>;
}

export default FaqGrid;
