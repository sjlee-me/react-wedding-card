import React, { useState } from 'react';
import '../css/Quiz.css';

const questions = [
    {
      questionText: '신혼여행지로 올바른 곳은?',
      correctAnswer: '저희는 발리, 일본으로 여행갑니다.',
      answerOptions: [
        { answerText: '호주', isCorrect: false },
        { answerText: '발리', isCorrect: true },
        { answerText: '일본', isCorrect: true },
        { answerText: '영국', isCorrect: false },
        { answerText: '스페인', isCorrect: false },
      ],
    },
    {
      questionText: '웨딩 촬영 총 몇 번 했을까요?',
      correctAnswer: '총 8 번입니다!',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '8', isCorrect: true },
      ],
    },
    {
      questionText: '함께 하지 않은 활동은?',
      correctAnswer: '함께 PC방에 가본 적이 없어요.',
      answerOptions: [
        { answerText: '만화카페 가기', isCorrect: false },
        { answerText: 'PC방에서 게임하기', isCorrect: true },
        { answerText: '캘리포니아비치에서 물놀이하기', isCorrect: false },
        { answerText: '경주월드에서 놀이기구 타기', isCorrect: false },
        { answerText: '동물원에서 새 먹이 주기', isCorrect: false },
      ],
    }
  ];


function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);


    const handleAnswerButtonClick = (correctAnswer, isCorrect, index) => {
        const nextQuestion = currentQuestion + 1;
        setSelectedOptionIndex(index);
    
        if (isCorrect) {
          setScore(score + 1);
          setAnswerFeedback(`정답입니다!`);
        } else {
          setAnswerFeedback(`틀렸습니다! ${correctAnswer} `);
        }
    
        setTimeout(() => {
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
          setAnswerFeedback(null);
          setSelectedOptionIndex(null);
        }, 3000);
      };

      const handleRestart = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedOptionIndex(null);
      };

  return (
    <div className='container bc-pink'>
        <div className='title'>깜짝 퀴즈</div>
        {showScore ? (
        <div className='score-section'>
          <div>{questions.length} 문제 중에 <span className='my-score'>{score} 문제</span> 맞혔습니다! </div>
          <button onClick={handleRestart} className='restart-button'>다시하기</button> 
        </div>
        ) : (
            <>
            <div className='question-section'>
                <div className='question-count'>
                <span>문제 {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>
                  <div>신랑♥신부</div>
                  <div>{questions[currentQuestion].questionText}</div>
                </div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                    className={`answer-button ${selectedOptionIndex === index ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleAnswerButtonClick(questions[currentQuestion].correctAnswer, answerOption.isCorrect, index)}
                    key={index}
                >
                    {answerOption.answerText}
                </button>
                ))}
            </div>
            {answerFeedback && <div className='feedback'>{answerFeedback}</div>}
            </>
        )}
    </div>
  )
}

export default Quiz