import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Demos
import DemoCustomChart from "./demo-custom-chart";
import DemoSharedEvents from "./demo-shared-events";
import DemoCustomComponents from "./demo-custom-components";
import DemoTooltips from "./demo-tooltips";
import DemoZoom from "./demo-zoom";
import DemoAnimation from "./demo-animation";

const Benefits = () => (
  <div className="Benefits">
    <h2 className="u-textCenter">Guides</h2>
    <div className="u-paddingSm">
      <div className="Grid Grid--gutters Grid--full medium-Grid--fit">
        <div className="Grid-cell u-textCenter">
          <div className="u-paddingSm">
            <DemoCustomChart />
            <p className="SubHeading">
              <Link to="/guides/custom-charts">Custom Charts</Link>
            </p>
          </div>
        </div>
        <div className="Grid-cell u-textCenter">
          <div className="u-paddingSm">
            <DemoZoom />
            <p className="SubHeading">
              <Link to="/guides/brush-and-zoom">Brush and Zoom</Link>
            </p>
          </div>
        </div>
        <div className="Grid-cell u-textCenter">
          <div className="u-paddingSm">
            <DemoCustomComponents />
            <p className="SubHeading">
              <Link to="/guides/custom-components">Custom Components</Link>
            </p>
          </div>
        </div>
        <div className="Grid-cell u-textCenter">
          <div className="u-paddingSm">
            <DemoTooltips />
            <p className="SubHeading">
              <Link to="/guides/tooltips">Tooltips</Link>
            </p>
          </div>
        </div>
        <div className="Grid-cell u-textCenter">
          <div className="u-paddingSm">
            <DemoSharedEvents />
            <p className="SubHeading">
              <Link to="/guides/events">Events</Link>
            </p>
          </div>
        </div>
        <div className="Grid-cell u-textCenter">
          <div className="u-paddingSm">
            <DemoAnimation />
            <p className="SubHeading">
              <Link to="/guides/animations">Animations</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
Benefits.propTypes = {
  style: PropTypes.object
};

Benefits.defaultProps = {
  style: null
};

export default Benefits;
