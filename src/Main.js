import React, { useState } from "react";
import { QUESTIONS } from "./questions";

function Main() {
  const questions = Object.entries(QUESTIONS);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [runs, setRuns] = useState(0);
  const [currentRunScore, setCurrentRunScore] = useState(0);

  const handleAnswer = (val) => {
    const scoreIncrement = val === "yes" ? 1 : 0;
    setCurrentRunScore(currentRunScore + scoreIncrement);
    setScore(score + scoreIncrement);
    setQuestionIndex(questionIndex + 1);
  };

  const handleNextRun = () => {
    setTotalScore(totalScore + currentRunScore);
    setRuns(runs + 1);
    setCurrentRunScore(0);
    setQuestionIndex(0);
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Run {runs + 1}</h2>
      {questionIndex < questions.length ? (
        <div>
          <h3>{questions[questionIndex]}</h3>
          <button onClick={() => handleAnswer("yes")}>Yes</button>
          <button onClick={() => handleAnswer("no")}>No</button>
        </div>
      ) : (
        <div>
          <p>
            Score for this run: {(100 * currentRunScore) / questions.length}
          </p>
          <button onClick={handleNextRun}>Start Next Run</button>
        </div>
      )}
      <div>
        <h3>Overall Stats</h3>
        <p>Total Runs: {runs}</p>
        <p>Total Score: {(100 * totalScore) / questions.length}</p>
        {runs ? (
          <p>Average Score: {((100 * totalScore) / (runs * questions.length)).toFixed(0)}%</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Main;
