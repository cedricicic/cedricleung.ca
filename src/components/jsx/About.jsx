import resume from "../../assets/pdf/Resume.pdf";

function About() {
  return (
    <div class="about-page">
      <section class="about-section">
        <h1 class="title">About me</h1>
        <p class="description">
          I’m a Mathematics + Co-op student at the University of Waterloo,
          actively seeking 2025 summer internships. I enjoy building web
          applications using React, Node.js, and JavaScript, and I also work
          with Python and libraries like Matplotlib, Pandas, and NumPy to
          analyse and visualise data effectively. Please check out my <a className = "resume-link" href = {resume}>resume</a> for
          a detailed overview of my skills and experience.{" "}
          <br/>
          <br/>
          Beyond mathematics and coding, I’ve had the rewarding experience of
          working as a senior barista, which fueled my ongoing passion for
          specialty coffee ☕!
        </p>
      </section>
      <section class="awards-section">
        <h2 class="subtitle">Awards and Achievements</h2>
        <ul class="awards-list">
          <li>
            University of Waterloo President’s Scholarship of Distinction{" "}
          </li>
          <li>Hypatia Contest School Champion (2023) </li>
          <li>Top 25% of contestants in the Hypatia Contest (2023) </li>
          <li>Top 25% of contestants in the CSMC (2023)</li>
          <li>Top 25% of contestants in the CSMC (2022)</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
