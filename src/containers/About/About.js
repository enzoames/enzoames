import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { FadeAttribute } from 'components';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 900
    }
  this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions(){
    let winWidth = window.innerWidth; //let winWidth = $(window).width();
    let winHeight = window.innerHeight; //let winHeight = $(window).height();
    this.setState({width: winWidth, height: winHeight-50});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const renderFadeTitle = <span>I'm Enzo</span>;
    const renderLetsgo = <div><span>lets go</span><span className="glyphicon glyphicon-triangle-bottom"></span></div>;

    return (
      <div className="About">
        
        <section className="introduction" style={{height: this.state.height + 'px'}} >
          <FadeAttribute parentStyleClassName={"intro-title"} innerContent={renderFadeTitle} />
          <FadeAttribute parentStyleClassName={"letsgo fade-slower"} innerContent={renderLetsgo} />
        </section>

        <section className="about-website" style={{height: this.state.height + 'px'}} >
          <div className="about-website-wrap">        
            <div className="about-website-content col-xs-12 col-sm-7 col-md-7 col-lg-7">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="about-title white-font">about my website</div>
                <div className="about-title white-font">&</div>
                <div className="about-title white-font">college experience</div>
              </div>
              <span className="about-text white-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
              <div className="gallery-slider" style={{height: this.state.height-100 + 'px'}}>
              </div>
            </div>
          </div>
        </section>


        <section className="about-me" style={{height: this.state.height + 'px'}} >
          <div className="about-me-wrap">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="about-title">myself, my photography</div>
              <div className="about-title">&</div>
              <div className="about-title">brave young years</div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="about-me-gallery">
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4">
              <span className="about-text">In 2013, all Sebastian and I needed were our skateboards, iPhones, and the willingness to explore the city. 
                As we grow up we don't realize the concept of time. Time is all we have in our lives. The fact that with age comes 
                more responsibilities - our childhood dreams and freedom slowly banish away like written words at the beach.
              </span>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="about-me-gallery">
              </div>
            </div>

            <div className="bottom-margin col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span className="about-text"> Now you have a full time job to support yourself or enrolled full time in college trying to pursue a career. Why is it that during our late teens and early twenties we feel the most powerful? During this period, we think we can change the world with our ideas and actions.
                <br/>Brave Young Years wants you to remember that there is a young powerful version of you sitting in your heart that will always be there long after time consumes you with responsibilities. Be powerful and never let time take away what is yours in nature. To create, explore, think, believe, and to always stay free. 
                <br/>Through my photography I want you to find inspiration in yourself and see what this city is all about. If you make it here, you can make it anywhere. This city is all about the people you know; not to step over anyone but to use each other as a ladder for equal greatness for all. Big City Dreams is the name I give to this city because it is where big ideas are born.
                <br/>If you like the concept of Brave Young Years then send me an email. Any comments or criticism is truly appreciated.
              </span>
            </div>

          </div>
        </section>
      
      </div>
    );
  }
}





