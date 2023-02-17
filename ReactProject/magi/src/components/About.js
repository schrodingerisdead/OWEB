import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import Picture from "../assets/img/picture.jpg";
import Photo from "../assets/img/me.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        Hi I'm Magdalena Oreshkova, currently a <b>student </b> 
        <a href="https://feit.ukim.edu.mk/">@FEEIT</a>, 
        always eager to learn more.
      </p>
    );
    const two = (
      <p>
        Some of my favourite things:<br></br>
        Music: Nirvana, Megadeth, Tool, Grimes, Iron Maiden, Tchaikovsky  
        Movies: Fight Club, The Matrix, Spirited Away, Neon Genesis Evangelion <br></br>
        Books: 1984(George Orwell), Crime and Punishment (Fyodor Illych Dostoevsky), Animal Farm(George Orwell)<br></br>
        Games: Undertale, Overwatch, South Park-The Stick Of Truth, Little Nightmares I and II
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:schrodingerisdead@yahoo.com">
          schrodingerisdead@yahoo.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript",
      "Python",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={Photo} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;