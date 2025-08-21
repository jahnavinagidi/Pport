import "./App.css";

import { IoArrowDown } from "react-icons/io5";

function BackToTop() {
  return (
    <div className="BackToTop">
      <div className="back-to-top-button">
        <span className="gradient">
          <a href="#top">
            Back to the top
            <IoArrowDown id="arrow-icon" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default BackToTop;
