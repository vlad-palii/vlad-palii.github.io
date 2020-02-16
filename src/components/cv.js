import React  from 'react';

export default function Home (){
  return (
<div className="container">
  <div className="row background-image">
    <div className="col-sm vertical-col-sm">
      <div className="avatar"></div>
      <p className="hello-world">Hello World!</p>
    </div>
    <div className="col-sm vertical-col-sm">
      <p className="avatar-description">My name is Vlad Palii. <br /> Senior Full-Stack Software Engineer.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
      <h2>
        Overall
      </h2>
      <p className="short-description">Over the past six years I've worked in several medical companies as a developer
        with a different amount of technologies. There is some of them: JavaScript, TypeScript,
        NodeJS, Express.js, MongoDB, MySQL, Vanilla JS, ES5, ES6, JQuery, AngularJS, Angular 2+, PolymerJS, Three JS,
        React JS, Webpack, Gulp, QUnit, Karma, UML, OOP, Design Patterns, Overall product design, Design
        Documentation.</p>
    </div>
    <div className="col-sm">
      <h2>Contacts</h2>
      <div>
        <ul className="short-description contacts">
          <li>
            <a className="icon-linkedin" target="_blank" href="https://www.linkedin.com/in/vladpalii/">Vlad Palii</a>
          </li>
          <li>
            <a className="icon-skype" href="skype:paliy.work?chat">paliy.work</a>
          </li>
          <li>
            <a className="icon-github" target="_blank" href="https://github.com/vladyslav-palii">vladyslav-palii</a>
          </li>
          <li>
            <a className="icon-phone" href="tel:+380639822792">+380639822792</a>
          </li>
          <li>
            <a className="icon-mail" href="mailto:paliy.work@gmail.com">paliy.work@gmail.com</a>
          </li>
          <li>
            <b>Download CV: </b> <a href="#">doc</a>, <a href="#">pdf</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-sm">
      <div className="short-description">
        <h5>Technologies:</h5>
        <p>
          <b>Systems (platforms): </b>Win, Linux, MacOS.<br />
          <b>DB’s: </b> MySQL, PostgreSQL, SQLite, Redis, Mongo.<br />
          <b>Languages: </b>JavaScript (ES5, ES6), TypeScript, HTML5, CSS3.<br />
          <b>Tools: </b>GIT, TFS, JetBrains IDEs, Visual Studio, VSCode.<br />
          <b>Technologies (libraries): </b>TCP-IP, Express, Mongoose, SocketIO, AJAX, VanillaJS, jQuery, ReactJS,
          AngularJS, Angular8+, PolymerJS, ThreeJS, Webpack, Grunt, Gulp, Bower, Yarn, NPM, Karma, qUnit, Chai, Mocha,
          SCSS.<br />
          <b>Infrastructure (CICD): </b>Docker, CIrcleCI, AWS, NginX.<br />
          <b>Methodologies (processes): </b>Agile, Scrum, Kanban, Lean, XP, Overall product design, Design
          Documentation, SRS, SDS.<br />
          <b>Principles: </b>KISS, DRY, SOLID, OOP, REST API, TDD, DDD, Design Patterns.<br />
          <b>Management: </b>Atlassian, TFS, Trello, UML.<br />
          <b>Little familiar with: </b>Python/Django, C#/.NET/Razor, Java/Spring, rbenv/Ruby/RoR/.<br />
        </p>
      </div>
    </div>
  </div>
  <br />

  <div className="row">
    <div className="col-sm">
      <div className="short-description">
        <h5>Senior Full-Stack Software Engineer @ Pavilion Health (2018-2020):</h5>
        <small>Enterprise application for ICD-10 medical and patients data management (Healthcare).</small>
        <p>
          When I started to work here, the current huge medical software ecosystem was in a battered condition.
          Completely bad codebase without any comments, without design or requirement documentation, without access to
          previous developers. But I've coped with it. A huge part of application was redesigned, and a tons of legacy
          code and bugs fixed/refactored. UI interface renewed. Performance improved x2. Added unit testing and linked
          with CircleCI environment. Implemented SDLC with SCRUM. Implemented SRS SDS.
        </p>
      </div>
    </div>
  </div>
  <br />
  <div className="row">
    <div className="col-sm">
      <div className="short-description">
        <h5>Middle Software Engineer @ Materialise NV (2016-2018):</h5>
        <small>Enterprise application for 3d visual planning of surgeon operations on human's knee and shoulders based
          on CT/MRI data (Healthcare).</small>
        <p>
          Here I've taken part in the development of 3D scenes, REST-API web app parts, and related UX/UI elements and
          tools.
        </p>
      </div>
    </div>
  </div>
  <br />
  <div className="row">
    <div className="col-sm">
      <div className="short-description">
        <h5>Junior Software Engineer @ Lanet Network (2014-2016):</h5>
        <small>Design and development of Smart TV & Android TV applications (Telecommunications).</small>
        <p>
          Overall design and prototyping of online TV single-page application. Implementing via VanillaJS, AngularJS,
          jQuery. Unit testing. Company Web-site support. Implementation of internet speed measurement tool.
        </p>
      </div>
    </div>
  </div>
  <br />
  <div className="row">
    <div className="col-sm">
      <div className="short-description">
        <h5>Super Ultra Mega Junior @ Home (2007-2011):</h5>
        <p>
          Implementing some web stuff on html and css. Creating horrible .bat/cmd scripts. Trying to hack NASA via css
          (ha-ha). Setup home based game server for CS1.6/LA2.
        </p>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-sm">
      <h2>The Story</h2>
      <div className="short-description">
        The first program I wrote when I was 14 years old, it was a ".bat" and then web simulation of computer
        terminal from Fallout
        2 game.
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-sm">
      <h2>Personal</h2>
      <div className="short-description">
        At my free time as possible, I'm interested in history, psychology, neuroscience, electronics,
        mechanical engineering, space engineering, etc. Also a big fan of travel. And now it's more than 12 countries
        on
        my count. Half marathon runner.
      </div>
    </div>
  </div>

  <div className="row">

    <div className="col-sm">
      <h2>
        Education
      </h2>

      <div className="short-description">
        <h5>Kyiv National University (2011-2016):</h5>
        <small>Master’s Degree in Computer Science.</small>
      </div>

    </div>

  </div>
  <br />
  <br />
</div>

  )
}