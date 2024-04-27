import React from 'react'
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

  const navigateToSignIn = () => {
    router.push('/signin'); // Replace '/signin' with the path to your sign-in page
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-950">
        <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-50">
            AI Writing Style Transformer
          </h2>
          <p className="mt-3 text-xl px-20 py-10 w-3/4">
            With our cutting-edge tool, effortlessly convert your writings into
            various social media styles, tailor them for different audiences, and
            make content management a breeze. Get started today and see the
            transformation.
          </p>
          <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500  text-white font-bold py-2 px-4 rounded" onClick={navigateToSignIn}>
            Start Writing for free!
          </button>
        </main>
      </div>
    </div>
  )
}

export default Home;
