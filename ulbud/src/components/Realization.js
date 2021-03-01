import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Menu from "./Menu";
import img1 from "../assets/DSC00244.JPG";
import img2 from "../assets/DSC00211.JPG";
import img3 from "../assets/DSC00168.JPG";
import img4 from "../assets/DSC00196.JPG";
import img5 from "../assets/DSC00148.JPG";
import img6 from "../assets/DSC00120.JPG";
import img7 from "../assets/DSC00137.JPG";
import img8 from "../assets/DSC00107.JPG";
import img9 from "../assets/DSC00131.JPG";
import img10 from "../assets/DSC00073.JPG";
import img11 from "../assets/DSC00084.JPG";
import img12 from "../assets/DSC00052.JPG";
import img13 from "../assets/DSC01631.JPG";
import img14 from "../assets/DSC01646.JPG";
import img15 from "../assets/DSC01695.JPG";
import img16 from "../assets/DSC01676.JPG";
import img17 from "../assets/DSC01674.JPG";
import img18 from "../assets/DSC01677.JPG";
import img19 from "../assets/DSC01683.JPG";
import img20 from "../assets/DSC01686.JPG";
import img21 from "../assets/DSC01688.JPG";
import img22 from "../assets/DSC01691.JPG";
import img23 from "../assets/DSC01668.JPG";
import img24 from "../assets/DSC01672.JPG";
import img25 from "../assets/DSC01663.JPG";
import img26 from "../assets/DSC01664.JPG";
import img27 from "../assets/DSC01710.JPG";
import img28 from "../assets/DSC01703.JPG";
import img29 from "../assets/DSC01706.JPG";
import img30 from "../assets/DSC01714.JPG";
import img31 from "../assets/DSC01716.JPG";
import img32 from "../assets/DSC01711.JPG";
import img33 from "../assets/DSC01654.JPG";
import img34 from "../assets/DSC01657.JPG";
import img35 from "../assets/DSC01647.JPG";
import img36 from "../assets/DSC01659.JPG";

const imagesData = [
  { src: img1, title: "ul.Naftowa 25 Sosnowiec", position: "horizontal" },
  { src: img2, title: "ul.Naftowa 25 Sosnowiec", position: "horizontal" },
  { src: img3, title: "ul.Naftowa 2 Sosnowiec", position: "horizontal" },
  { src: img4, title: "ul.Naftowa 2 Sosnowiec", position: "horizontal" },
  { src: img5, title: "ul.Kamienna Ruda Śląska", position: "horizontal" },
  { src: img6, title: "ul.Kamienna 38-40 Ruda Śląska", position: "horizontal" },
  { src: img7, title: "ul.Kamienna 38-40 Ruda Śląska", position: "horizontal" },
  { src: img8, title: "ul.Kamienna 38-40 Ruda Śląska", position: "horizontal" },
  { src: img9, title: "ul.Kamienna 38-40 Ruda Śląska", position: "horizontal" },
  { src: img10, title: "ul.Mysłowicka 29 Katowice", position: "horizontal" },
  { src: img11, title: "ul.Mysłowicka 29 Katowice", position: "horizontal" },
  { src: img12, title: "ul.Mysłowicka 10 Katowice", position: "vertical" },
  { src: img13, title: "ul.Begoni 6/8 Tychy", position: "horizontal" },
  { src: img14, title: "ul.Begoni 6/8 Tychy", position: "vertical" },
  { src: img15, title: "ul.Turkusowa 21 Tychy", position: "horizontal" },
  { src: img16, title: "ul.Dąbrowskiego 95 Tychy", position: "horizontal" },
  { src: img17, title: "ul.Dąbrowskiego 95 Tychy", position: "horizontal" },
  { src: img18, title: "ul.Dąbrowskiego 95 Tychy", position: "horizontal" },
  { src: img19, title: "ul.Poziomkowa 14 Tychy", position: "horizontal" },
  { src: img20, title: "ul.Poziomkowa 14 Tychy", position: "horizontal" },
  { src: img21, title: "ul.Poziomkowa 44 Tychy", position: "horizontal" },
  { src: img22, title: "ul.Poziomkowa 44 Tychy", position: "horizontal" },
  { src: img23, title: "ul. De gaulle'a 28 Tychy", position: "horizontal" },
  { src: img24, title: "ul. De gaulle'a 28 Tychy", position: "horizontal" },
  { src: img25, title: "ul.Kochanowskiego 8 Mikołów", position: "horizontal" },
  { src: img26, title: "ul.Kochanowskiego 8 Mikołów", position: "horizontal" },
  { src: img27, title: "ul.Reymonta Tychy", position: "horizontal" },
  { src: img28, title: "ul.Wieniawskiego Tychy", position: "horizontal" },
  { src: img29, title: "ul.Wieniawskiego Tychy", position: "horizontal" },
  { src: img30, title: "ul.Harcerska 5-7 Tychy", position: "horizontal" },
  { src: img31, title: "ul.Harcerska 5-7 Tychy", position: "horizontal" },
  { src: img32, title: "ul.Honoraty Tychy", position: "horizontal" },
  { src: img33, title: "ul.30-lecia 8 Mikołów", position: "horizontal" },
  { src: img34, title: "ul.30-lecia 8 Mikołów", position: "horizontal" },
  { src: img35, title: "ul.30-lecia 5-7 Mikołów", position: "horizontal" },
  { src: img36, title: "ul.30-lecia 5-7 Mikołów", position: "horizontal" },
];

class Realization extends Component {
  state = {
    currentSrc: "",
    isItClicked: false,
    currentTitle: "",
    currentIndex: 0,
  };

  startGallery = (src, title, index) => {
    this.setState({
      isItClicked: true,
      currentSrc: src,
      currentTitle: title,
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
        currentTitle: imagesData[0].title,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        currentSrc: imagesData[this.state.currentIndex + 1].src,
        currentTitle: imagesData[this.state.currentIndex + 1].title,
      });
    }
  };
  prevPicture = () => {
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: imagesData.length - 1,
        currentSrc: imagesData[imagesData.length - 1].src,
        currentTitle: imagesData[imagesData.length - 1].title,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        currentSrc: imagesData[this.state.currentIndex - 1].src,
        currentTitle: imagesData[this.state.currentIndex - 1].title,
      });
    }
  };

  render() {
    return (
      <>
        <Menu />
        <div className="gallery_title">Nasze przykładowe realizacje</div>
        <div className="gallery_container">
          {imagesData.map((image, index) => (
            <img
              onClick={() => this.startGallery(image.src, image.title, index)}
              src={image.src}
              key={index}
            
              className={image.position === "vertical" ? "col vertical" : "col"}
            ></img>
          ))}
        </div>
        <div className={this.state.isItClicked ? "popUp" : "dontPopUp"}>
          <div className="popUpImageArea">
            <img
              className={
                this.state.currentIndex === 11 || this.state.currentIndex === 13
                  ? "popUpImage wider"
                  : "popUpImage"
              }
              src={this.state.currentSrc}
            ></img>
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
            <div className="img_title">
              <h2>{this.state.currentTitle}</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Realization;

// style={{backgroundImage: `url(${this.state.currentSrc})`}}
