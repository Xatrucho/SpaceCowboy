import React from "react"
import ReactDOM from "react-dom"
import logo from "../src/images/spaceship-swordfish-freelance.jpeg"
import code from "../src/images/space-matrix.jpeg"
import './index.css';
import './bg-styles.css';
// import '../src/images/spaceship-swordfish-freelance.jpeg'
// import "./App.css";


function Page() {
  return (
    <div className="bgimg">
          <div className="spaceship-container">
              <img src={logo} width="50%" height="50%" alt="logo" />
          </div>

          <div className="info-container">
              <div className="shop-name">
                <h1>Welcome to SwordFish Customs</h1>
              </div>

              <div className="my-title">
                <img src={code} width="20%" height="50px" alt="logo" />
                    <h2>Full Stack Web Development</h2>
                    <h3>By: Marlon Ponce</h3>
              </div>
            </div>

            <div className="language-container">
                <div className="Back-End">
                  <h3>Back-End:
                      <ul>
                        <li>Python3</li> 
                        <li>MongoDB</li> 
                        <li>Javascript</li>
                        <li>MySQL</li> 
                        <li>PHP</li> 
                        <li>Node.js</li>
                      </ul>
                  </h3>
                </div>

                <div className="Front-End">
                    <h3>Front-End:
                      <ul>
                        <li>SASS</li> 
                        <li>React.js</li> 
                        <li>HTML</li>
                        <li>CSS</li> 
                        <li>jQuery</li> 
                        <li>Javascript</li> 
                      </ul>
                    </h3>
                  </div>
                </div>

                <div className="footer">
                    <h4>
                      2022 Ponce Development
                    </h4>
                </div>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))

