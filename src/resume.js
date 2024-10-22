import React from 'react';
import resume from './Jhanavi Dave Resume.pdf';

function Resume() {
  return (
    <div>
      <hr color='black' height='1.5px' />
      <p id="spacing">
        <div id="page-look" padding="20px">
          <br />
          <div id="res-head" align="center">
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=jhanavi.dave.01@gmail.com'>jhanavi.dave.01@gmail.com</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='https://www.linkedin.com/in/jhanavi-dave'>linkedin.com/jhanavi-dave</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={resume} download="Jhanavi Dave Resume.pdf">download my resume</a>

          </div>
          <div id="profile">
            <h2>PROFILE</h2>
            <hr />
            <p align="justify">Full Stack Developer with extensive experience in designing and deploying production systems, specializing in Java
              development, Spring framework, ReactJS, and API design. Proven ability to create scalable, efficient solutions using
              technologies like Java, ReactJS, Flutter, UiPath, and cloud platforms.</p>
          </div>

          <div id="edu">
            <h2>EDUCATION</h2>
            <hr />
            <p align="left">
              <ul>
                <li>
                  <b>Master of Computer Science</b>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug. 2022 - Aug. 2024
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Illinois Institute of Technology  (Chicago, IL, USA)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPA: 3.0 / 4.0
                </li>
                <li>
                  <b>Bachelor of Technology</b>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 2015 - May 2019
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usha Mittal Institute of Technology (Mumbai, MH, India)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPA: 3.0 / 4.0
                </li>
              </ul>
            </p>
          </div>

          <div id="skills">
            <h2>SKILLS</h2>
            <hr />
            <p>
              <ul>
                <li><b>Programming & Markup Languages:</b> Java, Python, C, C++, SQL, JavaScript, HTML5/CSS3, Dart</li>
                <li><b>Developer and AI/ML Tools:</b> Google Cloud Platform (GCP), Google App Engine, Arduino, MySQL, Postgres, Cassandra, MongoDB, NoSQL, MySQL, Neo4J, AWS, Docker</li>
                <li><b>Frameworks:</b> JDBC, ReactJS, Node.js, Flutter, RestAPI, JSON, Kafka, Apache Spark, Hadoop MapReduce, Spring Framework, Java EE, Angular JS</li>
                <li><b>Libraries:</b> Pandas, NumPy, Matplotlib, Hadoop</li>
              </ul>
            </p>
          </div>

          <div id="exp">
            <h2>EXPERIENCE</h2>
            <hr />
            <p>
              <h4>SENIOR TECHNOLOGY ASSOCIATE</h4>
              <hr width="20%" align="left" />
              Colgate Global Business Sevices Pvt. Ltd. (July 2019 - June 2022)
              <ul>
                <li><b><u>Automated Job Sheet:</u></b> Led and developed an automated monitoring system for 30k daily SAP jobs, utilizing Google App Script, JavaScript, JSON, HTML5/CSS3, Docker and SAP Production Systems. Integrated with Google Sheets  for real-time job tracking and notifications, significantly enhancing operational efficiency. The system reduced manual monitoring time by 30-45 minutes daily, improved overall monitoring efficiency threefold, and lowered incident tickets by 15%.</li>
                <li><b><u>Asia Pacific Demand Sensing Rollout:</u></b> Developed and implemented a demand sensing algorithm for the Asia-Pacific production region using Demand Planning Algorithms, SAP APO, R/3 and S/4 HANA, Inventory Optimization Tools, and data analysis technologies like Pandas and NumPy. The system automatically generated 6-week forecasts by analyzing future baseline, sales orders, shipments, and uplifts. This improved forecast accuracy by 20%, optimized inventory by 15%, and enhanced deployment efficiency, leading to a 25% reduction in stockouts.</li>
                <li><b><u>Year-End Automation Initiative:</u></b> Led the automation in global production systems using Java, Python, Pandas, Matplotlib, NumPy, and JavaScript, for analyzing and automating fiscal year transitions over SAP Production Systems and SAP IBP Cloud, planning area extensions, and time stream regeneration, reducing five tickets daily and improving operational efficiency across Production Systems and IBP Cloud.</li>
              </ul>
            </p>
          </div>

          <div id="proj">
            <h2>PROJECTS</h2>
            <hr />
            <ul>
              <li><b>Developed</b> a <b>full-stack e-commerce website</b> for <b>gaming products</b> using <b>HTML5/CSS3, Java, ReactJS, JDBC, RestAPI, and MongoDB</b>. <b>Enhanced</b> user engagement by <b>40%</b> through <b>UI optimization</b> and <b>reduced server response times by 25%</b> with efficient data handling.</li>
              <li><b>Developed</b> a <b>full-stack web server application</b> for managing blood and donor records during emergencies using <b>HTML5/CSS3, Java, JDBC, Google App Engine, and Spring Framework</b>. This system <b>reduced contact time with emergency services by 70%</b>, improving response efficiency. Technologies like <b>MongoDB, MySQL, and Google Cloud Platform</b> were utilized. <b>Website:</b> <a href="https://bloodbank-198712.appspot.com/">https://bloodbank-198712.appspot.com/</a>.</li>
              </ul>
            <br />
          </div>

          <div id="ach">
            <p>
              <h2>ACHIEVEMENTS</h2>
              <hr />
              <ul>
                <li>Recognition for resolving highest support tickets in the year <b>2021</b>.</li>
                <li>Awarded "<b>Rising Star</b>" for <b>initiating</b> and <b>successfully leading</b> the <b>Job Monitoring Sheet Automation project</b> in 2019.</li>
                <li>Received the <b>Operational Excellence</b> and <b>Technology & Innovation Excellence Award</b> for automating critical business processes and improving SAP system performance.</li>
              </ul>
            </p>
          </div>
        </div>
      </p>
    </div>
  );
}

export default Resume;