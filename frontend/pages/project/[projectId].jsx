import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ContentForm from '../../components/ContentForm';
import ContentDisplay from '../../components/ContentDisplay';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Project = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const userId=Cookies.get('user');

  const [projectData, setProjectData] = useState({
    projectId: '',
    title: '',
    tone: '',
    purpose: '',
    content: '',
    type: '',
    generatedContent: '',
    createdTime: '',
    user: userId
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projectId !== 'new') {
      setLoading(true);
      fetch(`http://localhost:8000/project/show_detail/${projectId}`)
        .then(res => res.json())
        .then(data => {
          setProjectData(data);
          setLoading(false);
        })
        .catch(error => console.error('Failed to fetch project data:', error));
    }
  }, [projectId]);

  // console.log("parents",projectData);

  const handleUpdateProjectData = (key, value) => {
    setProjectData(prev => ({ ...prev, [key]: value }));
  };
  
  const handleGenerateContent = () => {
    setLoading(true);
    fetch('http://localhost:8000/chatbot/chat_with_gpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: projectData.title, 
        tone: projectData.tone, 
        purpose: projectData.purpose,
        content: projectData.content,
        type: projectData.type
      })
    })
    .then(res => res.json())
    .then(data => {
      // console.log("generated",extractContent(data.generated_content));
      setProjectData(prev => ({ ...prev, generated_content: data.generated_content}));
      console.log("projectData after generating",projectData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Failed to generate content:', error);
      setLoading(false);
    });
  };

  const handleSaveContent = async (content) => {
    if(projectId === 'new') {
    //create Project
    try {
      const response = await fetch('http://localhost:8000/project/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...projectData})
      });
      if (!response.ok) {
        throw new Error('Failed to save the content');
      }
      alert('Content saved successfully');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content: ' + error.message);
    }
  }
  else{
    //update Project
    try {
      console.log("testestest",projectData);
      const response = await fetch(`http://localhost:8000/project/update_project/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...projectData})
      });
      if (!response.ok) {
        throw new Error('Failed to save the content');
      }
      alert('Content saved successfully');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content: ' + error.message);
    }
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
          {/* <ContentDisplay content={projectData.generated_content} onSave={handleSaveContent} isLoading={loading} /> */}
          <ContentDisplay projectData={projectData} onUpdate={handleUpdateProjectData} onSave={handleSaveContent} isLoading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Project;