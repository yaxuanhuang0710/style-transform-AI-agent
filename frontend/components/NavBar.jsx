import React from 'react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const navBar = () => {
  // get session
  const { data: session } = useSession();
  const router = useRouter();

  const navigateToSignIn = () => {
    router.push('/signin'); // Replace '/signin' with the path to your sign-in page
  };
  return (
      <header className="flex justify-between w-full px-10 py-4 bg-gray-950">
        <a href="/">
          <h1 className="text-xl font-bold text-white">Texim.ai</h1>
        </a>
          <div>
            {session?(
               <button className="text-white bg-transparent hover:bg-gray-500 font-semibold py-2 px-4 border border-white hover:border-transparent rounded" onClick={navigateToSignIn}>
               Sign In
             </button>
            ) :  <button className="text-white bg-transparent hover:bg-gray-500 font-semibold py-2 px-4 border border-white hover:border-transparent rounded" onClick={signOut()}>
            Sign Out
          </button>}
          </div>
        </header>
  )
}

export default navBar
