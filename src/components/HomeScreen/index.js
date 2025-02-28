import React from 'react'
import NavBar from './navBar';
import HomeScreen from './homeScreen';


const Home = ({setSearch}) => {
  return (
    <>
      <NavBar />
      <HomeScreen setSearch={setSearch}/>
    </>
  )
}

export default Home
