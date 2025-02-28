import React from 'react';
import Data from './Data';

const SearchData = ({ googleData }) => {
  if (!googleData || !googleData.searchInformation) {
    return <p>Loading...</p>;  // Display a fallback message if googleData is not available
  }

  return (
    <div className='col-md-12 py-3 px-5'>
      <p className='small text-dark'>
        All {googleData?.searchInformation?.formattedTotalResults || 0} Results found in 
        {googleData?.searchInformation?.formattedSearchTime || 0} Seconds.
      </p>

      {googleData?.items?.map((data, index) => (
        <Data key={index} data={data} />
      ))}
    </div>
  );
};

export default SearchData;
