import './index.css';
import React, {useState} from "react";

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['додаток', 'частина додатка або сторінки', 'те, що я не знаю, що таке'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
        'Це простий HTML',
        'Це функція',
        'Це той же HTML, але з можливістю виконувати JS-код',
    ],
    correct: 2,
  },
    {
        title: 'Цей проект генiальний?',
        variants: [
            'Так',
            'Також так, але вiдповiдь тут не зарахується((',
        ],
        correct: 0,
    },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href='http://localhost:3000/login'>
            <button>Спочатку</button>
        </a>

    </div>
  );
}



function Logic({cuq, onclickVariant, step, correct}) {
    const percente = Math.round((step / questions.length) * 100 )
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percente}%` }} className="progress__inner"></div>
      </div>
      <h1>{cuq.title}</h1>
      <ul>
          {
              cuq.variants.map((text, index) => (
                  <li onClick={ () => onclickVariant(index)}>{text}</li>
              ) )
          }
      </ul>
    </>
  );
}



function Game() {
    const [step, setStep] = React.useState(0);
    const currentQuest = questions[step];
    const [correct, setCorrect] = React.useState(0)
    const onclickVariant = (index) => {
        console.log(step , index)

        setStep(step + 1)
        if (index === currentQuest.correct){
            setCorrect(correct + 1);
            console.log(correct)
        }
    }
  return (
    <div className="App">
        {
            step != questions.length ?
                (<Logic cuq = {currentQuest} onclickVariant = {onclickVariant} step = {step}/>)
                : (<Result correct = {correct}/>)

        }

    </div>
  );
}

export default Game;
