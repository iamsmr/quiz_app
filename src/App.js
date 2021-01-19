import { useState } from "react";
import DisplayQuestion from "./components/DisplayQuestion";
function App() {
  const questions = [
    {
      question: "What is The Capital city of nepal",
      options: ["Kathmandu", "Biratnagar", "Jhapa"],
      answer: "Kathmandu",
    },
    {
      question: "What is The Capital city of India",
      options: ["Dehli", "Bhutan", "Nepal"],
      answer: "Dehli",
    },
    {
      question: "What is The Capital city of Japan",
      options: ["okhaldhunga", "Tokiyoo", "Singapur"],
      answer: "Tokiyoo",
    },
    {
      question: "What is The Capital city of America",
      options: ["Kathmandu", "Biratnagar", "Wasingtondc"],
      answer: "Wasingtondc",
    },
  ];
  return (
    <div className="App">
      <DisplayQuestion questions={questions} />
    </div>
  );
}

export default App;
