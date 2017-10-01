import React, {Component} from 'react';
import { hasValue } from '../../utils/utilfunctions';
import { FadeAttribute, Photo } from 'components';

export default class WorkPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isCoverView: true,
      selectedGallery: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (gallery_name) => {
    switch (gallery_name) {
      case 'nyc_gallery':
        if(!this.props.nycgallery.loaded)
          this.props.fetchGalleryNyc()
        break;
      case 'people_gallery':
        if(!this.props.peoplegallery.loaded)
          this.props.fetchGalleryPeople();
        break;
      case 'streets_gallery':
        if(!this.props.streetsgallery.loaded)
          this.props.fetchGalleryStreets();
        break;
      case 'fixedlink_gallery':
        if(!this.props.fixedlinkgallery.loaded)
          this.props.fetchGalleryFixedlink();
        break;
    }
    this.setState({isCoverView: false, selectedGallery: gallery_name});
  }

  handleBackButton = () =>{
    this.setState({isCoverView: true});
  }

  handleGalleryToggle = () =>{
    console.log("\nhandleGalleryToggle");
  }

  render() {
    const {coversgallery, nycgallery, peoplegallery, streetsgallery, fixedlinkgallery, } = this.props;
    console.log("PROPS WORKPAGE:", this.props);
    console.log("STATE WORKPAGE:", this.state);

    const renderCoversGalleryView = () => {
      let coversCollection;
      if (coversgallery.loaded){
        coversCollection = coversgallery.coversgallery.map( (photo) => 
          <div className="col-sm-12 col-md-6 col-lg-6 cover-wrap" onClick={ () => this.handleClick(photo.gallery_name)}>
            <Photo className={""} src={photo.photo.image} parentsHeight={null} />
            <div className="cover-details">
              <span>-- view --</span>
              <span>{photo.gallery_name}</span>
            </div>  
          </div>
        );
      } else {
        coversCollection = "LOADING . . .";
      }

      return(
        <div className="galleries-grid">
          {coversCollection}
        </div>
      );
    }

    const renderSingleGalleryView = (selectedGallery) => {
      let currentGallery; //array containing photos
      let currentGalleryDisplay;
      let highlightArray = [false, false, false, false];

      switch(selectedGallery){
        case nycgallery.gallerytype:
          if(nycgallery.loaded){
            currentGallery = nycgallery.nycgallery;
            highlightArray[0] = true;
          }
          break;

        case peoplegallery.gallerytype:
          if(peoplegallery.loaded){
            currentGallery = peoplegallery.peoplegallery;
            highlightArray[1] = true;
          }
          break;

        case streetsgallery.gallerytype:
          if(streetsgallery.loaded){
            currentGallery = streetsgallery.streetsgallery;
            highlightArray[2] = true;
          }        
          break;

        case fixedlinkgallery.gallerytype:
          if(fixedlinkgallery.loaded){
            currentGallery = fixedlinkgallery.fixedlinkgallery;
            highlightArray[3] = true;
          }        
          break;

        default: 
          currentGallery = false;
      }

      if(currentGallery){
        currentGalleryDisplay = currentGallery.map( (photo) => 
          <div className="single-photo">
            <Photo className={""} src={photo.photo.image} parentsHeight={null} />
          </div>
        );
      }

      const galleryLinks =
        <div className="gallery-sidebar">
          <span className="glyphicon glyphicon-menu-left" onClick={this.handleBackButton}></span>
          <h3 className={ highlightArray[0] ? "highlight-style" : ""} onClick={this.handleGalleryToggle}>NYC</h3>
          <h3 className={ highlightArray[1] ? "highlight-style" : ""} onClick={this.handleGalleryToggle}>People</h3>
          <h3 className={ highlightArray[2] ? "highlight-style" : ""} onClick={this.handleGalleryToggle}>Streets</h3>
          <h3 className={ highlightArray[3] ? "highlight-style" : ""} onClick={this.handleGalleryToggle}>FixedLink</h3>
        </div>;


      return(
        <div>
          <FadeAttribute parentStyleClassName={"col-xs-12 col-sm-12 col-md-2 col-lg-2 left-content"} innerContent={galleryLinks} />
          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 right-content">
            {currentGalleryDisplay}
          </div>
        </div>
      );
    }


    return (
      <div>
        {this.state.isCoverView ? renderCoversGalleryView() : renderSingleGalleryView(this.state.selectedGallery) }
      </div>
    );
  }
}


