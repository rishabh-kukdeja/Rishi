import React from 'react';
import { Link } from 'react-router-dom';

const Data = ({ data }) => {
  return (
    <div className="col-md-12 text-left" style={{ textAlign: 'left', padding: '10px 0' }}>
      <div>
        <Link to={data.displayLink} style={{ color: '#1a0dab', fontSize: '14px', textDecoration: 'none' }}>
          {data.displayLink}
        </Link>{" "}
        <i className="fa fa-angle-down"></i>
      </div>

      <div>
        <Link to={data.formattedUrl} style={{ textDecoration: 'none' }}>
          <h3 style={{ color: '#1a0dab', fontSize: '20px', margin: '5px 0' }}>{data.title}</h3>
        </Link>
      </div>

      <p style={{ color: '#4d5156', fontSize: '14px', margin: '5px 0' }}>{data.snippet}</p>
    </div>
  );
};

export default Data;
