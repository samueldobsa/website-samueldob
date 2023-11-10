import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeader";
import './styles.scss';
import {DiApple, DiJava, DiAndroid, DiDocker, DiReact} from 'react-icons/di'
import {FaDev, FaDatabase} from "react-icons/fa";
import {SiSpringboot} from "react-icons/si";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {data} from "../resume/utils";
import {MdSchool, MdWork} from "react-icons/md";

const jobSummary = 'Yeah, I\'m Junior Java developer with expertise in Spring Boot, Maven, JPA, Hibernate, Rest API, Databases and little React, gained through the JetBrains Academy in Java Fullstack Developer. I\'ve contributed as a Junior Developer on a mobile app project for e-scooter sharing, collaborating closely with a senior developer to implement Rest APIs.\n' +
    '\n' +
    'Now I mostly focused on personal projects, driven by a passion for innovative solutions and guided by my mentor experienced Senior Java Developer. Comfortable working remotely, I bring project management skills from previous roles as a Project and Sourcing Manager.\n' +
    '\n' +
    'Eager to apply my skills and proactive learning attitude to collaborative projects, I am poised to contribute to dynamic development teams.';
const personalDetails = ['Java Developer, Sourcing Manager and occasional Frontend Developer in bringing forth expertise in design, development, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Fully focused on Java, Spring Boot, Maven, Git, JUnit Test and SQL. Also knowledgeable in user interfaces, testing, and debugging processes. I am a self-managed team player. Many positions but with a love for programming'];

const About=() => {

    return(
        <section id="about" className="about">
            <PageHeaderContent
                headerText = "About Me"
                icon = {<BsInfoCircleFill size={40} /> }
                />
            <div className="about_content">
                <div className="about_content_personalWrapper">

                    <h3>Backend Developer</h3>
                    <p>{jobSummary}</p>

                    <h3 className="personalInformationHeaderText">Personal Information</h3>
                    <p className="personal_details">{personalDetails}</p>

                    <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                    }

                    </ul>
                </div>

                <div className="about_content_serviceWrapper">
                    <div className="about_content_serviceWrapper_innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <DiJava size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <DiDocker size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <DiReact size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <SiSpringboot size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                    </div>
                </div>

                <div className="about_content_timeline">

                <div className="about_content_timeline_experience">
                    <h3 className="about_content_timeline_experience_header-text">Experience</h3>
                    <VerticalTimeline
                        laoyut={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.experience.map((item, i)=>(
                                <VerticalTimelineElement
                                    key={i}
                                    className="about_content_timeline_experience_vertical-timeline-element"
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
                                    <div className="about_content_vertical-timeline-element-title-wrapper">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <h4 className="about_content_vertical-timeline-element-title-wrapper-location">{item.subTitle}</h4>
                                    <h5 className="about_content_vertical-timeline-element-title-wrapper-date">{item.date}</h5>
                                    <p className="about_content_vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                    <h5 className="about_content_vertical-timeline-element-title-wrapper-technology">{item.technology}</h5>
                                </VerticalTimelineElement>
                            ))}
                    </VerticalTimeline>
                </div>
                <div className="about_content_timeline_education">
                    <h3 className="about_content_timeline_education_header-text">Education</h3>
                    <VerticalTimeline
                        laoyut={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {data.education.map((item, i)=>(
                            <VerticalTimelineElement
                                key={i}
                                className="about_content_timeline_education_vertical-timeline-element"
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
                                <div className="about_content_vertical-timeline-element-title-wrapper">
                                    <h3>{item.title}</h3>
                                </div>
                                <h4 className="about_content_vertical-timeline-element-title-wrapper-location">{item.subTitle}</h4>
                                <h5 className="about_content_vertical-timeline-element-title-wrapper-date">{item.date}</h5>
                                <p className="about_content_vertical-timeline-element-title-wrapper-description">{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                </div>

            </div>
        </section>
    );
};
export default About;
