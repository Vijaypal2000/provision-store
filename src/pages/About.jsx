import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./style/about.css";

// Define the About component
function About() {
  // Render the About component

  return (
    <>
      {/* Include the Navbar component */}
      <Navbar />

      {/* Main content of the About page */}
      <div className="container mt-4">
        {/* Title and description */}
        <h2 className="mb-4">Welcome to Provision Store</h2>
        <p>
          Provision Store is an E-shop website that serves as a virtual
          provision marketplace where you can purchase various types of
          provision products.
        </p>

        {/* About section with folder structure and how to start project */}
        <div className="row mt-4">
          {/* Provision-Store Folder Structure */}
          <div className="col-md-6">
            <div className="card border-light mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">
                  Provision-Store Folder Structure
                </h5>
                <ul className="list-unstyled">
                  <li>├── src</li>
                  <li>│ ├── components</li>
                  <li>│ │ ├── login</li>
                  <li>│ │ │ └── Login.jsx</li>
                  <li>│ │ ├── navbar</li>
                  <li>│ │ │ └── Navbar.jsx</li>
                  <li>│ │ ├── images</li>
                  <li>│ │ │ └── logo.png</li>
                  <li>│ │ └── ...</li>
                  <li>│ ├── pages</li>
                  <li>│ ├── style</li>
                  <li>│ │ └── about.css</li>
                  <li>│ ├── About.jsx</li>
                  <li>│ ├── Login.jsx</li>
                  <li>│ ├── ProductList.jsx</li>
                  <li>│ └── ...</li>
                  <li>│ ├── App.css</li>
                  <li>│ ├── App.js</li>
                  <li>│ ├── index.js</li>
                  <li>│ └── ...</li>
                  <li>├── public</li>
                  <li>│ └── ...</li>
                  <li>└── ... </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to start project */}
          <div className="col-md-6">
            <div className="card border-light mb-3">
              <div className="card-body">
                <h5 className="card-title mb-3">How to start the project</h5>
                <ol>
                  <li>
                    <span className="text-warning">git </span>clone
                    https://github.com/Vijaypal2000/provision-store
                  </li>
                  <li>
                    <span className="text-warning">cd</span> provision-store
                  </li>
                  <li>
                    <span className="text-warning">npm</span> install
                  </li>
                  <li>
                    <span className="text-warning">npm</span> start
                  </li>
                  <li>
                    This command will start the development server, and you can
                    view your React app in your browser at
                    http://localhost:3000.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
