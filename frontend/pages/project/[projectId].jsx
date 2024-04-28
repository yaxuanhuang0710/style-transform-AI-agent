import React from 'react'
import Head from 'next/head';
import ContentForm from '../../components/ContentForm';
import ContentDisplay from '../../components/ContentDisplay';
import { useState } from 'react';
import { useRouter } from 'next/router';

const transform = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const [generatedContent, setGeneratedContent] = useState('');
  const [hasGeneratedHistory, setHasGeneratedHistory] = useState(false);

  const handleGenerateContent = (formData) => {
    // Simulate content generation based on the form data
    // Replace this with your API call or generation logic
    const newContent = `Generated content based on: ${formData.title}`;
    
    setGeneratedContent(newContent);
    setHasGeneratedHistory(true);
  };

  return (
    <div>
      <Head>
        <title>Content Transformation | Texim.ai</title>
      </Head>
      <div className="flex bg-gray-950 text-white">
        {/* Left side - Form */}
        <div className="w-1/2 p-8 flex flex-col">
          <ContentForm onGenerate={handleGenerateContent} />
        </div>

        {/* Right side - Content display */}
        <div className="w-1/2 flex flex-col items-center justify-center p-8">
          <ContentDisplay
            hasHistory={hasGeneratedHistory}
            content={generatedContent}
          />
        </div>
      </div>
    </div>
  )
}

export default transform
