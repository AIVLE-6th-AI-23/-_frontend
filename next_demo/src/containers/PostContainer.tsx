'use client';

import { useState, useEffect } from 'react';
import PostList from '@/components/PostList';
import { fetchPosts } from '@/utils/fetcher';
import { Post } from '@/types/post';

interface Props {
  projectId: string;
}

export default function PostsContainer({ projectId }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts(projectId).then(setPosts);
  }, [projectId]);

  return (
    <div>
      <h1>Posts for Project {projectId}</h1>
      <PostList posts={posts} />
    </div>
  );
}
