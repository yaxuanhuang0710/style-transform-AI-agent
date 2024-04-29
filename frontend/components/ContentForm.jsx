import React from 'react'
import { useState, useEffect} from 'react';

const ContentForm = ({ projectData, onUpdate, onGenerate }) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    onUpdate(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerate();
  };

  return (
     <form onSubmit={handleSubmit} className='flex flex-col h-full ml-5'>
        <h2 class="text-2xl font-bold">Content Form</h2>
        <div class="mt-8">
        <label class="block">
            <span class="text-gray-50">Title</span>
            <input type="text" 
            name="title"
            class="bg-gray-950 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder=""
            value={projectData.title}
            onChange={handleChange}
            />
        </label>
        <label class="block mt-3">
            <span class="text-gray-50">Tone</span>
            <input type="text" 
            name="tone"
            class="bg-gray-950 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
            placeholder=""
            value={projectData.tone}
            onChange={handleChange}/>
        </label>
        <label class="block mt-3">
            <span class="text-gray-50">Purpose</span>
            <input type="text" 
            name="purpose"
            class="bg-gray-950 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder=""
            value={projectData.purpose}
            onChange={handleChange}/>
        </label>
        <label class="block mt-3">
            <span class="text-gray-50">Content</span>
            <textarea 
            name="content"
            class="bg-gray-950 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" spellcheck="false" value={projectData.content}
            onChange={handleChange}></textarea>
            </label>
            <label class="block mt-3">
                <span class="text-gray-50">What type of event is it?</span>
                <select 
                name="type"
                class="bg-gray-950 block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={projectData.type}
                onChange={handleChange}
                >
                  <option>Linkedin</option>
                  <option>Medium</option>
                  <option>Twitter</option>
                  <option>Instagram</option>
                </select>
              </label>
      {/* Include other form fields here */}
      <div class="mt-6 flex justify-center">
        <div className='w-full'>
        <button className='text-white bg-transparent hover:bg-gray-500 font-semibold py-2 px-4 border border-white hover:border-transparent rounded'>Back</button>
        </div>
      <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Generate
      </button>
      </div>
      </div>
    </form>
  )
}

export default ContentForm
