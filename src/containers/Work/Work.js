import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchGalleryActions from "../../actions/Gallery/actions";
import { WorkPage } from 'components';

class Work extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(!this.props.coversgallery.loaded){
      console.log("coversgallery:notloaded:Fetching now");
      this.props.actions.fetchGalleryCovers()
    }
  }

  render() {
    console.log("\nWORK PROPS:", this.props);
    const {coversgallery, nycgallery, peoplegallery, streetsgallery, fixedlinkgallery} = this.props;
    return (
      <div className="work">
        <WorkPage coversgallery={coversgallery} nycgallery={nycgallery} peoplegallery={peoplegallery} streetsgallery={streetsgallery} fixedlinkgallery={fixedlinkgallery} {...this.props.actions}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    actions: bindActionCreators({...fetchGalleryActions}, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    coversgallery: state.coversgallery,
    fixedlinkgallery: state.fixedlinkgallery,
    nycgallery: state.nycgallery,
    peoplegallery: state.peoplegallery,
    streetsgallery: state.streetsgallery
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Work)
