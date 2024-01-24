import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import {VerticalTimeline} from "react-vertical-timeline-component";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {data} from "./utils";
import {MdWork} from 'react-icons/md'
import {MdSchool} from 'react-icons/md'
import './styles.scss';

const Resume=() => {
    return(
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText = "RESUME"
                icon = {<BsInfoCircleFill size={40} /> }
            />

            <div className="timeline">

                <div className="timeline_experience">
                    <h3 className="timeline_experience_header-text">Experience</h3>
                    <VerticalTimeline
                        laoyut={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.experience.map((item, i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timeline_experience_vertical-timeline-element"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                icon={<MdWork/>}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>{item.title}</h3>
                                        <h4>{item.subTitle}</h4>
                                    </div>
                                        <h5 className="vertical-timeline-element-title-wrapper-date">{item.date}</h5>
                                        <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            ))}
                    </VerticalTimeline>
                </div>
                <div className="timeline_education">
                    <h3 className="timeline_education_header-text">Education</h3>
                    <VerticalTimeline
                        laoyut={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {data.education.map((item, i)=>(
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline_education_vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    icon={<MdSchool/>}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)'
                                    }}
                                    >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>{item.title}</h3>
                                        <h4>{item.subTitle}</h4>
                                    </div>
                                    <h5 className="vertical-timeline-element-title-wrapper-date">{item.date}</h5>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            ))}
                    </VerticalTimeline>
                </div>
            </div>

        </section>
    )
}
export default Resume;
