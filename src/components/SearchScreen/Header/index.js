import React from 'react'
import SearchHeader from './searchHeader';
import SearchSubHeader from './searchSubHeader';

const Header = ({searchTerm}) => {
  return (
    <>
        <SearchHeader searchTerm={searchTerm}/>
        <SearchSubHeader />
    </>
  )
}

export default Header;
