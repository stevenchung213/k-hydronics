import React, { useState } from 'react';
import './styles.css';
import downArrow from './../../assets/down_arrow.webp';

const Faqs = () => {
  const showAnswer1 = useState(false);
  const showAnswer2 = useState(false);
  const showAnswer3 = useState(false);
  const showAnswer4 = useState(false);
  const showAnswer5 = useState(false);
  const showAnswer6 = useState(false);
  const [showAnswers, toggleAnswers] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  })

  const questions = [
    {
      text: 'Do homeowners need to prep anything?',
      answer: ['Installation can only take place once the subfloor is completely exposed and all furnishings have been removed from desired heated areas.']
    },
    {
      text: 'How long does installation take?',
      answer: ['Team of 4 can complete roughly 500 sq ft per day.', <br key={6} />, 'A 1500 sq ft would take 3 days.']
    },
    {
      text: 'What happens if there is a leak?',
      answer: ''
    },
    {
      text: 'Does the floor heating system require any maintenance?',
      answer: ''
    },
    {
      text: 'Does the floor heating system come with a warranty?',
      answer: ''
    },
    {
      text: 'Can I use my existing water heater for a hydronic system?',
      answer: `Standard domestic water heaters are not engineered for the continuous operation demands of space heating. You will need a dedicated boiler, combi boiler, or geothermal heat pump.`
    },
    {
      text: 'Is the floor heating system transferable to a new home?',
      answer: `Due to our floor heating system's modular/dry design, it is absolutely possible to move your floor heating system to a new home.`
    },
  ];

  return (
    <div id='faqs_container'>
      <div id={'faqs_banner'} className='banner faqs_banner'>
        Frequently Asked Questions
      </div>
      <div className='sub_banner'>
        If you can't find an answer that you're looking for, feel free to contact us.
      </div>
      <div className='questions_container'>
        {
          questions.map((question, index) => (
            <div
              className={'faq_container' + (showAnswers[index] ? ' show_faq_container' : '')}
              key={index}
            >
              <div className='question_container'>
                <div
                  className='question'
                  onClick={() => {
                    let currState = showAnswers[index];
                    toggleAnswers({
                      ...showAnswers,
                      [index]: !currState
                    })
                  }}
                >
                  {question.text}
                </div>
                <img
                  className='down_arrow'
                  src={downArrow}
                  alt='down_arrow'
                  onClick={() => {
                    let currState = showAnswers[index];
                    toggleAnswers({
                      ...showAnswers,
                      [index]: !currState
                    })
                  }}
                />
              </div>
              <div className={'answer_container' + (showAnswers[index] ? ' show_answer' : '')}>
                <div className='answer'>
                  {question.answer}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Faqs;
