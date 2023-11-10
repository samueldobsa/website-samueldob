import React from "react";
import {useNavigate} from "react-router-dom";
import "./styles.scss";

const Home=() => {

    const navigate = useNavigate();
    const handleNavigateToContactMe = () =>{
        navigate('/contact')
    }

    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    I'm Samuel,
                    <br/>
                    BACKEND DEVELOPER
                </h1>
                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactMe}>Let's code</button>
                </div>
            </div>
        </section>
    )
}
export default Home;
