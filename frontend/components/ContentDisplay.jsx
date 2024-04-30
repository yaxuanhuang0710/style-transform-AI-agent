import React from 'react'
import { useState } from 'react';
import { useUser } from './UserContext';

const ContentDisplay = ({ content, onSave, isLoading }) => {
  const [editableContent, setEditableContent] = useState(content);
  const showContent = content && content.length > 0;

  const handleSave = () => {
      onSave(editableContent);  // Calls the onSave function passed from the parent with the updated content
  };

    if (isLoading) {
        return <div className="flex justify-center items-center h-full w-full">Loading...</div>;
    }
    
    return (
      <div className="flex flex-col h-full w-full"> {/* This will make sure to use the full height and width */}
        {!showContent ? (
          <div className="flex flex-col items-center justify-center flex-grow"> {/* flex-grow will use available space */}
            <img src="/transform.svg" alt="AI" className="mx-auto mb-4" />
            <p className="text-center text-white">Your copies created by artificial intelligence will appear here.</p>
          </div>
        ): (
          <>
          <textarea 
            className="flex-grow rounded-md bg-gray-800 p-4 text-white resize-none"
            value={editableContent}
            onChange={(e) => setEditableContent(e.target.value)}
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
