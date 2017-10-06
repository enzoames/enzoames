import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGalleryHome } from '../../actions/Gallery/actions';
import { HomePage } from 'components';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!this.props.homegallery.loaded){
      console.log("componentDidMount::isHomeGalleryLoaded:NO:dispatch:fetchGalleryHome");
      this.props.actions.fetchGalleryHome()
    }
  }

  render() {
    console.log("\nHOME PROPS:", this.props);
    const {homegallery} = this.props;
    return (
      <div className="home">
        <HomePage homegallery={homegallery} />
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
    homegallery: state.homegallery
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home)
