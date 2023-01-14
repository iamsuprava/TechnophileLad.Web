import React from "react";
import "./Faq.css";

function FAQ(props) {
  return (
    <div className="container-faq">
      <div className="titleHolder headtext__cormorant">
        <h2>
          <font color="#FFFFFF">Frequently</font> Asked Questions
        </h2>
      </div>

      <section className="faq">
        {props.data.map((item) => (
          <Question question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
}

const Question = (props) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="question-wrapper " onClick={() => handleClick(props.id)}>
        <div className="question-faq" id={props.id}>
          <h3 className="question-text">{props.question}</h3>
          <div>
            <svg
              className={isActive ? "active" : ""}
              viewBox="0 0 320 512"
              title="angle-down"
            >
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
          </div>
        </div>
        <div className={isActive ? "answer active" : "answer"}>
          {props.answer}
        </div>
      </div>
    </>
  );
};

export default FAQ;
