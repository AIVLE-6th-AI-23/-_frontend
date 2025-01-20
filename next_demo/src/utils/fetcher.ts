import { Project } from '@/types/project';
import { Post } from '@/types/post';

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch('https://api.example.com/projects', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export async function fetchPosts(projectId: string): Promise<Post[]> {
  const res = await fetch(`https://api.example.com/projects/${projectId}/posts`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function fetchPost(postId: string): Promise<Post> {
  const res = await fetch(`https://api.example.com/posts/${postId}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}
