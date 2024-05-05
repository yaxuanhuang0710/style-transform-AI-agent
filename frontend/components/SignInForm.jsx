import React from 'react'
import {useState } from 'react';
import { useRouter } from 'next/router';
// import { useUser } from './UserContext';
import Cookies from 'js-cookie';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  // const { setUser } = useUser();

  async function signin(e) {
    e.preventDefault(); // Prevent the default form submission
    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username:email, password:password }) // Use state values here
        });
        const data = await response.json();
        if (response.ok) {
            // Assuming useUser is a hook to manage user state and it’s imported
            // setUser(data.user); // Set user in context
            Cookies.set('user', JSON.stringify(data.user.id)); // Store in cookies
            console.log(data);
            //redirect to the dashboard page
            router.push(`/project`);
        } else {
            if(response.status === 404)
            {
                alert('User not found');
            }
            else if(response.status === 400)
            {
                alert('Invalid password');
            }
        }
    } catch (error) {
        console.error('Login error:', error);
    }
  }
      return (
        <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 rounded shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Sign In</h2>
        <form className="flex flex-col items-center" onSubmit={signin}>
          <div className="mb-4 w-full">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email state on change
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password state on change
            />
          </div>
          <div className="w-full">
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <a
            className="text-sm text-gray-200 hover:text-gray-300 mt-4"
            href="/signup"
          >
            Need an account? Sign Up
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignInForm
