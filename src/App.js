import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
          <h1>Hi!</h1>
          <p>
            My name is <b>Nicodemus Nutsukpui.</b>
          </p>
          <p>
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
  );
}

export default App;
