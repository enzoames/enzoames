import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ContactForm} from 'components';
import {contactEnzoAmes} from "../../actions/Contact/actions";

class Contact extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log("CONTACT PROPS: ", this.props);
    return (
      <div className="contact">
        <ContactForm {...this.props.actions}/>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    actions: bindActionCreators({contactEnzoAmes}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Contact)
