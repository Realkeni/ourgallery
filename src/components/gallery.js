import React from "react";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {

  const images = [
    "/project 1.png",
    "/project 4.png",
    "/project 10.jpeg",
    "/project 7.png",
    "/project 5.png",
    "/project 9.jpeg",
    "/project 13.png",
    "/project 7.png",
  ];

  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;
      return newIndex;
    });
  };
  
  return (
    <>
  <div className="gallery-container">
    <h1 className="heading">OUR GALLERY</h1>
    <h4 className="subhead">Welcome to our Trainee Projects Gallery, where we proudly display the innovative and creative work of our talented trainees. Each project showcased here is a testament to the hard work, dedication, and unique perspectives our trainees bring to the table.</h4>
    
    <div className="gallery">
      <div className="gallery-item" data-index={1}>
        <Image src="/project 1.png" alt="Image 1"   width={230}
            height={230} />
      </div>
      <div className="gallery-item" data-index={2}>
        <Image src="/project 4.png" alt="Image 2"   width={230}
            height={230} />
      </div>
      <div className="gallery-item" data-index={3}>
        <Image src="/project 10.jpeg" alt="Image 3"   width={230}
            height={230} />
      </div>
      <div className="gallery-item" data-index={4}>
        <img src="/project 7.png" alt="Image 4"  width={230}
            height={230} />
      </div>
      <div className="gallery-item" data-index={5}>
        <Image src="/project 5.png" alt="Image 5"  width={230}
            height={230} />
      </div>
      <div className="gallery-item" data-index={6}>
        <Image src="/project 9.jpeg" alt="Image 6"  width={230}
            height={230} />
      </div>
      <div className="gallery-item" data-index={7}>
        <Image src="/project 13.png" alt="Image 7"  width={230}
            height={230} />
      </div>
      <div className="gallery-item" data-index={8}>
        <Image src="/project 7.png" alt="Image 8"  width={230}
            height={230} />
      </div>
    </div>
  </div>
  <div className="lightbox" id="lightbox">
    <div className="lightbox-content">
      <span className="close" onclick="closeLightbox()">
        ×
      </span>
      <Image className="lightbox-img" id="lightbox-img" src="" alt=""  width={230}
            height={230} />
      <a className="prev" onclick="changeImage(-1)">
        ❮
      </a>
      <a className="next" onclick="changeImage(1)">
        ❯
      </a>
    </div>
  </div>
</>


  );
};

export default Gallery;
