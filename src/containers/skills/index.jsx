import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import {skillsData} from "./utils";
import {Line} from "rc-progress";
import './styles.scss';

const Skills=() => {
    return(
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText = "Skills"
                icon = {<BsInfoCircleFill size={40} /> }
            />
            <div className="skills_content-wrapper">
                {
                    skillsData.map((item, i)=>(
                        <div key={i} className="skills_content-wrapper_inner-content">
                            <h3 className="skills_content-wrapper_inner-content_category-text">{item.label}</h3>
                            <div className="skills_content-wrapper_inner-content_progressbar-container">
                                {
                                    item.data.map((skillItem, j)=>(
                                        <div className="progressbar-wrapper" key={j}>
                                            <p>{skillItem.skillName}</p>
                                            <Line
                                            percent={skillItem.percentage}
                                            strokeWidth="2"
                                            strokeColor="var(--yellow-theme-main-color)"
                                            trailWidth="2"
                                            strokeLineCap="square"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
export default Skills;
