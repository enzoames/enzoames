import React, { Component } from 'react';
import { Link } from 'react-router';
import { Redirect } from 'react-router'
import config from '../../config';
import Helmet from 'react-helmet';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 700
    }
  this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions(){
    console.log("\nupdateDimesions");
    var winWidth = window.innerWidth; //var winWidth = $(window).width();
    var winHeight = window.innerHeight; //var winHeight = $(window).height();
    console.log("H W", winHeight, winWidth);
    this.setState({width: winWidth, height: winHeight-50});
    console.log("\nsetstate complete in updateDimesions");    
  }

  componentDidMount() {
    console.log("\nCOMPONENT DID MOUNT");
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    console.log("\nCOMPONENT WILL MOUNT");
    this.updateDimensions;
  }

  componentWillUnmount() {
    console.log("\nCOMPONENT WILL UNMOUNT");
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleRedirect(){
    window.location.assign("https://www.github.com/enzoames");
  }

  render() {

    const renderLink = (className, label, link, onClick) => {
      return(
        <div className={className}>
          <Link to={`${link}`}>
            <span className="link-style" onClick={onClick}>{label}</span>
          </Link>
        </div>);
    }

    return (
      <div className="home">

        <div className="background" style={{height: this.state.height+25 + 'px'}}>
          <div className="my-title">
            <h3>Enzo Ames</h3>
            <h4>Front-End Developer and Photographer</h4>
          </div>
          
          <div className="my-links">
            {renderLink("col-xs-12 col-sm-12 col-md-2 col-md-offset-3", "Photography", "/work", "")}
            {renderLink("col-xs-12 col-sm-12 col-md-2", "Resume", "/resume", "")}
            {renderLink("col-xs-12 col-sm-12 col-md-2", "Github", "", this.handleRedirect)}
          </div>
        </div>

      </div>
    );
  }
}
