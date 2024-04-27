import React from 'react'

const userForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Extract form data and call signIn or your sign up logic
        if (isSignUp) {
          // Sign up logic here
        } else {
          // Sign in logic
        }
      };    

      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md p-6 rounded shadow-md">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-50">Sign In</h2>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <div className="mb-4 w-full">
                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6 w-full">
                <label className="block text-gray-50 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
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

export default userForm
