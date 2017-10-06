import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import renderHTML from 'react-render-html';

import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { isLoaded as isHomeGalleryLoaded } from 'redux/modules/homegallery';
import { isLoaded as isCoversGalleryLoaded } from 'redux/modules/coversgallery';
import { fetchGalleryHome, fetchGalleryCovers } from '../../actions/Gallery/actions';

import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
//IMPORTING CSS TO WEBSITE
import '../../helpers/app.css';
import '../../helpers/home.css';
import '../../helpers/work.css';
import '../../helpers/resume.css';
import '../../helpers/about.css';
import '../../helpers/contact.css';
import '../../helpers/loader.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/slick-carousel/slick/slick-theme.css";


@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    if (!isHomeGalleryLoaded(getState())) {
      console.log("dispatching::fetchGalleryHome");
      promises.push(dispatch(fetchGalleryHome()));
    }
    if (!isCoversGalleryLoaded(getState())) {
      console.log("dispatching::fetchGalleryCovers");
      promises.push(dispatch(fetchGalleryCovers()));
    }
    return Promise.all(promises);
  }
}])

@connect(
  (state, ownProps) => ({
    user: state.auth.user,
    params: ownProps.params,
    location: ownProps.location,
  }),
  {logout, pushState: push})

export default class App extends Component {
  constructor(props){
    super(props);
  }
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/home');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    console.log("\n\n==> APP PROPS:\n\n", this.props);
    const {user} = this.props;

    return (
      <div> 
       
        <Helmet {...config.app.head}/>
        
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle />

          </Navbar.Header>
          
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="">
                <NavItem eventKey={17}>Home</NavItem>
              </LinkContainer>
                            
              <LinkContainer to="/work">
                <NavItem eventKey={77}>Work</NavItem>
              </LinkContainer>

              <LinkContainer to="/resume">
                <NavItem eventKey={77}>Resume</NavItem>
              </LinkContainer>

              <LinkContainer to="/about">
                  <NavItem eventKey={7} className="">About</NavItem>
              </LinkContainer>

              <LinkContainer to="/contact">
                  <NavItem eventKey={10} className="">Contact</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>

        </Navbar>
        
        <div className="app-content">
          {this.props.children}
        </div>
        
        {/* FOOTER CONTENT HERE
        <div className='well text-center'>
        </div>
        */}
      
      </div>
    );
  }
}





              // {!auth.isAuthenticated &&
                
              //   <LinkContainer to="">
              //     <NavItem eventKey={6}>{}</NavItem>
              //   </LinkContainer>}
              
              // {!auth.isAuthenticated &&
              //   <LinkContainer to="">
              //     <NavItem eventKey={6}>{}</NavItem>
              //   </LinkContainer>}
              // {auth.isAuthenticated &&
              //   <LinkContainer to="">
              //       <NavItem eventKey={9} className="Account-link">
              //           Account
              //       </NavItem>
              //   </LinkContainer>
              // }
              // {auth.isAuthenticated &&
              //   <LinkContainer to="">
              //       <NavItem eventKey={8} className="logout-link" onClick={this.handleLogout}>
              //           Log out
              //       </NavItem>
              //   </LinkContainer>
              // }



