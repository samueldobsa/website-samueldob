import React, {useState} from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import ImageOne from '../../images/image1.png';
import ImageTwo from '../../images/image2.png';
import ImageThree from '../../images/image3.png';
import './styles.scss';


const portfolioData = [
    {
        id : 2,
        name : "Microservice-api",
        image : ImageOne,
        link : 'https://github.com/samueldobsa/microservice-api',
        technology: "Java"
    },
    {
        id : 2,
        name : "City-Parser",
        image : ImageOne,
        link : 'https://github.com/samueldobsa/city-Parser',
        technology: "Java"
    },
    {
        id : 3,
        name : "Website",
        image : ImageThree,
        link : 'https://github.com/samueldobsa/microservice-api',
        technology: "React"
    },
    {
        id : 2,
        name : "E-shop",
        image : ImageOne,
        link : 'https://github.com/samueldobsa/shop',
        technology: "Java"
    },
    {
        id : 2,
        name : "Chatty-bot-JetBrains",
        image : ImageTwo,
        link : 'https://github.com/samueldobsa/Simple-Chatty-Bot',
        technology: "Java"
    },
    {
        id : 2,
        name : "Java-Functional",
        image : ImageOne,
        link : 'https://github.com/samueldobsa/javafunctional',
        technology: "Java"
    },
    {
        id : 2,
        name : "Code-AWS",
        image : ImageOne,
        link : 'https://github.com/samueldobsa/samuels-web-code-aws',
        technology: "Java"
    },
    {
        id : 2,
        name : "Simple-Banking-System",
        image : ImageTwo,
        link : 'https://github.com/samueldobsa/Simple-Banking-System',
        technology: "Java"
    }
]

const filterData = [
    {
        filterId : 1,
        label : 'All'
    },
    {
        filterId : 2,
        label : 'BACKEND'
    },
    {
        filterId : 3,
        label : 'FRONTEND'
    },
]

const Portfolio=() => {

    const [filteredValue, setFilteredValue] = useState(1)
    const [hoveredValue, setHoveredValue] = useState(null)

    function handleFilter(currentId){
        setFilteredValue(currentId)
    }

    function handleHover(index){
        setHoveredValue(index)
    }

    console.log('=========================')
    console.log(filteredValue)
    console.log('=========================')

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredValue)

    console.log(hoveredValue)



    return(
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText = "Projects"
                icon = {<BsInfoCircleFill size={40} /> }
            />
            <div className="portfolio_content">
                <ul className="portfolio_content_filter">

                    {
                        filterData.map((item)=>(
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)}
                                key={item.filterId}>{item.label}</li>
                        ))}
                </ul>
                <div className="portfolio_content_cards">
                    {
                        filteredItems.map((item, index) =>(
                            <div className="portfolio_content_cards_item" key={'cardItem${item.name.trim()}'}
                                 onMouseEnter={()=>handleHover(index)}
                                 onMouseLeave={()=>handleHover(null)}
                            >

                                <a href={item.link} target="_blank">
                                <div className="portfolio_content_cards_item_img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.image}/>
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <button><p>{item.name}</p></button>
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
export default Portfolio;
