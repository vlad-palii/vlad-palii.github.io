import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import './../App.scss';
import ModalComponent from './modalComponent';

export default function ProductDesign() {
  return (
    <div>
      <div className="container">

        <div className='info-circle-wrapper'>

          <ModalComponent id="yfcModal" btnText="Coffee shop Application" classnameProp="info-circle info-circle-yfc"></ModalComponent>

          <ModalComponent id="binModal" btnText="Binance bank Application" classnameProp="info-circle info-circle-bin"></ModalComponent>

          <ModalComponent id="fgModal" btnText="Vertical farming Landing" classnameProp="info-circle info-circle-fg"></ModalComponent>

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