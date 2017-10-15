import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Resume extends Component {
  constructor(props){
    super(props);
    this.state = {
      educationFlag: false,
      qualificationFlag: false,
      workFlag: false,
      projectFlag: false,
      extraFlag: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (target) =>{
    const tempState = this.state;
    let tempValue = false;
    Object.keys(tempState).forEach( (element) => {
      if(element===target){
        if(tempState[element]===false){
          tempValue = true;
        } else {
          tempValue = false;
        }
      }
    });
    this.setState ({ [target]: tempValue});
  }

  handleRedirect = (redirect) => {
    if(redirect === "git")
      window.location.assign("https://www.github.com/enzoames");
    if(redirect === "linkedin")
      window.location.assign("https://www.linkedin.com/in/enzoames/");
  }

  render() {
    console.log("\n\n=>this.state", this.state);

    const renderIcon = <span className="glyphicon glyphicon-ok-circle"></span>;
    const renderEducationIcon = <span className="glyphicon glyphicon-education"></span>;
    const renderQualificationIcon = <span className="glyphicon glyphicon-book"></span>;
    const renderWorkExperienceIcon = <span className="glyphicon glyphicon-folder-open"></span>;
    const renderProjectIcon = <span className="glyphicon glyphicon-knight"></span>;
    const renderExtracurricularIcon = <span className="glyphicon glyphicon-star-empty"></span>;
    
    const CUNYTechExperience = ["Selected to competitive full stack JavaScript training program that prepares students for careers in software engineering.", "Learn in-demand technologies like React, Node + Express and processes for design, implementation, testing, and deployment."]
    const AlpineExperience = ["Worked in a team of three including the senior software engineer to create and design a website that provides investment opportunities to investors", "Serialized data and created end-points using Django REST Framework to update database tables on the company’s back-end server", "Implemented the Scrapy Framework to scrape political related articles from different Chinese websites. Data scraped was then saved in MongoDB"];
    const SEEKExperience = ["Introduced case load of 12-15 freshmen and sophomore students to the fundamental concepts of computer science and evaluated student progress over the semester", "Assisted students with projects in data structures and algorithms as well as provided guideless for their next steps in their career"];
    const PhotoExperience = ["Attended sports games to photograph student athletes as they compete in CUNY conference matches", "Presented final edited images to the Assistant Athletics Coordinator Director at CCNY for website use"];

    const renderDate = (date) => {
      return(
        <span className="date">{date}</span>
      );
    }

    const renderResumeInnerContent = (title, text, date) => {
      return(
        <div className="col-sm-12 col-md-12">
          <span className="inner-content-title">{title}</span>
          {date ? renderDate(date) : "" }
          <span className="content-text">{text}</span>
        </div>);
    }

    const renderWorkExperience = (title, experienceArray, date) => {
      const list = experienceArray.map( (item) =>  <div className="work-inner-text"><span className="glyphicon glyphicon-menu-right"></span>{item}</div>);
      return(
        <div className="col-sm-12 col-md-12">
          <span className="inner-content-title">{title}</span>
          {date ? renderDate(date) : "" }
          {list}
        </div>);
    }

    return (
      <div className="Resume container-fluid">
        <h1>Edwards Enzo Ames Pizarro</h1>
        <h3 className="sub-t">New York City {renderIcon} 917 724 5096 {renderIcon} e.amespizarro@gmail.com {renderIcon} <span className="linkgit" onClick={ () => this.handleRedirect("linkedin")}>Linkedin</span> {renderIcon} <span className="linkgit" onClick={ () => this.handleRedirect("git")}>Github</span></h3>

        <div className="content col-sm-12 col-md-12">
          <h3 className="content-title edu-trigger" onClick={ () => this.handleClick("educationFlag") } >{renderEducationIcon}Education</h3>
          {this.state.educationFlag &&
            <div>
              {renderResumeInnerContent("The City College of New York, CUNY", "BS, Computer Science, Grove School of Engineering, GPA: 3.33", "June 2018")}
              {renderResumeInnerContent("Relevant Courses", "Database Systems, Big Data Management, Artificial Intelligence, Algorithms, Software Design Lab, Numerical Issues in Scientific Programming, Theoretical of CS, Data Structures")}
            </div>
          }
        </div>

        <div className="content col-sm-12 col-md-12">
          <h3 className="content-title" onClick={ () => this.handleClick("qualificationFlag") }>{renderQualificationIcon}Qualifications</h3>
          {this.state.qualificationFlag && 
            <div>
              {renderResumeInnerContent("Technical Skills", "Python, HTML, CSS, JSX, JavaScript, React & Redux, Django Framework, Django REST Framework, Bootstrap, Swift, C, C++, SQL, Java, Scrapy Framework, and Adobe Lightroom, Photoshop, and Illustrator")}
              {renderResumeInnerContent("Languages", "Spanish")}
            </div>
          }
        </div>

        <div className="content col-sm-12 col-md-12">
          <h3 className="content-title" onClick={ () => this.handleClick("workFlag") }>{renderWorkExperienceIcon}Work Experience</h3>
          {this.state.workFlag &&
            <div>
              {renderWorkExperience("Software Developer, CUNY Tech Prep, Manhattan", CUNYTechExperience, "September 2017 – Present")}
              {renderWorkExperience("Software Developer, Alpine Capital Advisors, Manhattan", AlpineExperience, "February 2017 – August 2017")}
              {renderWorkExperience("Computer Science Tutor, SEEK PAL Tutoring Center, CCNY", SEEKExperience, "September 2016 – January 2017")}
              {renderWorkExperience("Sports Photographer, Athletics Department, CCNY", PhotoExperience, "September 2015 – May 2016")}
            </div>
          }
        </div>

        <div className="content col-sm-12 col-md-12">
          <h3 className="content-title" onClick={ () => this.handleClick("projectFlag") }>{renderProjectIcon}Project Experience</h3>
          {this.state.projectFlag &&
            <div>
            {renderResumeInnerContent("enzoames-dev.com – React & Redux and Django", "Created a web application built on top of in-demand frameworks. This application is designed to showcase my professional skills as a web developer, and my photography work. Shows flawless structure and communication between front-end and back-end server.", "Fall 2017")}
            {renderResumeInnerContent("DRMR App - Swift", "This app focuses on providing a platform for people to write down their dreams (dream journal). Using swift, we register each user and all their corresponding dreams to the database. DRMR offers the “tagging” feature which allows users to tag different users in their dreams", "Spring 2017")}
            {renderResumeInnerContent("Geospatial and Temporal Analysis of News Based Tweets - PySpark", "Analyzed Twitter to gain a better understanding of how users share information through social media platforms. This analysis uses Twitter’s streaming API to collect tweets and also uses the NY times archive API to cross reference the same tweets to understand popular topics tweeted and the relevance of news based on tweets", "Spring 2017")}
            {renderResumeInnerContent("Ticket Reservation System – Django Framework & Python", "This system enhances the functionality of the Amtrak ticket booking system. This system is implemented using Django Framework and hosted using Google Cloud Platform. Users are provided with a larger selection of departure times, quick train searching, and in advance train booking", "Spring 2017")}
            </div>
          }
        </div>        

        <div className="content col-sm-12 col-md-12">
          <h3 className="content-title" onClick={ () => this.handleClick("extraFlag") }>{renderExtracurricularIcon}Extracurricular</h3>
          {this.state.extraFlag && 
            <div className="col-sm-12 col-md-12">
              <span className="content-text">Treasurer, Code Dojo: Website Development Club{renderDate("Fall 2016 – Present")}</span>
              <span className="content-text">Photographer, theCAMPUS newspaper{renderDate("Fall 2016")}</span>
              <span className="content-text">Team Captain, CCNY Men’s Soccer{renderDate("Fall 2013")}</span>
            </div>
          }
        </div>

      </div>
    );
  }
}


















