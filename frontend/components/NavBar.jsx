import React from 'react';
// import { useUser } from '../components/UserContext';
import Link from 'next/link';
import Cookies from 'js-cookie';

const navBar = () => {
  // get session
  // const { user } = useUser();
  const user = Cookies.get('user');

  const signout = () => {
    Cookies.remove('user');
    window.location.href = '/';
  }

  return (
      <header className="flex justify-between w-full px-10 py-4 bg-gray-950">
        <a href="/">
          <h1 className="text-xl font-bold text-white">Texim.ai</h1>
        </a>
          <div>
            {user?(
               <button className="text-white bg-transparent hover:bg-gray-500 font-semibold py-2 px-4 border border-white hover:border-transparent rounded"
               onClick={signout}>
               Sign Out
             </button>
            ) :( <Link href="/signin">
               <button className="text-white bg-transparent hover:bg-gray-500 font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
               Sign In
             </button>
             </Link>)}
          </div>
        </header>
  )
}

export default navBar
