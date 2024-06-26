import React from 'react'
import { useState,useEffect } from 'react';
import { useUser } from './UserContext';

const ContentDisplay = ({ projectData, onUpdate,onSave, isLoading }) => {
  // const { content } = projectData.generated_content;
  // const [editableContent, setEditableContent] = useState(content);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onUpdate(name, value);
  };
  // useEffect(() => {
  //   setEditableContent(content);
  // }, [content]); // This tells React to re-run the effect when `content` changes

  const handleSave = () => {
    // console.log("child", projectData);
    onSave(projectData);  // Calls the onSave function passed from the parent with the updated content
  };

    if (isLoading) {
        return <div className="flex justify-center items-center h-full w-full">Loading...</div>;
    }
    
    return (
      <div className="flex flex-col h-full w-full"> {/* This will make sure to use the full height and width */}
        {!projectData.generated_content ? (
          <div className="flex flex-col items-center justify-center flex-grow"> {/* flex-grow will use available space */}
            <img src="/transform.svg" alt="AI" className="mx-auto mb-4" />
            <p className="text-center text-white">Your copies created by artificial intelligence will appear here.</p>
          </div>
        ): (
          <>
          <textarea 
            name="generated_content"
            className="flex-grow rounded-md bg-gray-800 p-4 text-white resize-none"
            value={projectData.generated_content}
            onChange={handleChange}
            // onChange={(e) => setEditableContent(e.target.value)}
          />
          <div className='flex justify-items-end'>
            <div className="w-3/4"></div>
            <button className="w-1/4 mt-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
            Save
          </button>
          </div>
          </>
        )}
      </div>
    );
}

export default ContentDisplay
