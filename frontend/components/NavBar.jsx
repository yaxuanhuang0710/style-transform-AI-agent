import React from 'react'

const navBar = () => {
  return (
      <header className="flex justify-between w-full px-10 py-4 bg-gradient-to-r from-purple-950 to-purple-100">
        <a href="/">
          <h1 className="text-xl font-bold">Texim.ai</h1>
        </a>
          <div>
            <button className="text-white bg-transparent hover:bg-gray-500 font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
              Sign In
            </button>
            <button className="text-white bg-gradient-to-r from-purple-950 to-purple-500 hover:bg-purple-600 font-semibold py-2 px-4 ml-4 rounded">
              Get started
            </button>
          </div>
        </header>
  )
}

export default navBar
