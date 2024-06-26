import React from 'react'
import SignUpForm from '../components/SignUpForm';
import Head from 'next/head';

const signup = () => {
  return (
      <>
      <Head>
        <title>Sign Up | Texim.ai</title>
      </Head>

      {/* <div className="flex min-h-screen bg-gray-950">
        <div className="w-1/2 mx-auto my-auto p-8 text-white rounded-lg shadow-md">
          <UserForm />
        </div>
        <div className="w-1/2 mx-auto my-auto">
          <img src="../signin.png" alt="Sign In" />
        </div>
      </div> */}
       <div className="flex min-h-screen bg-gray-950">
        <div className="w-full mx-auto my-auto p-8 text-white rounded-lg shadow-md">
          <SignUpForm />
        </div>
      </div>
    </>
  )
}

export default signup
