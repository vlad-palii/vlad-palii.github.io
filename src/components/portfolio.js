import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import './../App.scss';
import yfcImg from './../images/YFC.png';
import binImg from './../images/BIN.png';
import fgImg from './../images/FG.png';
import avatar from './../images/avatar2.png';
import allImgs from './../images/allImg3.png';
import ModalComponent from './modalComponent';

export default function Portfolio() {

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
      <section className='main-section'>
        <div className='container'>
          <div className="row ">
            <div className="col-sm-8 ">
              <p className='h1 h1-main-title text-underline '>PASSIONATE TO</p>
            </div>
            <div className="col-sm flex-centered">
              <img className='new-avatar' src={avatar}></img>
            </div>
          </div>
          <div className="row text-underline ">
            <div className="col-sm ">
              <p className='h1 h1-main-title-2'>SOLVE REAL PROBLEMS</p>
            </div>
          </div>
        </div>
      </section>

      <section className='examples-section'>
        <div className='container'>
          <h3 className='text-underline'>Project Examples:</h3>
          <img src={allImgs} className="bg-img"></img>
        </div>
      </section>

      <section className='examples-section-2'>
        <div className='container'>
          <h4 className='text-underline'>Application: Binance bank</h4>
          <div className='row'>
            <div className="col-sm vertical-col-sm">
              <p>
                <b>Problem:</b>
                <br></br>
                Barrier of complicated and unclear cryptocurrency transactions and hidden fees.
                <br></br>
                <br></br>
                <b>Solution:</b>
                <br></br>
                Providing to users the existing and usable experience of online banking for cryptocurrencies.
                <br></br>
                <br></br>
                <b>Idea:</b>
                <br></br>
                Concept of the online banking system for a well-known cryptocurrency platform.
                <br></br>
                <br></br>
                <a target="_blank" href="https://www.figma.com/proto/6gv6pAw5of7JMv3FamOGYQ/My-projects?node-id=96%3A516&scaling=scale-down&page-id=44%3A2">
                  Figma Prototype
                </a>
              </p>
            </div>
            <div className="col-sm vertical-col-sm">
              <img className='img-size' src={binImg} />
            </div>
          </div>
        </div>
      </section>

      <section className='examples-section'>
        <div className='container'>
          <h4 className='text-underline'>Application: Coffee shop </h4>
          <div className='row row-w-bg'>

            <div className="col-sm vertical-col-sm">
              <p>
              <b>Problem:</b>
                <br></br>
                Queues and complexity of coffee order in a busy place. COVID limitations.  
                <br></br>
                <br></br>
                <b>Solution:</b>
                <br></br>
                Providing simple menu web-application with ordering functionaliy, accessible through QR on any table.
                <br></br>
                <br></br>
                <b>Idea:</b>
                <br></br>
                Concept of a simple menu application for a little cafe, which serves only coffee, croissants, and maybe some water, etc.
                Visitor comes to the cafe, take a seat, and order stuff via this web app, accessible through QR on any table.
                After that visitors can see their order number on a big screen near the cash desk and can grab it when it will be prepared.
                <br></br>
                <br></br>
                The application must be implemented as a web application, which makes usage easier and more accessible. No registration is required, only ordering and online payment.
                <br></br>
                <br></br>
                <a target="_blank" href="https://www.figma.com/proto/6gv6pAw5of7JMv3FamOGYQ/My-projects?node-id=25%3A209&scaling=scale-down&page-id=0%3A1&starting-point-node-id=25%3A209&show-proto-sidebar=1">
                  Figma Prototype
                </a>
              </p>
            </div>

            <div className="col-sm vertical-col-sm">
              <img className='img-size' src={yfcImg} />
            </div>

          </div>
        </div>
      </section>

      <section className='examples-section-2'>
        <div className='container'>
          <h4 className='text-underline'>Product Concept: Vertical farming startup</h4>
          <div className='row'>
            <div className="col-sm vertical-col-sm">
              <p>
                <b>Product development example.</b>
                <br></br>
                Startup concept:
                Vertical farm containers for growing vegetables with help of a hydroponic system.
                <br></br>
                <br></br>
                <b>Challenge:</b>
                <br></br>
                Research the problem and create solution and product concept.
                <br></br>
                <br></br>
                Problem validation.
                Checking on uniqueness.
                Defining the client.
                Research of niche.
                Competitors research.
                Profit research.
                Defining of Clients / target audiences / needs.
                Price formation.
                <br></br>
                <br></br>
                Business model, including:
                Key partners,
                Key activities,
                Key propositions,
                Customer relationships,
                Customer segments,
                Key resources,
                Cost structure,
                Revenue streams.
                <br></br>
                <br></br>
                <b>Result:</b>
                <br></br>
                MVP — Landing page.
                3-D renders.
                Product brochure.
                Attracted investments.
                <br></br>
                <br></br>
                <a target="_blank" href="https://www.figma.com/proto/6gv6pAw5of7JMv3FamOGYQ/My-projects?node-id=104%3A35&scaling=min-zoom&page-id=104%3A29">
                  Figma Prototype
                </a>
                <br></br>
                <br></br>
                <a target="_blank" href="https://holdensaa.wixsite.com/mysite">
                  Project website
                </a>
              </p>

            </div>
            <div className="col-sm-6 vertical-col-sm">
              <img className='img-size fg-image' src={fgImg} />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}