import React from "react";
import "./App.css";

function App() {
  return (
    <div className="site-wrapper">
      <div className="cover-container">
        <div className="masthead clearfix">
          <div className="inner">
            <h3 className="masthead-brand">
              {/* <img src="{% static 'assets/images/nick.jpg' %}" alt="" /> */}
            </h3>
            <ul className="nav masthead-nav">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="mailto:nnutsukpui@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="inner cover">
          <h1 className="cover-heading">Hi!</h1>
          <p className="lead">
            My name is <b>Nicodemus Nutsukpui.</b>
          </p>
          <p className="lead">
            I live in{" "}
            <a
              href="https://goo.gl/maps/PWa7X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Accra</b>
            </a>
            , mostly spending my time building and tinkering with ideas and
            technologies. I co-founded{" "}
            <a
              href="http://nimstreet.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Nim Street</b>
            </a>
            , an online crowdfunding platform for creative projects from the
            African continent with these awesome{" "}
            <a
              href="http://www.nimstreet.com/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>guys</b>
            </a>
            . I'm a fun loving person with a healthy desire for good music and
            art.
          </p>
        </div>

        <div className="mastfoot">
          <div className="inner">
            <ul className="list-unstyled list-inline">
              <li className="twitter-link">
                <a
                  href="http://twitter.com/nick_o_d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-twitter"></i>
                </a>
              </li>
              <li className="github-link">
                <a
                  href="http://github.com/nicodee/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-github"></i>
                </a>
              </li>
              <li className="google-link">
                <a
                  href="http://google.com/+NicodemusNutsukpui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-google-plus"></i>
                </a>
              </li>
              <li className="linkedin-link">
                <a
                  href="http://gh.linkedin.com/in/nnutsukpui/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
