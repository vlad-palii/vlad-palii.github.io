import React from 'react'
import avatar from './../images/vp_cv_avatar_1x1_2025.jpg'

export default function CV() {
  return (
    <div className='cv-wrapper'>
      {/* Header Section */}
      <header className='cv-header'>
        <div className='cv-header-content'>
          <div className='cv-header-info'>
            <h1>Vlad Palii</h1>
            <p className='cv-title'>
              Senior Full-Stack Engineer | Engineering Lead
            </p>
            <p className='cv-personal'>
              Date of Birth: 18.08.1993 | Nationality: Ukrainian | Work Permit:
              §24 (open work authorization)
            </p>
          </div>
          <div className='cv-header-photo'>
            <img src={avatar} alt='Vlad Palii' />
          </div>
        </div>
      </header>

      {/* Profile Summary */}
      <section className='cv-profile'>
        <p>
          Senior Full-Stack Engineer and Engineering Lead with 11+ years of
          experience building web applications. Versatile T-shaped engineer
          specialized in React, Node.js, TypeScript, and AWS serverless, with
          broad exposure across the full stack. Proven track record leading
          distributed teams (up to 8 engineers), establishing SDLC processes,
          and delivering end-to-end features for SaaS products. Leverage
          AI-assisted development (Cursor, Copilot, ChatGPT) daily to accelerate
          delivery. Based in Berlin, open to senior full-stack or engineering
          lead roles in product-driven companies.
        </p>
      </section>

      {/* Two-Column Body */}
      <div className='cv-body'>
        {/* Main Column - Work Experience */}
        <main className='cv-main'>
          <section className='cv-section'>
            <h2 className='cv-section-title'>Work Experience</h2>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Yoffix</h3>
                  <p className='cv-job-location'>Berlin, Germany / On-site</p>
                  <p className='cv-job-description'>
                    Hybrid workplace management SaaS for desk, room, and parking
                    bookings.
                  </p>
                </div>
                <span className='cv-job-date'>2024–Present</span>
              </div>
              <h4>Senior Full-Stack Engineer</h4>
              <ul>
                <li>
                  Own backend and frontend architecture for multi-tenant SaaS
                  serving enterprise clients
                </li>
                <li>
                  Ship end-to-end features (booking, check-in, ticketing):
                  GraphQL, Lambda, React, integration tests
                </li>
                <li>
                  Refactor legacy Amplify/AppSync stacks; reduced infrastructure
                  complexity by 40%
                </li>
                <li>
                  Leverage AI coding tools daily, cutting feature delivery time
                  by 30%
                </li>
              </ul>
              <p className='cv-job-tech'>
                TypeScript, Node.js, React, AWS Amplify/AppSync, Lambda,
                DynamoDB, S3, CloudFormation, Serverless Framework.
              </p>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>GTO LAB</h3>
                  <p className='cv-job-location'>USA / Remote</p>
                  <p className='cv-job-description'>
                    Game-theory-based poker learning platform.
                  </p>
                </div>
                <span className='cv-job-date'>Feb-Jul 2024</span>
              </div>
              <h4>Head of Engineering (Contract)</h4>
              <ul>
                <li>
                  Led 5-engineer remote team; established SDLC processes from
                  scratch
                </li>
                <li>
                  Managed MVP handover and GCP infrastructure during
                  transitional period
                </li>
                <li>
                  Coordinated subcontractors; contributed hands-on to feature
                  delivery and bugfixes
                </li>
              </ul>
              <p className='cv-job-tech'>
                TypeScript, React, Node.js, GCP, PostgreSQL.
              </p>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Only Sports</h3>
                  <p className='cv-job-location'>USA / Remote</p>
                  <p className='cv-job-description'>
                    Social platform connecting fans with collegiate athletes.
                  </p>
                </div>
                <span className='cv-job-date'>2022–2024</span>
              </div>
              <h4>Head of Engineering</h4>
              <ul>
                <li>
                  Promoted from Senior Developer; led 6-engineer distributed
                  team (USA, Pakistan)
                </li>
                <li>
                  Reverse-engineered and documented 20+ legacy microservices and
                  AWS instances
                </li>
                <li>
                  Introduced SDLC processes from zero, improving velocity by 40%
                </li>
                <li>Integrated OpenAI API for AI-powered content features</li>
              </ul>
              <p className='cv-job-tech'>
                {' '}
                HapiJS, Express.js, Django, ReactJS, AngularJS, TypeScript,
                VanillaJS, Golang, Krakend, Docker, AWS, GitLab, MongoDB, Neo4j,
                Redis, Cassandra, GRPC, VerneMQ, MQTT, Stripe, Amplitude, OpenAI
                API.
              </p>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Doxy.me</h3>
                  <p className='cv-job-location'>USA / Remote</p>
                  <p className='cv-job-description'>
                    Telemedicine platform; scaled from 50k to 1M users during
                    COVID-19.
                  </p>
                </div>
                <span className='cv-job-date'>2020–2022</span>
              </div>
              <h4>Team Lead / Tech Lead</h4>
              <ul>
                <li>
                  Promoted from Senior Developer; led 8-engineer team through
                  rapid growth phase
                </li>
                <li>
                  Architected AngularJS → React migration strategy for core
                  product
                </li>
                <li>
                  Introduced regression testing, reducing production bugs by 50%
                </li>
                <li>
                  Established Git workflow and design specification standards
                </li>
              </ul>
              <p className='cv-job-tech'>
                ReactJS, AngularJS, Vue, TypeScript, VanillaJS, Docker, AWS,
                GitLab, MySQL, PostgreSQL, Express.js, Loopback, Stripe, Twilio,
                Segment, PubNub.
              </p>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Pavilion Health</h3>
                  <p className='cv-job-location'>Australia / Remote</p>
                  <p className='cv-job-description'>
                    Enterprise ICD-10 medical data management system.
                  </p>
                </div>
                <span className='cv-job-date'>2018–2020</span>
              </div>
              <h4>Senior Full-Stack Engineer / Solution Lead</h4>
              <ul>
                <li>
                  Redesigned legacy medical software; improved performance by 2×
                </li>
                <li>
                  Implemented CI/CD pipeline with CircleCI and automated unit
                  tests
                </li>
                <li>
                  Introduced Scrum process and design documentation standards
                </li>
              </ul>
              <p className='cv-job-tech'>
                VanillaJS, jQuery, ReactJS, Angular2+, TypeScript, Docker,
                CircleCI, MySQL, SQLite, Redis, MongoDB, Express.js, Java
                (Spring), RoR.
              </p>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Materialise NV</h3>
                  <p className='cv-job-location'>
                    Kyiv, Ukraine (Materialise NV Kyiv HQ)
                  </p>
                  <p className='cv-job-description'>
                    3D surgical planning software based on CT/MRI data.
                  </p>
                </div>
                <span className='cv-job-date'>2016–2018</span>
              </div>
              <h4>Software Engineer</h4>
              <ul>
                <li>
                  Built 3D visualization scenes and REST APIs for surgical
                  planning tools
                </li>
                <li>Developed UX/UI components for medical professionals</li>
              </ul>
              <p className='cv-job-tech'>
                VanillaJS, jQuery, PolymerJS, ThreeJS, C#, C++.
              </p>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Lanet Network</h3>
                  <p className='cv-job-location'>Kyiv, Ukraine</p>
                  <p className='cv-job-description'>
                    Smart TV and Android TV applications.
                  </p>
                </div>
                <span className='cv-job-date'>2014–2016</span>
              </div>
              <h4>Junior Software Engineer</h4>
              <ul>
                <li>Built online TV SPA and network speed measurement tool</li>
              </ul>
              <p className='cv-job-tech'>
                PHP, AngularJS, jQuery, JavaScript, MySQL.
              </p>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Freelance</h3>
                  <p className='cv-job-location'>Ukraine</p>
                </div>
                <span className='cv-job-date'>2007–2013</span>
              </div>
              <h4>DTP Designer & Web Developer</h4>
              <p className='cv-job-tech'>
                PHP, HTML, CSS, WordPress, Joomla, Photoshop, Illustrator, Corel
                Draw.
              </p>
            </div>
          </section>

          <section className='cv-section'>
            <h2 className='cv-section-title'>Interests</h2>
            <ul className='cv-interests-list'>
              <li>
                Coding since age 14; passionate about web and product design.
              </li>
              <li>
                Half-marathon runner (3 completed); traveled 15+ countries.
              </li>
            </ul>
          </section>
        </main>

        {/* Sidebar - Contact, Skills, Education */}
        <aside className='cv-sidebar'>
          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Contact</h2>
            <ul className='cv-contact-list'>
              <li>Berlin, Germany</li>
              <li>+49 1520 5404298</li>
              <li>paliy.work@gmail.com</li>
              <li>
                <a href='https://linkedin.com/in/vladpalii'>
                  linkedin.com/in/vladpalii
                </a>
              </li>
              <li>
                <a href='https://github.com/vlad-palii'>
                  github.com/vlad-palii
                </a>
              </li>
            </ul>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Skills</h2>

            <h3>Core Technologies</h3>
            <p>
              JavaScript, TypeScript, React, Node.js, Express.js, GraphQL, REST
              API, PostgreSQL, MySQL, MongoDB, DynamoDB, AWS (Lambda, AppSync,
              Amplify, S3, CloudFormation), Docker, LinuxUod
            </p>

            <h3>Also Worked With</h3>
            <p>
              Next.js, Angular, Vue.js, Golang, PHP, Java, Python, C#, Three.js,
              Redis, Neo4j, Cassandra, GCP, CircleCI, GRPC, OpenAI API, Stripe,
              Twilio
            </p>

            <h3>Tools & Methods</h3>
            <p>Git, GitHub, GitLab, Jira, Confluence, Figma, Miro, Slack</p>

            <h3>Leadership & Process</h3>
            <p>
              Scrum, Kanban, SDLC, SRS/SDS, Code Review, Hiring, Remote Team
              Management, Stakeholder Communication
            </p>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Languages</h2>
            <ul className='cv-lang-list'>
              <li>Ukrainian / Russian (Native)</li>
              <li>English (Upper Intermediate / B2)</li>
              <li>German (A2, actively improving)</li>
            </ul>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Education</h2>
            <div className='cv-edu-item'>
              <h3>Kyiv National University</h3>
              <p>
                <strong>M.Sc. Computer Science</strong>
              </p>
              <p>2011–2016</p>
            </div>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Certifications</h2>
            <ul className='cv-cert-list'>
              <li>Google Product Design – Udacity (2022)</li>
              <li>UX Research & Interaction Design – NN/g (2021)</li>
              <li>IT Project Management – PMI R.E.P. (2019)</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}
