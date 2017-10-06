import React, {Component} from 'react';
import { FadeAttribute, SliderSlick, Loader, Photo } from 'components';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 900
    }
  this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions = () => {
    let winWidth = window.innerWidth; //let winWidth = $(window).width();
    let winHeight = window.innerHeight; //let winHeight = $(window).height();
    this.setState({width: winWidth, height: winHeight-50});
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  // =============================
  // ====== RENDER FUNCTION ======
  // =============================

  render() {
    const { verticalgallery, enzogallery } = this.props;
    console.log("PROPS ABOUTPAGE:", this.props);

    const renderFadeTitle = <span>I'm Enzo</span>;
    const renderLetsgo = <div><span>lets go</span><span className="glyphicon glyphicon-triangle-bottom"></span></div>;

    // ==============================
    // ====== Photo Containers ======
    // ==============================
    let verticalgalleryContainer;
    let enzogalleryContainer;

    if(verticalgallery.loaded && enzogallery.loaded){
      verticalgalleryContainer = verticalgallery.verticalgallery.map( (photo) => 
        <div>
          <Photo className="parent" photoClassName="img-padding" src={photo.photo.image} parentsHeight={null} />
        </div>
      );

      enzogalleryContainer = enzogallery.youngenzogallery.map( (photo) => 
        <div>
          <Photo className="parent" photoClassName="img-padding" src={photo.photo.image} parentsHeight={null} />
        </div>
      );
    }

    // =============================
    // ====== Slider Settings ======
    // =============================

    const gallerySettings = { 
      dots: true,
      fade: true,
      infinite: true, 
      speed: 500, 
      // adaptiveHeight: true, 
      // variableWidth: true,
      autoplay: true, 
      // swipeToSlide: true, 
      slidesToScroll: 1, 
      slidesToShow: 1, 
      // arrows: false, 
    };

    const photoSlider =
      <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5 slider-main-wrap">
        <SliderSlick photoContainer={enzogalleryContainer} settings={gallerySettings}/>
      </div>;

    const renderPhotoSlider = this.props.enzogallery.loaded ? (photoSlider) : (<Loader />);

    // ===========================
    // ====== Render Titles ======
    // ===========================

    const renderTitle = (className, titleClassName, title1, title2, title3 ) => {
      return(
        <div className={className}>
          <div className={titleClassName}>{title1}</div>
          <div className={titleClassName}>{title2}</div>
          <div className={titleClassName}>{title3}</div>
        </div>
      );
    }


    // ==================================================
    // ============= Render Function Return =============
    // ==================================================
    
    return (
      <div>
        
        <section className="introduction" style={{height: this.state.height + 'px'}} >
          <FadeAttribute parentStyleClassName={"intro-title"} innerContent={renderFadeTitle} />
          <FadeAttribute parentStyleClassName={"letsgo fade-slower"} innerContent={renderLetsgo} />
        </section>

        <section className="about-website" style={{height: this.state.height + 'px'}} >
          <div className="about-website-wrap">        
            <div className="about-website-content col-xs-12 col-sm-7 col-md-7 col-lg-7">
              
              {renderTitle("col-xs-12 col-sm-12 col-md-6 col-lg-6", "about-title white-font", "about my website", "&", "college experience" )}

              <span className="about-text white-font"> This website has been build on top of React and Redux, two very popular 
                javascript frameworks. Just with that being said I want to thank Henry for introducing me to these frameworks 
                (also to Django) and teaching me what it really is to code at production level.
                <br/><br/>enzoames.com is running on a linode, a cloud hosting server. Their documentation and tutorials were very 
                helpful in the deploying aspect. In regards to the photography in this web application - the photos are being fetch 
                from a Django backend application also created by me. 
                <br/><br/>Over the summer (2017) I learned the necessary skills to build my personal website and it wasnt until
                mid september that I started building it from scratch. Looking at the final product, I can see that
                it has come a long way, in terms of code, design and efficiency.
                <br/><br/>I can't put into words or explain my time at CCNY. 
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

            {renderTitle("col-xs-12 col-sm-12 col-md-12 col-lg-12", "about-title", "myself, my photography", "&", "brave young years" )}

            {renderPhotoSlider}

            <div className="about-text">
              In 2013, all Sebastian and I needed were our skateboards, iPhones, and the willingness to explore the city. 
              As we grow up we don't realize the concept of time. Time is all we have in our lives. The fact that with age comes 
              more responsibilities - our childhood dreams and freedom slowly slowly start to diminish.
              <br/><br/>Now you have a full time job to support yourself or enrolled full time in college trying to pursue a career. Why is it that during our late teens and early twenties we feel the most powerful? During this period, we think we can change the world with our ideas and actions.
              <br/><br/>Brave Young Years wants you to remember that there is a young powerful version of you sitting in your heart that will always be there long after time consumes you with responsibilities. Be powerful and never let time take away what is yours in nature. To create, explore, think, believe, and to always stay free. 
              <br/><br/>Through my photography I want you to find inspiration in yourself and see what this city is all about. If you make it here, you can make it anywhere. This city is all about the people you know; not to step over anyone but to use each other as a ladder for equal greatness for all. Big City Dreams is the name I give to this city because it is where big ideas are born.
              <br/><br/>If you like the concept of Brave Young Years then send me an email. Any comment is truly appreciated.
            </div>

          </div>


        </section>
      


      </div>
    );
  }
}





            // <div className="col-xs-12 col-sm-12 col-md-4">
            //   <span className="about-text">In 2013, all Sebastian and I needed were our skateboards, iPhones, and the willingness to explore the city. 
            //     As we grow up we don't realize the concept of time. Time is all we have in our lives. The fact that with age comes 
            //     more responsibilities - our childhood dreams and freedom slowly banish away like written words at the beach.
            //   </span>
            // </div>
            
            // <div className="col-xs-12 col-sm-12 col-md-4">
            //   <div className="about-me-gallery">
            //   </div>
            // </div> 

            // <div className="bottom-margin col-xs-12 col-sm-12 col-md-12 col-lg-12">
            //   <span className="about-text"> 
            //   </span>
            // </div>

