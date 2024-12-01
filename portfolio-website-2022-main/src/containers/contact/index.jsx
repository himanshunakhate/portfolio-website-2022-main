import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsGithub, BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {MdContactPhone, MdEmail} from 'react-icons/md';
import { BsLinkedin } from "react-icons/bs";


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div style={{paddingLeft:"20rem"}}>
            <h3 className="contact__content__header-text">Let's Connect</h3>
          </div>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
        <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
              <VerticalTimelineElement
                key='1'
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdContactPhone/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div>
                  <h1>
                    +91 9356920569
                  </h1>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                key='1'
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<BsLinkedin/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div>
                  <a href="https://linkedin.com/in/himanshu-nakhate-b0994a206" style={{color:"white"}}>
                  <h1>
                    linkedin.com/in/himanshunakhate
                  </h1>
                  </a>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                key='1'
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdEmail/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div>
                 
                  <h1>
                    himanshunakhateofficial@gmail.com
                  </h1>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                key='1'
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<BsGithub/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div>
                  <a href="https://github.com/himanshunakhate" style={{color:"white"}}>
                  <h1>
                    github.com/himanshunakhate
                  </h1>
                  </a>
                </div>
              </VerticalTimelineElement>
          </VerticalTimeline>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
