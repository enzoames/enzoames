import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 700
    }
  this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions(){
    var winWidth = window.innerWidth; //var winWidth = $(window).width();
    var winHeight = window.innerHeight; //var winHeight = $(window).height();
    this.setState({width: winWidth, height: winHeight-50});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="About">
        
        <section className="introduction" style={{height: this.state.height + 'px'}} >
          
          <div className="intro-title">
            <span>I'm Enzo</span>
          </div>
          <div className="letsgo">
            <span>lets go</span><span className="glyphicon glyphicon-triangle-bottom"></span>
          </div>

        </section>

        <section className="about-website" style={{height: this.state.height + 'px'}} >
        </section>

      
        <section className="about-me" style={{height: this.state.height + 'px'}} >
        </section>
      
      </div>
    );
  }
}
