import React from 'react';
import avatar from './../images/avatar2.png';

export default function CV() {
  return (
    <div>
      <section className='main-section'>
        <div className='container'>
          <div className="row background-image">
            <div className="col-sm vertical-col-sm">
              <div className="col-sm flex-centered">
                <img className='new-avatar' src={avatar}></img>
              </div>
            </div>
            <div className="col-sm vertical-col-sm">
              <p className="avatar-description text-underline">My name is Vlad Palii. <br /> Product Designer <br /><br /> Ex. Senior Fullstack developer / Tech Lead.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='examples-section'>
        <div className='container'>
          <div className="row">
            <div className="col-sm">
              <h2>
                Overall
              </h2>
              <p className="">
                Over the past eight+ years, I've worked in several healthcare companies as a full-stack developer and combined such positions as team lead, tech lead, and solution lead.
                <br />
                <br />
                In these 8 years, I’ve accumulated a profound understanding of complex product development, and implementation from scratch, including the design process, development process lifecycle, testing, and delivery.  Building and shipping applications and software at the level of whole features/products.
                <br />
                <br />
                I'm a huge advocate of efficiency and effectiveness during product development, and I’m identifying opportunities and making decisions only based on planning and research of company/business needs and its users
                <br />
                <br />
                Working as a software developer I was constantly preoccupied with ensuring that products and features are needed and valuable for users and easy to use.
                <br />
                <br />
                And after making the way from developer to manager, I've understood that my real passion is designing, improving products, and solving problems through researching, interviewing, ideating, crafting, and iterating.
              </p>
            </div>
            <div className="col-sm">

              <div className=''>
                <ul className="contacts">
                  <h2>Contacts</h2>
                  <li>
                    <a className="icon-linkedin" target="_blank" href="https://www.linkedin.com/in/vladpalii/">Vlad Palii</a>
                  </li>
                  <li>
                    <a className="icon-skype" href="skype:paliy.work?chat">paliy.work</a>
                  </li>
                  <li>
                    <a className="icon-phone" href="tel:+380639822792">+380639822792</a>
                  </li>
                  <li>
                    <a className="icon-mail" href="mailto:paliy.work@gmail.com">paliy.work@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'></div>
      </section>

      <section className='examples-section-2'>
        <div className='container'>
          <h2>
            Experience
          </h2>
          <div className="row">
            <div className="col-sm">
              <div className="">
                <h5> - Team Lead / Tech Lead @ Doxy.me (2020-2022):</h5>
                <p>Telemedicine application — Patient-Clinic communication (Healthcare).</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="">
                <h5> - Senior Full-Stack Software Engineer / Solution Lead @ Pavilion Health (2018-2020):</h5>
                <p>Enterprise application for ICD-10 medical and patients data management (Healthcare).</p>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="">
                <h5> - Middle Software Engineer @ Materialise NV (2016-2018):</h5>
                <p>Enterprise application for 3d visual planning of surgeon operations on human's knee and shoulders based
                  on CT/MRI data (Healthcare).</p>
                <p>
                  Here I've taken part in the development of 3D scenes, REST-API web app parts, and related UX/UI elements and
                  tools.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="">
                <h5> - Junior Software Engineer @ Lanet Network (2014-2016):</h5>
                <p>Smart TV & Android TV applications (Telecommunications).</p>
                <p>
                  Overall design and prototyping of online TV single-page application. Implementing via VanillaJS, AngularJS,
                  jQuery. Unit testing. Company Web-site support. Implementation of internet speed measurement tool.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="">
                <h5> - DTP / WEB Designer (2011-2013):</h5>
                <p>Photoshop, Illustrator, Corel Draw.</p>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-sm">
              <div className="">
                <h5> - Super Ultra Mega Junior @ Home (2007-2011):</h5>
                <p>
                  Implementing some web stuff on html and css. Creating horrible .bat/cmd scripts. Trying to hack NASA via css
                  (ha-ha). Setup home based game server for CS1.6/LA2.
                </p>
              </div>
            </div>
          </div> */}

        </div>
      </section>

      <section>
        <div className='container'>
          <div className="row">
            <div className="col-sm">
              <h2>Personal</h2>
              <div className="">
                The first computer program I wrote when I was 14 years old, it was a ".bat" and then web simulation of computer
                terminal from Fallout
                2 game.
              </div>
              <br></br>
              <div className="">
                At my free time as possible, I'm interested in fashion, WEB design, Industrial design, architecture, history, psychology, neuroscience, electronics,
                mechanical engineering, space engineering, etc. Also a big fan of travel. And now it's more than 14 countries
                on
                my count. Half marathon runner — 3 times.
              </div>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className='container'>
          <div className="row">

            <div className="col-sm">
              <h2>
                Education
              </h2>

              <div className="">
                <h5> - Udacity — Google Product Design (2022)</h5>
                <h5> - NNG Nielsen Norman Group (2021):</h5>
                <p>UX Research — Journey Mapping to Understand Customer Needs</p>
                <h5> - NNG Nielsen Norman Group (2021):</h5>
                <p>Interaction Design — UX Basic Training</p>
                <h5> - WEB Academy (PMI R.E.P.) — IT Project management (2018-2019):</h5>
                <p>IT Project manager</p>
                <h5> - WEB Usability Day (2015)</h5>
                <h5> - Next UX/UI Training (2015)</h5>
                <h5> - Global Logic User Friendly Conference (2015)</h5>
                <h5> - Kyiv National University — KNUBA/KNUCA (2011-2016):</h5>
                <p>Master’s Degree in Computer Science.</p>
              </div>

            </div>

          </div>
        </div>
      </section>






      <br />
      <br />
    </div>

  )
}