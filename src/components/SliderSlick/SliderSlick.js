import React, { Component } from 'react'
import Slider from 'react-slick';

// <photo> s need to be wrapped inside => <div><photo /></div> 
export default class SliderSlick extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { photoContainer, settings } = this.props;
    //const sliderContent = photoContainer ? photoContainer : '';
    return (
      <div>
        <Slider {...settings}>
          {photoContainer}
        </Slider>
      </div>
    )
  }
}