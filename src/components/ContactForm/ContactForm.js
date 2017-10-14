import React, {Component} from 'react';
import { RenderInput, RenderTextBox, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      sentflag: false,
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      textarea: "",
      errorObject: "",
      pageFields: "",
      NullErrorContainer: ""
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
    this.setState({errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer});
  }

  handleChange = (event) => {
    this.setState ({ [event.target.name]: event.target.value });
  }

  handleNewMessage =  () =>{
    this.setState({sentflag: false, firstName: "", lastName: "", company: "", email: "", textarea: "", errorObject: this.state.NullErrorContainer});
  }

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if(!isThereError){
      const result = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        company: this.state.company,
        email: this.state.email,
        message: this.state.textarea
      }
      this.props.contactEnzoAmes(result);
      console.log("RESULT", result);
      this.setState({sentflag: true});
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
    console.log("\n\nSTATE IN CONTACT FORM:", this.state);
    console.log("\n\nPROPS IN CONTACT FORM:", this.props);
    const outerGroupClassName="col-sm-12 col-md-6 form-field-area";
    const labelClassName="col-sm-12 col-md-12 label-title";
    const inputGroupClassName="col-sm-12 col-md-12";
    const outerGroupClassNameButton ="col-sm-3 col-md-3 form-field-area";


    const renderContactForm = () => {
      return(
        <div>
        <RenderInput label="First Name" value={this.state.firstName} name="firstName" placeholder="" error={this.state.errorObject.firstName.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
        <RenderInput label="Last Name" value={this.state.lastName} name="lastName" placeholder="" error={this.state.errorObject.lastName.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
        <RenderInput label="Company" value={this.state.company} name="company" placeholder="" error={this.state.errorObject.company.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
        <RenderInput label="Email" value={this.state.email} name="email" placeholder="" error={this.state.errorObject.email.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />          
        <RenderTextBox label="Message Me" value={this.state.textarea} name="textarea" placeholder="" rows={5} error={this.state.errorObject.textarea.error} onChange={this.handleChange} outerGroupClassName={inputGroupClassName} labelClassName={labelClassName}  textAreaClassName={inputGroupClassName + " text-area"} />
        <RenderSubmitButton outerGroupClassName={"col-xs-4 " + outerGroupClassNameButton} buttonClassName="contact-btn" onClick={this.handleSubmit} label="Send"/>
        </div>
      );
    }

    const renderSideMessage = (string) => {
      return(
        <div className="right-content col-sm-12 col-md-12">
          <span>{string}</span>
        </div>
      );
    }

    const renderSuccessMessage = () => {
      return(
        <div>
          <h4 className="right-content">Your message has been sent ! </h4> {/* re-using the css of right-content. technically not the right content */}
          <RenderSubmitButton outerGroupClassName={"col-xs-10 col-sm-4 col-md-4 form-field-area"} buttonClassName="contact-btn" onClick={this.handleNewMessage} label="New Message"/>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="top-margin pull-right col-xs-12 col-sm-12 col-md-4 col-lg-4">
          {renderSideMessage("job opportunities, research, collaboration, etc. contact me")}
          {renderSideMessage("find a photo interesting? contact me to request a purchase or more information")}
        </div>
        <div className="top-margin contact-form-wrap col-xs-12 col-sm-12 col-md-8 col-lg-8">
          {this.state.sentflag ? renderSuccessMessage() : renderContactForm() }
        </div>
      </div>
    );
  }

}







