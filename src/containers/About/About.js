import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AboutPage } from 'components';
import { fetchGalleryVertical, fetchGalleryYoungEnzo } from "../../actions/Gallery/actions";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(!this.props.verticalgallery.loaded && !this.props.youngenzogallery.loaded){
      this.props.actions.fetchGalleryVertical();
      this.props.actions.fetchGalleryYoungEnzo();
    } 
  }

  render() {
    const {verticalgallery, youngenzogallery} = this.props;
    return (
      <div className="About">
        <AboutPage verticalgallery={verticalgallery} enzogallery={youngenzogallery}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    actions: bindActionCreators({fetchGalleryVertical, fetchGalleryYoungEnzo}, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    verticalgallery: state.verticalgallery,
    youngenzogallery: state.youngenzogallery
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(About)





