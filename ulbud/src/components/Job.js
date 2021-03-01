import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Menu from './Menu';

class Job extends Component{
    render(){
        return(
            <>
            <Menu/>
            <div className="job_container">
                <Fade right>
                
                <div className="job_area">
                    <div>
                    <p>Szukamy pracowników budowlanych do pracy w województwie śląskim. Wszystkiego Cię nauczymy, liczą się chęci i motywacja.</p>
                    <p>Jeżeli jesteś zainteresowany skontaktuj się z nami pod numer: +48 502253424. </p>
                    </div>
                </div>
            </Fade>
            </div>
            
            </>
        )
    }
}


export default Job;