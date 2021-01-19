import { useState } from "react";
const DisplayQuestion = (props) => {
  const [questionCount, setQuestionCount] = useState(0);
  const question = props.questions[questionCount];
  const [scoreCount, setScoreCount] = useState(0);
  const questionLength = props.questions.length - 1;

  function checkAnswer(question, selectedAnswer) {
    if (question.answer === selectedAnswer) return true;
    return false;
  }

  const onClick = (e) => {
    setQuestionCount(questionCount <= questionLength ? questionCount + 1 : 0);
    if (checkAnswer(question, e.target.innerText)) {
      let score = scoreCount;
      setScoreCount(score + 20);
    }
  };

  const displayQuestionBlock = () => (
    <div className="questions">
      <h1>{question.question}</h1>
      {question.options.map((e) => (
        <button onClick={onClick} key={e}>
          {e}
        </button>
      ))}
    </div>
  );

  const displayMessage = () => (
    <div className="questions">
      <p>Congratulation you got {scoreCount} </p>
      <button onClick={() => setQuestionCount(0)}>Restart</button>
    </div>
  );

  return questionCount <= questionLength
    ? displayQuestionBlock()
    : displayMessage();
};
export default DisplayQuestion;
