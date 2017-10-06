import React, {Component} from 'react';
import { RenderInput, RenderTextBox, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      textarea: "",
      errorObject: "",
      pageFields: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    const tempPageFields = {
      firstName: ['required'],
      lastName: [''],
      company: [''],
      email: ['email', 'required'],
      textarea: ['required'],
    }
    const errorContainer = {};
    Object.keys(tempPageFields).forEach( (key) => { errorContainer[key] = { error: null } } );
    this.setState({errorObject: errorContainer, pageFields: tempPageFields});
  }

  handleChange = (event) => {
    this.setState ({ [event.target.name]: event.target.value });
  }

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if(!isThereError){
      console.log("\n\nSuccess!!!");
    } 
  }

  checkValidation = (pageFields, stateFields) => { // match against current fields (current formpage fields) and all current states and only check for the current Fields.      
    var formFields = {};
    Object.keys(pageFields).forEach( (fieldName) => formFields[fieldName] = {rule: pageFields[fieldName], value: stateFields[fieldName], error: '' } )
    return createValidatorNew(formFields); // return the array with error, value, and field validation rule
  }

  checkErrorInValidation = (fields) => {
    if (fields.errorCount === 0){
      return false;
    } else {
      this.setState({errorObject: fields.state}); // altering the errorObj is what triggers the error mssgs on fields.
      return true;
    }
  }

  render() {
    console.log("\n\nSTATE IN CONTACT:", this.state);
    const outerGroupClassName="col-sm-12 col-md-6 form-field-area";
    const labelClassName="col-sm-12 col-md-12 label-title";
    const inputGroupClassName="col-sm-12 col-md-12";
    const outerGroupClassNameButton ="col-sm-3 col-md-3 form-field-area";

    return (
      <div className="container">

        <div className="top-margin pull-right col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="right-content col-sm-12 col-md-12">
            <span>job opportunities, research, collaboration, etc. contact me</span>
          </div>
          <div className="right-content col-sm-12 col-md-12">
            <span>find a photo interesting? contact me to request a purchase or more information</span>
          </div>
        </div>

        <div className="top-margin contact-form-wrap col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <RenderInput label="First Name" value={this.state.firstName} name="firstName" placeholder="" error={this.state.errorObject.firstName.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
          <RenderInput label="Last Name" value={this.state.lastName} name="lastName" placeholder="" error={this.state.errorObject.lastName.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
          <RenderInput label="Company" value={this.state.company} name="company" placeholder="" error={this.state.errorObject.company.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
          <RenderInput label="Email" value={this.state.email} name="email" placeholder="" error={this.state.errorObject.email.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />          
          <RenderTextBox label="Message Me" value={this.state.textarea} name="textarea" placeholder="" rows={5} error={this.state.errorObject.textarea.error} onChange={this.handleChange} outerGroupClassName={inputGroupClassName} labelClassName={labelClassName}  textAreaClassName={inputGroupClassName + " text-area"} />
          <RenderSubmitButton outerGroupClassName={"col-xs-4 " + outerGroupClassNameButton} buttonClassName="contact-btn" onClick={this.handleSubmit} label="Send"/>
        </div>

      </div>
    );
  }

}










