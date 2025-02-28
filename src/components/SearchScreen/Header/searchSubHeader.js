import React from 'react';
import { Link } from 'react-router-dom';

const SearchSubHeader = () => {
  return (
    <div className="container-fluid py-1 px-5 border-bottom">
        <div className="col-md-6 " style={{marginLeft:'8%'}}>
          <ul className="nav"> 
            <li className="nav-item">
              <Link to="/" className="nav-link active text-dark" >All</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Images</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Videos</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Shopping</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">News</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Maps</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Forums</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">More</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default SearchSubHeader;
