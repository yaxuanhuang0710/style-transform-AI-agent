import React from 'react'
import SignInForm from '../components/SignInForm';
import Head from 'next/head';

const signin = () => {
  return (
      <>
      <Head>
        <title>Sign in | Texim.ai</title>
      </Head>

       <div className="flex min-h-screen bg-gray-950">
        <div className="w-full mx-auto my-auto p-8 text-white rounded-lg shadow-md">
          <SignInForm />
        </div>
      </div>
    </>
  )
}

export default signin
