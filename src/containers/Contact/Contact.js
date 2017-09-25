import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {ContactForm} from 'components';

export default class Contact extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="contact">
        <ContactForm />
      </div>
    );
  }
}
