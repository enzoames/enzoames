import React, {Component} from 'react';
import { hasValue } from '../../utils/utilfunctions';

export default class Photo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { className, src, parentsHeight} = this.props; 
    const tempHeight = hasValue(parentsHeight) ? parentsHeight : "";
    return (
      <div style={{height: tempHeight + 'px'}}>
        <img className={"img-responsive " + className} src={src}/>
      </div>
    );
  }
}
