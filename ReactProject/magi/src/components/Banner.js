import React from "react";
import "../styles/Banner.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="banner">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={360}>
          <span className="banner-title">
            {"hi"}
          </span>
        </Typist>
        <FadeInSection>
          <div className="banner-subtitle">Welcome.</div>
          <div className="banner-desc">Feel free to look around!</div>
        </FadeInSection>
      </div>
    );
  }
}

export default Banner;