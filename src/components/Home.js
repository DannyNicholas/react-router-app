import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
          className='ui raised very padded text container segment'
          style={{marginTop:'80px'}}
      >
          <Link to='/card/alex' className='ui header'>Alex</Link>
          <p>Welcome to my home....</p>
      </div>
      <div
          className='ui raised very padded text container segment'
          style={{marginTop:'80px'}}
      >
          <Link to='/card/george' className='ui header'>George</Link>
          <p>Welcome to my home....</p>
      </div>
    </div>
  )
}

export default Home;
