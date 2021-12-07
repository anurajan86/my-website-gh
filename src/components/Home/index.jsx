import { Link, useLocation } from "react-router-dom";
import article1 from '../../images/websitephoto.png';

import "./style.css";

const Home = () => {
    return (
      <div className="home">
          <br/>
          <br/>
        <div className="title">
          <h1>
            <p>Hi,</p>
            <p>I'm Anuraag.</p>
          </h1>
          <Link to="about">
            <button>More Info</button>
          </Link>
        </div>
        <div className="person">
          {/* <img
            src={`${process.env.PUBLIC_URL}/websitephoto.PNG`}
            alt="person picture"
          /> */}
          <img src={article1} />
        </div>
      </div>
    );
  };

export default Home;