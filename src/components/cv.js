import React from 'react'
import avatar from './../images/avatar2024.jpg'

export default function CV() {
  return (
    <div className='section-wrapper'>
      <section className='main-section'>
        <div className='container'>
          <div className='row background-image'>
            <div className='col-sm vertical-col-sm'>
              <div className='col-sm flex-centered'>
                <img className='new-avatar' src={avatar}></img>
                {/* <div className='avatar-online-mark'></div> */}
              </div>
            </div>
            <div className='col-sm vertical-col-sm'>
              <p className='avatar-description text-underline'>
                My name is Vlad Palii. <br /> Full-Stack Engineering Generalist
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='examples-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <h2>Overall</h2>
              <p className=''>
                Over the past 10 years, I've worked in several healthcare and media startups, 
                beginning as a fullstack engineer and paving my way into becoming 
                a team lead, tech lead, solution lead and head of engineering.
                <br></br>
                <br></br>
                In these 10 years, I’ve accumulated a profound understanding of
                complex product development, and implementation from scratch,
                including the design process, development process lifecycle,
                testing, and delivery. Building and shipping applications and
                software at the level of whole features/products.
                <br></br>
                <br></br>
                I'm a huge advocate of efficiency and effectiveness during
                product development, and I’m identifying opportunities and
                making decisions only based on planning and research of
                company/business needs and its users.
                <br></br>
                <br></br>
                Working as a software developer I was constantly preoccupied
                with ensuring that products and features are really valuable and needed
                by users, and are easy to use.
                <br></br>
                <br></br>
                {/* As i rose from developer to manager, I understood that my real passion is designing, improving products, and solving problems through researching, interviewing, ideating, crafting, and iterating. */}
              </p>
            </div>
            <div className='col-sm'>
              <div className=''>
                <ul className='contacts'>
                  <h2>Contacts</h2>
                  <li>
                    <a
                      className='icon-linkedin'
                      target='_blank'
                      href='https://www.linkedin.com/in/vladpalii/'
                    >
                      Vlad Palii
                    </a>
                  </li>
                  <li>
                    <a className='icon-skype' href='skype:paliy.work?chat'>
                      paliy.work
                    </a>
                  </li>
                  <li>
                    <a className='icon-phone' href='tel:+380639822792'>
                      +380639822792
                    </a>
                  </li>
                  <li>
                    <a className='icon-mail' href='mailto:paliy.work@gmail.com'>
                      paliy.work@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h2>Worked with</h2>
                <p>
                  <b>VCS: </b>GitHub, GitLab, TFS, BitBucket.
                  <br />
                  <b>OS (platforms): </b>Windows, Linux, MacOS.
                  <br />
                  <b>DB: </b> MySQL, PostgreSQL, SQLite, Redis, MongoDB.
                  <br />
                  <b>Tools: </b>GIT, TFS, JetBrains IDEs, Visual Studio, VSCode.
                  <br />
                  <b>Infrastructure (CI/CD): </b>Docker, CircleCI, AWS, NginX,
                  GitLab
                  <br />
                  <b>Languages: </b>JavaScript (ES5, ES6), TypeScript, HTML5,
                  CSS3.
                  <br />
                  <b>Principles: </b>KISS, DRY, SOLID, OOP, REST API, TDD, DDD,
                  Design Patterns.
                  <br />
                  <b>Methodologies (processes): </b>Agile, Scrum, Kanban, Lean,
                  XP, Overall product design, Design Documentation, SRS, SDS.
                  <br />
                  <b>Technologies (frameworks/libraries): </b>TCP-IP, Mongoose,
                  SocketIO, AJAX, VanillaJS, jQuery, ReactJS, NextJS, AngularJS,
                  Angular6+, VueJS, NuxtJS, PolymerJS, ThreeJS, Bootstrap,
                  SemanticUI, MaterialUI, Angular Material, Webpack, Grunt,
                  Gulp, Bower, Yarn, NPM, Karma, qUnit, Chai, Mocha, SCSS,
                  NodeJS, Express.js, Loopback, Stripe, Twilio, Segment, PubNub.
                  <br />
                  <br />
                  <b>Management (+tools): </b>Technical Project Management, Team
                  Management, Sprint planning, Retrospective facilitation,
                  Initial / Technical Interviewing, RACI management, Strategic
                  thinking, Strong communication skills. Basecamp, Atlassian,
                  TFS, Trello, UML, Miro, WBS, Roadmap design.
                  <br />
                  <br />
                  <b>Little familiar with: </b>C, C++, Python/Django, C#/.NET,
                  Java/Spring, Ruby/RoR.
                  <br />
                  <b>Product design (UX/UI): </b>Figma, etc.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section> */}

      <section className='examples-section-2'>
        <div className='container'>
          <h2>Experience</h2>

          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h5> - Hands-On Engineering Manager @ Only Sports (2022-2024):</h5>
                <p>
                  A social platform for fans to engage with their favorite collegiate athletes.
                </p>
                <p>
                  <i>(Only Sports is built from an Athlete Perspective by a team of former athletes and sports industry professionals)</i>
                  <br />
                  <br />
                  I joined the company as a senior full-stack developer / team leader, and was
                  promoted to the Head of Engineering position.
                  I inherited a large and complex decentralized platform which included dozens of undocumented microservices and AWS instances. There, I implemented important improvements and initiatives, including:
                  <br />
                  - Reverse engineering of the platform.
                  <br />
                  - Infrastructure management.
                  <br />
                  - Documentation of the platform parts and negotiation with the business side to understand and align the business's needs.
                  <br />
                  - Leading and managing a remote engineering team based in Pakistan.
                  <br />
                  - Establishing and maintaining Software Development Life Cycle (SDLC) processes from zero.
                  <br />
                  - Delivery support. 
                  <br />
                  - Supporting the software architecture and contributing to the development of new features, including work with OpenAI API.
                  <br />
                </p>
                <p>
                  Tech stack: HapiJS, Express.js, Django, ReactJS, AngularJS, TypeScript, VanillaJS,
                  Golang, Krakend, Docker, AWS, GitLab, MongoDB, Neo4j, Redis, Cassandra, GRPC, VerneMQ, MQTT, 
                  Stripe, Amplitude.
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h5> - Team Lead / Tech Lead @ Doxy.me (2020-2022):</h5>
                <p>
                  Telemedicine application — Patient-Clinic communication platform.
                </p>
                <p>
                  <i>(Doxy.me is a successful telemedicine company that has had an
                  incredible growth during the COVID-19 pandemic. Increased the number of users from 50k to 1M in one year)</i>
                  <br />
                  <br />
                  I joined the company as a senior full-stack developer, and was
                  soon promoted to the team leader position, where I've
                  successfully started the implementation of critical
                  improvements, among them:
                  <br />
                  - Software development process implementation and improvement
                  <br />
                  - Initialisation of regression for product stabilization
                  <br />
                  - Migration process planning (angularJS to reactJS)
                  <br />
                  - Running a software development team
                  <br />
                  - Implementation (git workflow, SDS)
                  <br />
                  - Delivery process improvement
                  <br />
                  - Product development
                  <br />
                  - Release support
                  <br />
                </p>
                <p>
                  Tech stack: ReactJS, AngularJS, Vue, TypeScript, VanillaJS,
                  Docker, AWS, GitLab, MySQL, PostgreSQL, Express.js, Loopback,
                  Stripe, Twilio, Segment, PubNub.
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h5>
                  {' '}
                  - Senior Full-Stack Software Engineer / Solution Lead @
                  Pavilion Health (2018-2020):
                </h5>
                <p>
                  <i>(Enterprise application for ICD-10 medical and patients data
                  management)</i>
                </p>
                <p>
                  When I started to work here, the current huge medical software
                  ecosystem was in a battered condition. Completely bad codebase
                  without any comments, without design or requirement
                  documentation, without access to previous developers. But I've
                  coped with it. A huge part of application was redesigned, and
                  a tons of legacy code and bugs fixed/refactored. UI interface
                  renewed. Performance improved x2. Added unit testing and
                  linked with CircleCI environment. Implemented SDLC with SCRUM.
                  Implemented SRS SDS.
                </p>
                <p>
                  Tech stack: VanillaJS, jQuery, ReactJS, Angular2+, TypeScript,
                  Docker, CircleCI, MySQL, SQLite, Redis, MongoDB, Express.js,
                  Java (Spring), RoR.
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h5>
                  {' '}
                  - Middle Software Engineer @ Materialise NV (2016-2018):
                </h5>
                <p>
                  <i>(Enterprise application for 3d visual planning of surgeon
                  operations on human's knee and shoulders based on CT/MRI data)</i>
                </p>
                <p>
                  Here I've taken part in the development of 3D scenes, REST-API
                  web app parts, and related UX/UI elements and tools.
                </p>
                <p>
                  Tech stack: VanillaJS, jQuery, PolymerJS, ThreeJS, C#, C++.
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h5>
                  {' '}
                  - Junior Software Engineer @ Lanet Network (2014-2016):
                </h5>
                <p><i>(Smart TV & Android TV applications)</i></p>
                <p>
                  Overall design and prototyping of online TV single-page
                  application. Implementing via VanillaJS, AngularJS, jQuery.
                  Unit testing. Company Web-site support. Implementation of
                  internet speed measurement tool.
                </p>
                <p>Tech stack: PHP, AngularJS, jQuery, VanillaJS, MySQL.</p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h5> - DTP Designer & WEB-Master @ Freelance (2011-2013):</h5>
                <p>
                  Tech stack: Photoshop, Illustrator, Corel Draw, PHP, HTML,
                  CSS, WordPress, Joomla, Drupal, Magento
                </p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm'>
              <div className=''>
                <h5> - Super Ultra Mega Junior @ Home / School (2007-2011):</h5>
                <p>
                  Implementing some simple web stuff on html and css in school.
                  Creating weird .bat/cmd scripts. <br />
                  Trying to hack NASA via HTML (ha-ha). Setup home based game
                  server for CS1.6/LA2.
                </p>
                <p>Tech stack: NotePad, JS, HTML, CSS, PHP, Batch script</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <h2>Personal</h2>
              <div className=''>
                The first computer program I wrote when I was 14 years old, it
                was a ".bat" and then web simulation of computer terminal from
                Fallout 2 game.
              </div>
              <br></br>
              <div className=''>
                At my free time as possible, I'm interested in fashion,
                web-design, industrial design, architecture, history,
                psychology, neuroscience, electronics, mechanical engineering,
                space engineering, etc. Also a big fan of travel. And now it's
                more than 14 countries on my count. Half marathon runner — 3
                times.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='examples-section-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <h2>Education</h2>

              <div className=''>
                <h5> - Udacity — Google Product Design (2022)</h5>
                <h5> - NNG Nielsen Norman Group (2021):</h5>
                <p>
                  UX Research — Journey Mapping to Understand Customer Needs
                </p>
                <h5> - NNG Nielsen Norman Group (2021):</h5>
                <p>Interaction Design — UX Basic Training</p>
                <h5>
                  {' '}
                  - WEB Academy (PMI R.E.P.) — IT Project management
                  (2018-2019):
                </h5>
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
