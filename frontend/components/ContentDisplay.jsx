import React from 'react'

const ContentDisplay = ({ hasHistory, content }) => {
    hasHistory = true;
    content = "Generated content based on: formData.title";
  return (
    <div className="flex flex-col h-full w-full"> {/* This will make sure to use the full height and width */}
      {hasHistory ? (
        <textarea 
          className="flex-grow rounded-md bg-gray-800 p-4 text-white resize-none"
          value={content} // Use the value attribute for a controlled component
          readOnly // Add this if you don't need the user to edit the content
        />
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow"> {/* flex-grow will use available space */}
          <img src="/transform.svg" alt="AI" className="mx-auto mb-4" />
          <p className="text-center text-white">Your copies created by artificial intelligence will appear here.</p>
        </div>
      )}
    </div>
  )
}

export default ContentDisplay
