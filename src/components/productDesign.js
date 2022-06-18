import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import './../App.scss';
import yfcImg from './../images/YFC.png';
import binImg from './../images/BIN.png';
import fgImg from './../images/FG.png';
import ModalComponent from './modalComponent';

export default function ProductDesign() {

  let examplesData = {
    yfc: {
      img: yfcImg,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    bin: {
      img: binImg,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    fg: {
      img: fgImg,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  };

  return (
    <div>
      <div className="container">

        <div className='info-circle-wrapper'>

          <ModalComponent
            idProp="yfcModal"
            btnText="Coffee shop Application"
            imageProp={examplesData.yfc.img}
            descriptionProp={examplesData.yfc.desc}
            classnameProp="info-circle info-circle-yfc">
          </ModalComponent>

          <ModalComponent
            idProp="binModal"
            btnText="Binance bank Application"
            imageProp={examplesData.bin.img}
            descriptionProp={examplesData.bin.desc}
            classnameProp="info-circle info-circle-bin">
          </ModalComponent>

          <ModalComponent
            idProp="fgModal"
            btnText="Vertical farming Landing"
            imageProp={examplesData.fg.img}
            descriptionProp={examplesData.fg.desc}
            classnameProp="info-circle info-circle-fg">
          </ModalComponent>

        </div>

        <div className="row background-image">

          <div className="col-sm vertical-col-sm">
          </div>
          <div className="col-sm vertical-col-sm">
            <div className="avatar-2"></div>
          </div>
        </div>

        <div className="row text-underline">
          <p className='h1 h1-main-title'>PASSIONATE TO</p>
          <p className='h1 h1-main-title-2'>SOLVE REAL PROBLEMS</p>
          <p className='work-examples'>Work Examples:</p>
        </div>

        <div className="row flex-inside">
          <div className="yfc-img"></div>
          <div className="bin-img"></div>
          <div className="fg-img"></div>
          {/* onClick={} */}
        </div>

      </div>



    </div>
  )
}