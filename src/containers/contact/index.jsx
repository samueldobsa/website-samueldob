import React, {useState} from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import ImageContactOne from "../../images/contactImage1.png";
import ImageContactTwo from "../../images/contactImage2.png";
import ImageContactThree from "../../images/contactImage3.png";
import './styles.scss'

const contactData = [
    {
        id : 2,
        name : "Github",
        image : ImageContactOne,
        link : 'https://github.com/samueldobsa',
    },
    {
        id : 3,
        name : "Linkedin",
        image : ImageContactTwo,
        link : 'https://www.linkedin.com/in/samuel-dob%C5%A1a-75a8bb1bb/',
    },
    {
        id : 4,
        name : "Linkedin",
        image : ImageContactThree,
        link : 'https://www.instagram.com/samuel_dobsa/',
    }
    ]

const contactMeText = ["So what are you waiting for? React out to me and let's start a conversation about how I can help you achieve your objectives. I look forward to hearing from you soon!"]
const contactEmail = ['dobsasamuel5@gmail.com']
const contactMobileNumber = ['+421 910 126 458']

const Contact=() => {

    const [imgValue, setImgValue] = useState(1)
    const [imgVal, setImgVal] = useState(null)

    function handleImgValue(currentId){
        setImgValue(currentId)
    }
    function handleImgVal(index){
        setImgVal(index)
    }

    const imgData = imgValue === 1 ? contactData :
        contactData.filter(item => item.id === imgValue)

    return(
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText = "Contact Me"
                icon = {<BsInfoCircleFill size={40} /> }
            />
            <div className="contact_content">
                <h3>{contactMeText}</h3>
                <div className="contact_content_info">
                    <h3>E-mail</h3>
                    <p>{contactEmail}</p>
                    <h3>Mobile / WhatsApp</h3>
                    <p>{contactMobileNumber}</p>
                </div>

            <div className="contact_content_img">

                {
                    imgData.map((item, index) =>(
                        <div className="contact_content_img_item" key={'cardItem${item.name.trim()}'}
                             onMouseEnter={()=>handleImgVal(index)}
                             onMouseLeave={()=>handleImgVal(null)}
                        >

                            <a href={item.link} target="_blank">
                                <div className="contact_content_img_item_img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.image}/>
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === imgVal && (
                                            <div>
                                                <button></button>
                                            </div>
                                        )
                                    }
                                </div>
                            </a>
                        </div>
                    ))}
            </div>
            </div>
        </section>
    )
}
export default Contact;
