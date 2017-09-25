import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../config';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { Redirect } from 'react-router'
import { HomePage, FadeAttribute } from 'components';
import { fetchGalleryHome } from '../../actions/Gallery/actions';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log("Fetching gallery")
    this.props.actions.fetchGalleryHome()
  }

  render() {
    const {galleryList} = this.props;
    return (
      <div className="home">
        <HomePage galleryList={galleryList}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    actions: bindActionCreators({fetchGalleryHome}, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home)



// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: 1300,
//       height: 900
//     }
//   this.updateDimensions = this.updateDimensions.bind(this);
//   }

//   updateDimensions = () => {
//     console.log("updateDimensions");
//     let winWidth = window.innerWidth; //let winWidth = $(window).width();
//     let winHeight = window.innerHeight; //let winHeight = $(window).height();
//     this.setState({width: winWidth, height: winHeight-50});
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions);
//   }

//   componentWillMount() {
//     console.log("componentWillMount"); //APP.JS NEEDS TO PASS DOWN SIZE OF WINDOW TO START WITH
//     this.updateDimensions;
//     console.log("componentWillMount2");
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updateDimensions);
//   }

//   handleRedirect(){
//     window.location.assign("https://www.github.com/enzoames");
//   }

//   render() {
//     console.log("HOME PROPS", this.props);
//     console.log("HOME STATE", this.state);

//     const renderLink = (className, label, link, onClick) => {
//       return(
//         <div className={className}>
//           <Link to={`${link}`}>
//             <span className="link-style" onClick={onClick}>{label}</span>
//           </Link>
//         </div>);
//     }

//     const renderFadeTitle = <h3>Enzo Ames</h3>;
//     // Want something to fade slower - send the fade-slower className to FadeAttribute component
//     const renderFadeSubtitle = <h4>Front-End Developer and Photographer</h4>; 

//     return (
//       <div className="home">

//         <div className="background" style={{height: this.state.height+25 + 'px'}}>

//           <FadeAttribute parentStyleClassName={"my-title"} innerContent={renderFadeTitle}/>
//           <FadeAttribute parentStyleClassName={"my-subtitle fade-slower"} innerContent={renderFadeSubtitle}/>

//           <div className="my-links">
//             {renderLink("col-xs-12 col-sm-12 col-md-2 col-md-offset-3", "Photography", "/work", "")}
//             {renderLink("col-xs-12 col-sm-12 col-md-2", "Resume", "/resume", "")}
//             {renderLink("col-xs-12 col-sm-12 col-md-2", "Github", "", this.handleRedirect)}
//           </div>
//         </div>

//       </div>
//     );
//   }
// }



          // <div className="my-title">
          //   <h3>Enzo Ames</h3>
          //   <h4>Front-End Developer and Photographer</h4>
          // </div>
