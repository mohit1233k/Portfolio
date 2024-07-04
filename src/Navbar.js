import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bg-red-200 w-full h-36 flex flex-row'>
      <div className="w-1/4 flex justify-between items-center b" >
        <img src='E:\coding\portfolio\src\instagram_profile_image.png' alt='LOGO'></img>
      </div>
      <div className="w-3/4 flex justify-around items-center p-14 pl-5 font-bold ">
      <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/About">ABOUT</Link>
        </div>
        <div>
          <Link to="/Skills">SKILLS</Link>
        </div>
        <div>
          <Link to="/Education">EDUCATION</Link>
        </div>
        <div>
          <Link to="/Experience">EXPERIENCE</Link>
        </div>
        <div>
          <Link to="/Projects">PROJECTS</Link>
        </div>
        <div>
          <Link to="/Resume">RESUME</Link>
        </div>
      </div>
    </div>
  );
}
