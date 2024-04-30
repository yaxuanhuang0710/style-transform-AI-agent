import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ContentForm from '../../components/ContentForm';
import ContentDisplay from '../../components/ContentDisplay';
import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [projectData, setProjectData] = useState({
    projectId: '',
    title: '',
    tone: '',
    purpose: '',
    content: '',
    type: '',
    generatedContent: '',
    createdTime: '',
    createdBy: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projectId !== 'new') {
      setLoading(true);
      fetch(`http://localhost:8000/api/projects/${projectId}`)
        .then(res => res.json())
        .then(data => {
          setProjectData(data);
          setLoading(false);
        })
        .catch(error => console.error('Failed to fetch project data:', error));
    }
  }, [projectId]);

  const handleUpdateProjectData = (key, value) => {
    setProjectData(prev => ({ ...prev, [key]: value }));
  };

  const handleGenerateContent = () => {
    setLoading(true);
    fetch('http://localhost:8000/api/generateContent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: projectData.title, 
        tone: projectData.tone, 
        purpose: projectData.purpose, 
        type: projectData.type
      })
    })
    .then(res => res.json())
    .then(data => {
      setProjectData(prev => ({ ...prev, generatedContent: data.generatedContent }));
      setLoading(false);
    })
    .catch(error => {
      console.error('Failed to generate content:', error);
      setLoading(false);
    });
  };

  const handleSaveContent = async (content) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/saveProject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...projectData})
      });
      if (!response.ok) {
        throw new Error('Failed to save the content');
      }
      alert('Content saved successfully');
      setLoading(false);
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>{projectId === 'new' ? 'New Project' : 'Edit Project'} | Texim.ai</title>
      </Head>
      <div className="flex bg-gray-950 text-white">
        <div className="w-1/2 p-8 flex flex-col">
          <ContentForm projectData={projectData} onUpdate={handleUpdateProjectData} onGenerate={handleGenerateContent}/>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-8">
          <ContentDisplay content={projectData.generatedContent} onSave={handleSaveContent} isLoading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Project;