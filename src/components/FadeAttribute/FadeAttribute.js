import React, {Component} from 'react';

// This component takes two things: 
//   1 - the className (parent) with the style you're giving to the element that will be faded in (optional)
//        className fade-slower will go in here
//   2 - the content that will be faded in.

export default class FadeAttribute extends Component {
  constructor(props){
    super(props);
    this.state = {
      fade: false
    }
  }
  componentDidMount() {
    setTimeout(() => { this.setState({fade: true}); }, 300);
  }
  componentWillMount() {
    this.setState({fade: false});
  }
  render() {
    const {parentStyleClassName, innerContent} = this.props;
    let fade = this.state.fade ? ' fadecss show' : ' fadecss';

    return (
      <div className={parentStyleClassName + fade}>
        {innerContent}
      </div>
    );
  }
}
