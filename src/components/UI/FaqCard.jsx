import React from "react";

function FaqCard(props) {
  return (
    <div className="faq-content">
      <div className="faq-section">
        <h3 className="faq-question">{props.qContent}</h3>
        <p className="faq-answer">
          <span className="answer-span">Answer:</span> {props.aContent}
        </p>
      </div>
    </div>
  );
}

export default FaqCard;
