import React, { Component } from 'react';
import { Link } from 'react-router';
import { FadeAttribute, Photo } from 'components';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1300,
      height: 900
    }
  this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions = () => {
    let winWidth = window.innerWidth; //let winWidth = $(window).width();
    let winHeight = window.innerHeight; //let winHeight = $(window).height();
    this.setState({width: winWidth, height: winHeight});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleRedirect(){
    window.location.assign("https://www.github.com/enzoames");
  }

  render() {
    const {homegallery} = this.props;
    console.log("HOMEPAGE PROPS", this.props);
    console.log("HOMEPAGE STATE", this.state);

    const renderLink = (className, label, link, onClick) => {
      return(
        <div className={className}>
          <Link to={`${link}`}>
            <span className="link-style" onClick={onClick}>{label}</span>
          </Link>
        </div>);
    }

    const renderFadeTitle = <h3>Enzo Ames</h3>;
    // Want something to fade slower - send the fade-slower className to FadeAttribute component
    const renderFadeSubtitle = <h4>Front-End Developer and Photographer</h4>; 

    return (
      <div>

        {this.props.homegallery.loaded ? 
          (<Photo className="background-photo" src={homegallery.homegallery[0].photo.image} parentsHeight={this.state.height} />) : ''
        }

        <FadeAttribute parentStyleClassName={"my-title"} innerContent={renderFadeTitle}/>
        <FadeAttribute parentStyleClassName={"my-subtitle fade-slower"} innerContent={renderFadeSubtitle}/>

        <div className="my-links">
          {renderLink("col-xs-12 col-sm-12 col-md-2 col-md-offset-3", "Photography", "/work", "")}
          {renderLink("col-xs-12 col-sm-12 col-md-2", "Resume", "/resume", "")}
          {renderLink("col-xs-12 col-sm-12 col-md-2", "Github", "", this.handleRedirect)}
        </div>

      </div>
    );
  }
}





// <div className="background" style={{height: this.state.height+25 + 'px'}}>

          // <div className="my-title">
          //   <h3>Enzo Ames</h3>
          //   <h4>Front-End Developer and Photographer</h4>
          // </div>
