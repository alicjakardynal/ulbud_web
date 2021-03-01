import React, { Component } from "react";
import Menu from "./Menu";
import img1 from "../assets/2_optimizedulbud.jpg";
import img2 from "../assets/4_optimized.jpg";
import img3 from "../assets/scan_optimizedulbud.jpg";
import img4 from "../assets//6_optimized.jpg";
import img5 from "../assets/8_optimized.jpg";
import img6 from "../assets/5_optimizedulbud.jpg";
import img7 from "../assets/7_optimized.jpg";
import img8 from "../assets/1_optimizedulbud.jpg";
import img9 from "../assets/3_optimized.jpg";
import img10 from "../assets/3_optimizedulbud.jpg";
import img11 from "../assets/4_optimizedulbud.jpg";
import img12 from "../assets/5_optimized.jpg";
import img13 from "../assets/6_optimizedulbud.jpg";
import img14 from "../assets/7_optimizedulbud.jpg";
import img15 from "../assets/8_optimizedulbu.jpg";
import img16 from "../assets/9_optimizedulbud.jpg";
import img17 from "../assets/9_optimized.jpg";
import img18 from "../assets/10_optimizedulbud.jpg";
import img19 from "../assets/11_optimizedulbud.jpg";
import img20 from "../assets/myslowicka1-2_optimized.jpg";
import img21 from "../assets/myslowicka10-2-2_optimized.jpg";
import img22 from "../assets/myslowicka101-2_optimized.jpg";
import img23 from "../assets/myslowicka2-2_optimized.jpg";
import img24 from "../assets/scan10_optimized.jpg";
import img25 from "../assets/scan10_optimized.jpg";
import img26 from "../assets/scan10_optimized.jpg";
import img27 from "../assets/scan11_optimizedulbud.jpg";

const imagesData = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
  { src: img25 },
  { src: img26 },
  { src: img27 },
];

class References extends Component {
  state = {
    currentSrc: "",
    isItClicked: false,
    currentTitle: "",
    currentIndex: 0,
  };
  startGallery = (src, index) => {
    this.setState({
      isItClicked: true,
      currentSrc: src,
      currentIndex: index,
    });
  };
  backFromGallery = () => {
    this.setState({
      isItClicked: false,
    });
  };
  nextPicture = () => {
    if (this.state.currentIndex === imagesData.length - 1) {
      this.setState({
        currentIndex: 0,
        currentSrc: imagesData[0].src,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        currentSrc: imagesData[this.state.currentIndex + 1].src,
      });
    }
  };
  prevPicture = () => {
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: imagesData.length - 1,
        currentSrc: imagesData[imagesData.length - 1].src,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        currentSrc: imagesData[this.state.currentIndex - 1].src,
      });
    }
  };
  render() {
    return (
      <>
        <Menu />
        <div className="gallery_title">potwierdzenie naszych kwalifikacji</div>
        <div className="gallery_container references">
          {imagesData.map((image, index) => (
            <img
              onClick={() => this.startGallery(image.src, index)}
              src={image.src}
              className="col"
            ></img>
          ))}
        </div>
        <div className={this.state.isItClicked ? "popUp" : "dontPopUp"}>
          <div className="popUpImageArea popUpReferences">
            <img className="popUpImage" src={this.state.currentSrc}></img>
            <i className="fas fa-angle-left" onClick={this.prevPicture}>
              {" "}
            </i>
            <button
              onClick={this.backFromGallery}
              className="close_btn fas fa-times"
            ></button>
            <i className="fas fa-angle-right" onClick={this.nextPicture}>
              {" "}
            </i>
          </div>
        </div>
      </>
    );
  }
}

export default References;
