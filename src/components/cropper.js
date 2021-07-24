import React, { Component } from 'react'
import Cropper from 'cropperjs'
import "cropperjs/dist/cropper.min.css"
import "./cropper.css"

class ImgCropper extends Component {
  constructor() {
    super();
    this.state = {
      imgPreview: "",
      // aspectRatio: 16 / 9
    }
    this.imageElm = React.createRef();
  }
  componentDidMount() {
    const cropper = new Cropper(this.imageElm.current, {
      // properties
      zoomable: true,
      scalable: false,
      aspectRatio: 16 / 9,
      // the crop func
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        // place for the http req to server
        this.setState({ imgPreview: canvas.toDataURL('image/png') });
      }
    })
  }
  render() {
    return (
      <div>
        <div className="img-container">
          <img ref={this.imageElm} src={this.props.src} alt="test" />
        </div>
        {/* <button onChange={updateRatio}></button> */}
        {/* Preview */}
        <img className="img-preview" src={this.state.imgPreview} alt="preview" />
      </div>
    )
  }
}

export default ImgCropper;
