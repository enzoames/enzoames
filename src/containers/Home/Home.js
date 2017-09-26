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
    this.props.actions.fetchGalleryHome()
  }

  componentDidMount(){
    //FETCH albuum covers for work page
  }

  render() {
    const {gallery} = this.props;
    return (
      <div className="home">
        <HomePage galleryList={gallery} />
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
