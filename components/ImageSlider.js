import React from 'react'

class ImageSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }
  render() {
    return <div>
      <p>I am on slide {this.state.currentSlideIndex}</p>
    </div>
  }
}

export default ImageSlider
