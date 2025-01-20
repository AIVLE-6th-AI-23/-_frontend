import PostsContainer from '@/containers/PostContainer';

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  return <PostsContainer projectId={params.projectId} />;
}
