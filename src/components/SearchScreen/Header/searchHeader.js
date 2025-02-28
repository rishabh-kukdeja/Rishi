import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const SearchHeader = ({ searchTerm }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSearchText(searchTerm);
  }, [searchTerm]);

  return (
    <div className='col-md-12 py-2 d-flex align-items-center'>
      {/* Google Logo */}
      <Link to={"/"} className="ml-4">
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'
          alt='Google Logo'
          height="30"
          style={{ paddingLeft: "50px", paddingRight: "30px" }}
        />
      </Link>

      {/* Search Bar Container */}
      <div className='col-md-6 d-flex align-items-center justify-content-between border rounded-pill ml-2 px-2'>
        {/* Search Input Form */}
        <form style={{ width: '87%' }}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='form-control border-0 mx-2'
            style={{ outline: "none", boxShadow: "none" }}
          />
        </form>

        {/* Clear (X) Icon */}
        {searchText && (
          <i
            className='fa fa-times text-muted'
            style={{ cursor: 'pointer' }}
            onClick={() => setSearchText('')} // Clears the input when clicked
          ></i>
        )}

        {/* Microphone Icon */}
        <i className='fa fa-microphone text-muted mx-2' style={{ cursor: 'pointer' }}></i>

        {/* Search Icon */}
        <i className='fa fa-search text-muted' style={{ cursor: 'pointer' }}></i>
      </div>
      <ul className='nav ms-auto mr-5'>
          <li className='nav-item'>
            <a href='/' alt='apps'className='nav-link text-dark'>
              <i className='fa fa-th'></i>
            </a>
          </li>

          <li className='nav-item'>
            <a href='/' alt='user' className='nav-link text-dark'>
              <i className='fa fa-user'></i>
            </a>
          </li>
      </ul>
    </div>
  );
};

export default SearchHeader;
