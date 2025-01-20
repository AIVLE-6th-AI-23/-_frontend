'use client';

import { useState, useEffect } from 'react';
import ProjectList from '@/components/ProjectList';
import { fetchProjects } from '@/utils/fetcher';
import { Project } from '@/types/project';

export default function ProjectsContainer() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
