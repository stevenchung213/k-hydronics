import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineItemContainer from './timeline_item_container/TimelineItemContainer';
import step1src from './../../../assets/install_1_sm.webp';
import step2src from './../../../assets/install_2_sm.webp';
import step3src from './../../../assets/install_3_sm.webp';
import step4src from './../../../assets/install_4_sm.webp';
import step5src from './../../../assets/install_5_sm.webp';
import './styles.css';

const step1 = { img: step1src, text: `The installation process starts with a completely exposed subfloor (subfloor visible on the right side in the picture to the left).` };
const step2 = { img: step2src, text: `The first step is to add an insulating layer wherever the heating panels will be installed (picture to the right).` };
const step3 = { img: step3src, text: `The next step is to place the lower portion of the floor heating panel along with the tubing directly on top of the insulating layer (picture to the left).` };
const step4 = { img: step4src, text: `The final step is to fit the upper portion of the panel onto the lower portion essentially sealing off the tubes for a flush finish (picture to the right).` };
const step5 = { img: step5src, text: `That's it! Finalizing things is just a matter of placing the homeowner's desired floor, in this case, hardwood (picture to the left).` };


const Install = ({ isMobile }) => {

  return (
    <>
      <div id='install_container'>
        <h2 id='install_banner' className='banner'>
          The Installation Process
        </h2>
        <h3 id='install_subheader' className='subheader'>
          {/* ~500sq/ft per day for a team of 5 */}
        </h3>
        <div id='timeline_container'>
          {
            isMobile ? (
              <>
              </>
            )
              : (
                <Timeline position="alternate-reverse">
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <div className='timeline_text_container'>
                        <div className='timeline_text'>
                          {step1.text}
                        </div>
                      </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineItemContainer
                        isMobile={isMobile}
                        data={step1}
                      />
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <div className='timeline_text_container'>
                        <div className='timeline_text'>
                          {step2.text}
                        </div>
                      </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineItemContainer
                        isMobile={isMobile}
                        data={step2}
                      />
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <div className='timeline_text_container'>
                        <div className='timeline_text'>
                          {step3.text}
                        </div>
                      </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineItemContainer
                        isMobile={isMobile}
                        data={step3}
                      />
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <div className='timeline_text_container'>
                        <div className='timeline_text'>
                          {step4.text}
                        </div>
                      </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineItemContainer
                        isMobile={isMobile}
                        data={step4}
                      />
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <div className='timeline_text_container'>
                        <div className='timeline_text'>
                          {step5.text}
                        </div>
                      </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineItemContainer
                        isMobile={isMobile}
                        data={step5}
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* last item of timeline */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              )
          }
        </div>
      </div>
    </>
  );
};

export default Install;