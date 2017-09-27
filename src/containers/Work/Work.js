import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGalleryCovers } from '../../actions/Gallery/actions';

class Work extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(!this.props.coversgallery.loaded){
      console.log("coversgallery not loaded::dispatch::fetchGalleryCovers")
      this.props.actions.fetchGalleryCovers()
    }
  }

  render() {
    console.log("\nWORK PROPS:", this.props);
    const {coversgallery} = this.props;
    return (
      <div>
        Work
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    actions: bindActionCreators({fetchGalleryCovers}, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    coversgallery: state.coversgallery
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Work)
