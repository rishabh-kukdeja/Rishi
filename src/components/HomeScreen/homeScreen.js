import React, { useState } from 'react';

const HomeScreen = ({setSearch}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)){
      setSearch(input);
    }
  }

  const handleButton = () => {
    if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)){
      setSearch(input);
    }
  }

  const clearInput = () => {
    setInput('');
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center mt-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            alt="logo"
            className="mb-3"
            style={{ width: '270px' }}
          />
          <div
            className="formDiv col-md-6 d-flex align-items-center border rounded-pill px-3"
            style={{ height: '40px', maxWidth: '600px', border: '1px solid #dfe1e5' }}
          >
            <i className="fa fa-search text-muted"></i>
            <form style={{ width: '100%'}} className='ml-2' onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control border-0 mx-2"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              style={{ boxShadow: 'none', outline: 'none' }}
            />
            </form>
            {input && <i className="fa fa-times text-muted" style={{ cursor: 'pointer' }} onClick={clearInput}></i>}
            <button type="button" className="btn border-0">
              <i className="fa fa-microphone"></i>
            </button>
          </div>
          <div className="btns mt-3">
            <button type="button" className="btn btn-light mx-1 px-3 py-1" onClick={handleButton} style={{ fontSize: '14px' }}>
              Google Search
            </button>
            <button type="button" className="btn btn-light mx-1 px-3 py-1" style={{ fontSize: '14px' }}>
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;