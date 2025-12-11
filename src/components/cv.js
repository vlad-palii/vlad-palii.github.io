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
            <p className='cv-title'>Full-Stack Engineering Generalist</p>
            <p className='cv-personal'>
              Date of Birth: 18.08.1993 | Nationality: Ukrainian
            </p>
          </div>
          <div className='cv-header-photo'>
            <img src={avatar} alt='Vlad Palii' />
          </div>
        </div>
      </header>

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
                  <p className='cv-job-location'>Berlin, Germany</p>
                  <p className='cv-job-description'>Hybrid workplace management platform - desk, room and parking bookings for distributed teams.</p>
                </div>
                <span className='cv-job-date'>2024 - Present</span>
              </div>
              <h4>Senior Full-Stack Engineer</h4>
              <ul>
                <li>Own key parts of the backend and frontend architecture for a multi-tenant SaaS built on AWS serverless</li>
                <li>Design and ship booking, check-in and ticketing features end-to-end: GraphQL schema, Lambda functions, React UI, and integration tests</li>
                <li>Refactor legacy Amplify/AppSync stacks, simplify infrastructure-as-code and improve observability</li>
                <li>Use AI coding tools (ChatGPT, Cursor, Copilot) daily, reducing delivery cycles by 30%</li>
              </ul>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>GTO LAB</h3>
                  <p className='cv-job-location'>Remote/Europe</p>
                  <p className='cv-job-description'>Advanced Poker Learning Platform - Game Theory Optimal digital learning platform.</p>
                </div>
                <span className='cv-job-date'>2024 (6 months)</span>
              </div>
              <h4>Head of Engineering (Short-Term Contract)</h4>
              <p className='cv-job-note'><i>Brought in as a short-term, hands-on engineering leader during a transitional period to stabilize processes and support MVP delivery.</i></p>
              <ul>
                <li>Led remote engineering team of 5 engineers across Ukraine and Europe during transitional period</li>
                <li>Established SDLC processes from scratch, improving delivery predictability</li>
                <li>Managed MVP handover process and infrastructure on GCP</li>
                <li>Coordinated subcontractors and contributed to feature development and bugfixes</li>
              </ul>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Only Sports</h3>
                  <p className='cv-job-location'>USA/Remote</p>
                  <p className='cv-job-description'>Social platform for fans to engage with collegiate athletes.</p>
                </div>
                <span className='cv-job-date'>2022 - 2024</span>
              </div>
              <h4>Head of Engineering</h4>
              <ul>
                <li>Promoted from Senior Full-Stack Developer to Head of Engineering</li>
                <li>Led remote team of 8 engineers across Pakistan and USA</li>
                <li>Reverse-engineered and documented 20+ undocumented microservices and AWS instances</li>
                <li>Established SDLC processes from zero, improving team velocity by 40%</li>
                <li>Integrated OpenAI API for new AI-powered features</li>
              </ul>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Doxy.me</h3>
                  <p className='cv-job-location'>USA/Remote</p>
                  <p className='cv-job-description'>Telemedicine platform - Patient-Clinic communication. Grew from 50k to 1M users during COVID-19.</p>
                </div>
                <span className='cv-job-date'>2020 - 2022</span>
              </div>
              <h4>Team Lead / Tech Lead</h4>
              <ul>
                <li>Promoted from Senior Full-Stack Developer to Team Lead</li>
                <li>Led team of 6 engineers, implementing SDLC improvements</li>
                <li>Planned and executed AngularJS to ReactJS migration strategy</li>
                <li>Established regression testing, improving product stability by 50%</li>
                <li>Implemented Git workflow and Software Design Specifications (SDS)</li>
              </ul>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Pavilion Health</h3>
                  <p className='cv-job-location'>USA/Remote</p>
                  <p className='cv-job-description'>Enterprise application for ICD-10 medical and patient data management.</p>
                </div>
                <span className='cv-job-date'>2018 - 2020</span>
              </div>
              <h4>Senior Full-Stack Engineer / Solution Lead</h4>
              <ul>
                <li>Redesigned major parts of legacy medical software ecosystem</li>
                <li>Improved application performance by 2x through optimization and refactoring</li>
                <li>Implemented unit testing with CircleCI integration</li>
                <li>Established SDLC with Scrum, SRS, and SDS documentation</li>
              </ul>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Materialise NV</h3>
                  <p className='cv-job-location'>Kyiv, Ukraine</p>
                  <p className='cv-job-description'>Enterprise application for 3D visual planning of surgical operations based on CT/MRI data.</p>
                </div>
                <span className='cv-job-date'>2016 - 2018</span>
              </div>
              <h4>Software Engineer</h4>
              <ul>
                <li>Developed 3D visualization scenes for surgical planning tools</li>
                <li>Built REST-API web application components</li>
                <li>Created UX/UI elements and tools for medical professionals</li>
              </ul>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Lanet Network</h3>
                  <p className='cv-job-location'>Kyiv, Ukraine</p>
                  <p className='cv-job-description'>Smart TV and Android TV applications development.</p>
                </div>
                <span className='cv-job-date'>2014 - 2016</span>
              </div>
              <h4>Junior Software Engineer</h4>
              <ul>
                <li>Designed and prototyped online TV single-page application</li>
                <li>Implemented unit testing and maintained company website</li>
                <li>Developed internet speed measurement tool</li>
              </ul>
            </div>

            <div className='cv-job'>
              <div className='cv-job-header'>
                <div>
                  <h3>Freelance</h3>
                  <p className='cv-job-location'>Ukraine</p>
                  <p className='cv-job-description'>Web design and development for various clients.</p>
                </div>
                <span className='cv-job-date'>2011 - 2013</span>
              </div>
              <h4>DTP Designer & Web Developer</h4>
            </div>
          </section>

          <section className='cv-section'>
            <h2 className='cv-section-title'>Personal / Interests</h2>
            <p>The first computer program I wrote when I was 14 years old - it was a ".bat" script and then a web simulation of computer terminal from Fallout 2 game.</p>
            <p>In my free time I'm interested in: web design, industrial design, architecture, travel (14+ countries visited), half marathon running (3 completed), neuroscience, and mechanical engineering.</p>
          </section>
        </main>

        {/* Sidebar - Contact, Skills, Education */}
        <aside className='cv-sidebar'>
          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Contact</h2>
            <ul className='cv-contact-list'>
              <li>Berlin, Germany</li>
              <li>paliy.work@gmail.com</li>
              <li>linkedin.com/in/vladpalii</li>
            </ul>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Skills</h2>
            
            <h3>Programming Languages</h3>
            <p>JavaScript, TypeScript, HTML5, CSS3, Node.js, Python, Java, C#, C++, PHP, Golang</p>

            <h3>Frameworks & Libraries</h3>
            <p>React, Next.js, Angular, Vue.js, Nuxt.js, Express.js, HapiJS, Django, Loopback, jQuery, Three.js, Bootstrap, Material UI</p>

            <h3>Databases</h3>
            <p>MySQL, PostgreSQL, SQLite, MongoDB, Redis, Neo4j, Cassandra, DynamoDB</p>

            <h3>Cloud & Infrastructure</h3>
            <p>AWS (Amplify, AppSync, Lambda, S3, CloudFormation), GCP, Docker, CircleCI, GitLab CI/CD, Nginx, Serverless</p>

            <h3>Tools</h3>
            <p>Git, GitHub, GitLab, JetBrains IDEs, VS Code, Jira, Confluence, Figma, Miro</p>

            <h3>Methodologies</h3>
            <p>Agile, Scrum, Kanban, TDD, DDD, SOLID, REST API, GraphQL, SDLC</p>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Languages</h2>
            <ul className='cv-lang-list'>
              <li>Ukrainian / Russian (Native)</li>
              <li>English (Upper Intermediate / B2)</li>
              <li>German (A2)</li>
            </ul>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Education</h2>
            <div className='cv-edu-item'>
              <h3>Kyiv National University (KNUBA/KNUCA)</h3>
              <p><strong>Master's Degree in Computer Science</strong></p>
              <p>Kyiv, Ukraine</p>
              <p>2011 - 2016</p>
            </div>
          </section>

          <section className='cv-sidebar-section'>
            <h2 className='cv-sidebar-title'>Certifications</h2>
            <ul className='cv-cert-list'>
              <li>Google Product Design - Udacity (2022)</li>
              <li>UX Research: Journey Mapping - Nielsen Norman Group (2021)</li>
              <li>Interaction Design - Nielsen Norman Group (2021)</li>
              <li>IT Project Management - WEB Academy PMI R.E.P. (2018 - 2019)</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}
