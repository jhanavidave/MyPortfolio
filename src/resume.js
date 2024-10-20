import React from 'react';

function Resume() {
  return (
    <div>
      <hr color='black' height='1.5px' />
      <div id="page-look" padding="20px">
        {/* <h1 align="center">JHANAVI DAVE</h1> */}
        <br />
        <div id="res-head" align="center">
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=jhanavi.dave.01@gmail.com'>jhanavi.dave.01@gmail.com</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/jhanavi-dave'>linkedin.com/jhanavi-dave</a>
        </div>
        <div id="profile">
          <h3>PROFILE</h3>
          <hr />
          <p align="justify">Full Stack Developer with extensive experience in designing and deploying production systems, specializing in Java
            development, Spring framework, ReactJS, and API design. Proven ability to create scalable, efficient solutions using
            technologies like Java, ReactJS, Flutter, UiPath, and cloud platforms.</p>
        </div>

        <div id="edu">
          <h3>EDUCATION</h3>
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
          <h3>SKILLS</h3>
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
          <h3>EXPERIENCE</h3>
          <hr />
          <p>
            <h4>FULL STACK DEVELOPER</h4>
            <hr width="20%" align="left" />
            Gamer's Hub (Jan. 2024 - Apr. 2024)
            <ul>
              <li><b>Technologies used:</b> HTML5/CSS3, Java, ReactJS, Angular, JavaScript, JDBC, SQL, Neo4j, MongoDB, Servlets, JSP</li>
              <li><b>Developed</b> a <b>full-stack e-commerce website</b> offering a wide range of gaming products, and accessories. <b>Improved user engagement by 40%</b> due to an optimized user interface, <b>reduced server response times by 25% with efficient data handling</b>, enhancing overall website performance and driving a <b>15% increase in sales during the initial launch period.</b></li>
            </ul>
          </p>

          <p><h4>APPLICATION DEVELOPER</h4>
            <hr width="20%" align="left" />
            TaskBlast (Oct. 2024 - Dec. 2024)
            <ul>
              <li><b>Technologies used:</b> Flutter, Dart, Git, RestAPI, JSON, Android Studio, Android SDK, Firebase Authentication, SQLite, XML, VS Code, NoSQL, MongoDB, Java, HTML5/CSS3</li>
              <li>Developed a robust login system that requires user credentials for access ensuring private access through the task list for creating, editing and deleting their tasks, and setting reminders for important deadlines.</li>
              <li>Improved 37% by designing customizable themes, enabling users to tailor the app’s appearance through a selection of color schemes and layouts, promoting a more engaging user experience.</li>
            </ul></p>

          <p>
            <h4>SENIOR TECHNOLOGY ASSOCIATE</h4>
            <hr width="20%" align="left" />
            Colgate Global Business Sevices Pvt. Ltd. (July 2019 - June 2022)
            <ul>
              <li><b>Automated Job Sheet:</b> Self-initiated, led and developed an automated monitoring system for 30k daily SAP jobs, utilizing Google App Script, JavaScript, JSON, HTML5/CSS3, NetWeaver and SAP Production Systems. Integrated with Google Sheets for real-time job tracking and notifications, significantly enhancing operational efficiency. The system reduced manual monitoring time by 30-45 minutes daily, improved overall monitoring efficiency threefold, and lowered incident tickets by 15%.</li>
              <li><b>Year-End Automation Initiative:</b> Led the automation in global production systems using Java, Python, Pandas, Matplotlib, NumPy, and JavaScript, for analyzing and automating fiscal year transitions over SAP Production Systems and SAP IBP Cloud, planning area extensions, and time stream regeneration, reducing five tickets daily and improving operational efficiency across Production Systems and IBP Cloud, managed using Docker.</li>
              <li><b>North America S/4 HANA Consolidation:</b> Combined two North American SAP R/3 Production systems into a single SAP S/4 HANA Production system, utilizing SAP R/3, SAP S/4HANA, and IBP to monitor extraction and address transition issues, ensuring continued business processes</li>
              <li><b>Process Automation for Production System Item Management:</b> Automated item management processes in global production systems using UiPath and SAP Production Systems, reducing manual effort by 200+ hours monthly and enhancing operational efficiency by 20%.</li>
            </ul>
          </p>

          <p>
            <h4>FULL STACK DEVELOPER</h4>
            <hr width="20%" align="left" />
            StableLife - Blood Bank Management System using Cloud Computing (June 2017 - Dec. 2017)
            <ul>
              <li><b>Technologies used:</b> HTML5/CSS3, Java, ReactJS, JDBC, Google App Engine, Eclipse IDE, NoSQL, MongoDB, MySQL, GCP, Java EE, RestAPI, Spring Framework</li>
              <li>Developed a full-stack web server application system that included various modules to manage blood and donor records, particularly during emergencies, saving 70% contact time with emergency services.</li>
              <li><b>Website:</b> <a href='https://bloodbank-198712.appspot.com'>StableLife</a></li>
            </ul>
          </p>
        </div>
        <div id="ach">
          <p>
            <h3>ACHIEVEMENTS</h3>
            <hr />
            <ul>
              <li>Recognition for resolving highest support tickets in the year 2021.</li>
              <li>Awarded "Rising Star" for initiating and successfully leading the Job Monitoring Sheet Automation project.</li>
              <li>Received the Operational Excellence and Technology & Innovation Excellence Award for automating critical business processes and improving SAP system performance.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
