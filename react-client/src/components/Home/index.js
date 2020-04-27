import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Home() {
  return (
    <div className="Home">
      <Link to="/login">
        <Button className="button2" color="info">
          Log In
        </Button>
      </Link>
      <h1>Trakker</h1>
      <br />
      <br />
      <h3>Job Search Tracking Just Got Easy</h3>
      <br />
      <h5>
        Trakker is an efficient tool to organize and keep track of your next job
        opportunity.
      </h5>
      <Link to="/signup">
        <br />
        <br />
        <Button className="button1" color="info">
          Sign Up - It's Free
        </Button>
      </Link>
      <div>
        <img
          className="search"
          src="http://localhost:3000/public/search.png"
          alt="job-search-image"
          width="300"
          height="300"
        />
      </div>
    </div>
  );
}

export default Home;
