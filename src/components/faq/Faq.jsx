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
      text: 'How long does installation take?',
      answer: ['Our team of experts can complete a conventional sized window in approximately 15 minutes.', <br key={6} />, 'If a customer has five windows that need treatment, we can estimate the total duration to take roughly 75 minutes.']
    },
    {
      text: 'What happens if there is a leak?',
      answer: ['We collect half of the total cost as a deposit during your in-home consultation and the remainder is collected once your window treatment is installed.', <br key={4} />, 'We apologize but we currently do not accept electronic payments.']
    },
    {
      text: 'Does the floor heating system require any maintenance?',
      answer: ['Our window treatments usually take 2 weeks to arrive at our facilities from South Korea.', <br key={5} />, 'Therefore, installation can only be scheduled two weeks after your order has been placed.']
    },
    {
      text: 'Does the floor heating system come with a warranty?',
      answer: ['The in-home consultation is designed to provide a more personal customer experience where one of our experts directly visits your property to help you decide on a window treatment and take measurements.', <br key={1} />, '1.  They will provide a full physical catalog which includes fabric samples along with all the styles and colors to help you choose.', <br key={2} />, '2. They will take precise measurements for each window that you plan on treating.', <br key={3} />, 'The entire process, on average (3bed home), takes about an hour but can take longer if unusual circumstances are present.']
    },
    {
      text: 'Can I use my existing water heater for a hydronic system?',
      answer: [`Standard domestic water heaters are not engineered for the continuous operation demands of space heating. You will need a dedicated boiler, combi boiler, or geothermal heat pump.`]
    },
    {
      text: 'Is the floor heating system transferable to a new home?',
      answer: [`Due to our floor heating system's modular/dry design, it is absolutely possible to move your floor heating system to a new home.`]
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
