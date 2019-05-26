import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed} from '@fortawesome/fontawesome-free-solid';
import { faTicketAlt} from '@fortawesome/fontawesome-free-solid';
import { faCalendar, faFutbol} from '@fortawesome/fontawesome-free-regular';

class About extends React.Component {
  render() {
		
  	return (
  	    <section id="about"  className="sectionTwo">
              <div className="about-chat">
                 <div className="container ">
                    <div className="row">
                       <div className="col-md-12 text-center">
                          <div className="section-title">
                             <h2 className="subHeaders">The Experience</h2>
                             <img src="assets/images/title-line.png" alt="title-line" className="img-fluid"/>
                          </div>
                       </div>
                       <div className="col-md-12 about-box">
                          <div className="row">
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                <a href="#hotels" ><FontAwesomeIcon className="aboutIcons" icon={faBed} /> </a>
                                      <h3  className="sub-title subtitles">Hotels</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                   {/* <img src="assets/images/get-notified.png" alt="get-notified" /> */}
                                   <a href="#tickets" ><FontAwesomeIcon className="aboutIcons" icon={faTicketAlt} /> </a>
                                      <h3  className="sub-title subtitles">Tickets</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                   {/* <img src="assets/images/stay-updated.png" alt="stay-updated"/>
                                  */}
                                 <a href="#games" ><FontAwesomeIcon className="aboutIcons" icon={faCalendar}/></a>
                                      <h3  className="sub-title subtitles">Schedule</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6">
                                <div className="chat-box">
                                {/* <img src="assets/images/stay-connected.png" alt="stay-connected"/> */}
                                <a href="#team" > <FontAwesomeIcon className="aboutIcons" icon={faFutbol}/></a>
                                      <h3 className="sub-title subtitles">Team</h3>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-12">
                          <div className="chat-slide">
                             <h3>Connect with People all over the world , with your small device</h3>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="container-fluid text-center">
                 <img src="assets/images/banner.png" alt="banner.png" className="img-fluid full-banner"/>
              </div>
        </section>
  	);
  }
}


export default About;