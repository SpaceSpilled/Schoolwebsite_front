import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="Section">
        <div className="Section-1">
          <h3>Add Schools</h3>
          <p>
            {" "}
            Add schools in a database by providing name, city, state, contact,
            image and email id{" "}
          </p>
          <br />
          <a href="AddSchool">
            {" "}
            <button> AddSchool </button>{" "}
          </a>
        </div>

        <div className="Section-1">
          <h3>Show Schools</h3>
          <p>
            {" "}
            Show schools from the database and display school's name, address,
            city and image
          </p>
          <br />
          <a href="showSchools">
            {" "}
            <button> ShowSchools </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
